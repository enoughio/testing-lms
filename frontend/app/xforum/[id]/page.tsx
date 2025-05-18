"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Heart, Loader2, MessageSquare, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import  Navbar  from "@/components/navbar"
import  Footer  from "@/components/footer"
import { mockForumService } from "@/lib/mock-api/forum-service"
import type { ForumCategory, ForumComment, ForumPost } from "@/types/forum"
import { useAuth } from "@/lib/auth-provider"
import { useToast } from "@/components/ui/use-toast"

export default function ForumPostPage() {
  const { id } = useParams<number>()
  const router = useRouter()
  const { user } = useAuth()
  const { toast } = useToast()
  const [post, setPost] = useState<ForumPost | null>(null)
  const [comments, setComments] = useState<ForumComment[]>([])
  const [categories, setCategories] = useState<ForumCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [commentText, setCommentText] = useState("")
  const [submittingComment, setSubmittingComment] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [postData, commentsData, categoriesData] = await Promise.all([
          mockForumService.getPost(id as string),
          mockForumService.getComments(id as string),
          mockForumService.getCategories(),
        ])
        setPost(postData)
        setComments(commentsData)
        setCategories(categoriesData)
      } catch (error) {
        console.error("Error fetching post data:", error)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchData()
    }
  }, [id])

  const handleLikePost = async () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to like posts",
        variant: "destructive",
      })
      return
    }

    try {
      const updatedPost = await mockForumService.likePost(id as string)
      setPost(updatedPost)
      toast({
        title: "Post liked",
        description: "You have successfully liked this post",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to like post",
        variant: "destructive",
      })
    }
  }

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to comment",
        variant: "destructive",
      })
      return
    }

    if (!commentText.trim()) {
      toast({
        title: "Empty Comment",
        description: "Please enter a comment",
        variant: "destructive",
      })
      return
    }

    setSubmittingComment(true)

    try {
      const newComment = await mockForumService.createComment({
        postId: id as string,
        content: commentText,
        authorId: user.id,
        authorName: user.name,
        authorAvatar: user.avatar || "/placeholder.svg?height=40&width=40",
      })

      setComments((prev) => [newComment, ...prev])
      setCommentText("")
      toast({
        title: "Comment Added",
        description: "Your comment has been added successfully",
      })

      // Update post comment count
      if (post) {
        setPost({
          ...post,
          commentCount: post.commentCount + 1,
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add comment",
        variant: "destructive",
      })
    } finally {
      setSubmittingComment(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col  max-w-[1920px] lg:overflow-x-auto">
        <Navbar />
        <div className="container flex flex-1 items-center justify-center py-12">
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-lg font-medium">Loading post...</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="container flex flex-1 items-center justify-center py-12">
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg font-medium">Post not found</p>
            <Button variant="outline" onClick={() => router.push("/forum")}>
              Back to Forum
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container py-6 md:py-8">
        <div className="flex flex-col gap-6">
          <Button variant="ghost" className="w-fit" onClick={() => router.push("/forum")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Forum
          </Button>

          <Card>
            <CardHeader className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.authorAvatar || "/placeholder.svg"}
                      alt={post.authorName}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">{post.authorName}</p>
                      <p className="text-xs text-muted-foreground">
                        Posted on {new Date(post.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">{categories.find((c) => c.id === post.categoryId)?.name || "General"}</Badge>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{post.title}</h1>
                  <p className="mt-2 whitespace-pre-line text-muted-foreground">{post.content}</p>
                </div>
              </div>
            </CardHeader>
            <CardFooter className="flex items-center justify-between border-t p-6">
              <div className="flex items-center gap-6">
                <Button variant="ghost" size="sm" className="flex items-center gap-1" onClick={handleLikePost}>
                  <Heart className="h-4 w-4" />
                  <span>{post.likeCount}</span>
                </Button>
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{post.commentCount} comments</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">{post.viewCount} views</span>
              </div>
            </CardFooter>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Comments</h2>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmitComment}>
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Write a comment..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      disabled={!user || submittingComment}
                    />
                    <div className="flex justify-end">
                      <Button type="submit" disabled={!user || submittingComment}>
                        {submittingComment ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Posting...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Post Comment
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            {comments.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">No comments yet</h3>
                <p className="text-muted-foreground">Be the first to comment on this post</p>
              </div>
            ) : (
              <div className="space-y-4">
                {comments.map((comment) => (
                  <Card key={comment.id}>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                          <Image
                            src={comment.authorAvatar || "/placeholder.svg"}
                            alt={comment.authorName}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <div>
                            <p className="font-medium">{comment.authorName}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(comment.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm">{comment.content}</p>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <Heart className="h-4 w-4" />
                            <span className="ml-1">{comment.likeCount}</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}
