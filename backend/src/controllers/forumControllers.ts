import { NextFunction, Request, Response} from 'express';
import prisma from '../lib/prisma.js';
// import { v2 as cloudinary } from 'cloudinary';


export const getAllPosts = async (req: Request, res: Response) => {

    // const { page = 1, limit = 20 } = req.query;

  // Parse & sanitise query params ----------------------------------------
    const page  = Math.max(1, Number(req.query.page)  || 1);
    const limit = Math.min(100, Math.max(1, Number(req.query.limit) || 20));
    const skip  = (page - 1) * limit;
    try {

        // Fetch data and count in parallel
     const [posts, totalPosts] = await Promise.all([
      prisma.forumPost.findMany({
        take: limit,
        skip: skip,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.forumPost.count(),
    ]);

    const totalPages = Math.ceil(totalPosts / limit);

     res.status(200).json({
      data: posts,
      meta: {
        page,
        limit,
        totalPosts,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });

    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}




export const getPostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: 'Post ID is required.' });
  }

  try {
    // Increment view count atomically **and** fetch the full post in one trip
    const post = await prisma.forumPost.update({
      where: { id },
      data:  { viewCount: { increment: 1 } },
      include: {
        author:   { select: { id: true, name: true, avatar: true } },
        category: true,
        comments: {
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            content: true,
            createdAt: true,
            likeCount: true,
            author: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    res.status(200).json({ data: post });
  } catch (error) {
    console.error('Error fetching post:', error);
    next(error);
  }
};




export const createPost = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized. Please login.' });
    }

    const { title, content, tags = [], category, image } = req.body as {
      title: string;
      content: string;
      tags?: string[];
      category: string;
      image?: string;
    };

    if (!title?.trim() || !content?.trim()) {
      return res.status(400).json({ error: 'Title and content are required.' });
    }

    if (!category) {
      return res.status(400).json({ error: 'Category is required.' });
    }

    const categoryRecord = await prisma.forumCategory.findUnique({
      where: { id: category },
      select: { id: true },
    });

    if (!categoryRecord) {  
      return res.status(404).json({ error: 'Category not found.' });
    }

    // let imageUrl: string | undefined;
    // if (image) {
    //   try {
    //     const uploaded = await cloudinary.uploader.upload(image, {
    //       folder: 'forum_posts',
    //       unique_filename: true,
    //       allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
    //       transformation: [{ width: 1280, height: 720, crop: 'limit' }],
    //     });
    //     imageUrl = uploaded.secure_url;
    //   } catch (err) {
    //     console.error('Cloudinary upload failed:', err);
    //     return res.status(500).json({ error: 'Image upload failed.' });
    //   }
    // }

    const newPost = await prisma.forumPost.create({
      data: {
        title: title.trim(),
        content: content.trim(),
        category: {
          connect: { id: category },
        },
        // image: imageUrl,
        author: {
          connect: { id: (req.user as any).id },
        },
        // tags: { set: tags }, // Uncomment once enabled in schema
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
        category: true,
      },
    });

    return res.status(201).json({
      message: 'Post created successfully',
      data: newPost,
    });
  } catch (error) {
    console.error('Error creating post:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};



export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized. Please login.' });
  }

  try {
    const post = await prisma.forumPost.findUnique({
      where: { id },
    });

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    if (post.authorId !== (req.user as any).id) {
      return res.status(403).json({ error: 'Forbidden. You are not the author of this post.' });
    }

    const { title, content, tags = [], category, image } = req.body as {
      title: string;
      content: string;
      tags?: string[];
      category: string;
      image?: string;
    };

    if (!title?.trim() || !content?.trim()) {
      return res.status(400).json({ error: 'Title and content are required.' });
    }

    if (!category) {
      return res.status(400).json({ error: 'Category is required.' });
    }

    const categoryRecord = await prisma.forumCategory.findUnique({
      where: { id: category },
      select: { id: true },
    });

    if (!categoryRecord) {
      return res.status(404).json({ error: 'Category not found.' });
    }

    let imageUrl: string | undefined;
    // Uncomment when ready for image upload TODO
    /*
    if (image) {
      try {
        const uploaded = await cloudinary.uploader.upload(image, {
          folder: 'forum_posts',
          unique_filename: true,
          allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
          transformation: [{ width: 1280, height: 720, crop: 'limit' }],
        });
        imageUrl = uploaded.secure_url;
      } catch (err) {
        console.error('Cloudinary upload failed:', err);
        return res.status(500).json({ error: 'Image upload failed.' });
      }
    }
    */

    const updatedPost = await prisma.forumPost.update({
      where: { id },
      data: {
        title: title.trim(),
        content: content.trim(),
        category: { connect: { id: category } },
        // image: imageUrl,
        // tags: { set: tags },
      },
    });

    res.status(200).json({
      message: 'Post updated successfully',
      data: updatedPost,
    });
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized. Please login.' });
    }

    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: 'Post ID is required.' });
    }

    const post = await prisma.forumPost.findUnique({
      where: { id },
      select: { id: true, authorId: true },
    });

    // image: true

    if (!post) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    const isSuperAdmin = (req.user as any).role === 'superadmin';
    const isAuthor     = post.authorId === (req.user as any).id;

    if (!isSuperAdmin && !isAuthor) {
      return res.status(403).json({ error: 'Forbidden. You cannot delete this post.' });
    }

    // Attempt to remove attached image from Cloudinary (non‑fatal on error)  TODO
    // if (post.image) {
    //   try {
    //     const publicId = extractCloudinaryPublicId(post.image);
    //     await cloudinary.uploader.destroy(publicId);
    //   } catch (err) {
    //     console.warn('Cloudinary deletion failed:', err);
    //   }
    // }

    await prisma.forumPost.delete({ where: { id } });
    return res.status(200).json({ message: 'Post deleted successfully.' });
  } catch (error) {
    console.error('Error deleting post:', error);
    next(error);
  }
};



const extractCloudinaryPublicId = (url: string): string => {
  // Strip params
  const noParams = url.split('?')[0];
  // Remove leading part up to `/upload/`
  const [ , path ] = noParams.split('/upload/');
  // Remove file extension
  return path.replace(/\.[^.]+$/, '');
};


