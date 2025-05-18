import express from 'express';
import { getAllPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/forumControllers';


const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);


// router.post('/:id/like', ToggellikePost);
// router.post('/:id/comment', createComment);





export default router;