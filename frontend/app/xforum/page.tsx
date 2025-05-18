"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, Eye, Heart, MessageSquare, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import  Navbar  from "@/components/navbar"
import  Footer  from "@/components/footer"
import { mockForumService } from "@/lib/mock-api/forum-service"
import type { ForumCategory, ForumPost } from "@/types/forum"
import { useAuth } from "@/lib/auth-provider"
import { useToast } from "@/components/ui/use-toast"

// Dynamic icon component
const DynamicIcon = ({ name }: { name: string }) => {
  const icons: Record<string, React.ReactNode> = {
    MessageSquare: <MessageSquare className="h-5 w-5" />,
    BookOpen: <BookOpen className="h-5 w-5" />,
    // Add more icons as needed
  }

  return <>{icons[name] || <MessageSquare className="h-5 w-5" />}</>
}

export default function ForumPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [categories, setCategories] = useState<ForumCategory[]>([])
  const [posts, setPosts] = useState<ForumPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const [categoriesData, postsData] = await Promise.all([
          mockForumService.getCategories(),
          mockForumService.getAllPosts(),
        ])
        setCategories(categoriesData)
        setPosts(postsData.posts)
      } catch (error) {
        console.error("Error fetching forum data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleCreatePost = () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to create a post",
        variant: "destructive",
      })
      return
    }

    // Redirect to create post page
    // router.push("/forum/create")
    toast({
      title: "Feature Coming Soon",
      description: "Creating new posts will be available soon!",
    })
  }

  return (

    <div className="flex min-h-screen flex-col  max-w-[1920px] lg:overflow-x-auto">
      <Navbar />

      <div className="container py-6 md:py-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Community Forum</h1>
            <p className="text-muted-foreground">Join discussions, ask questions, and share knowledge</p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:w-1/2">
              <Input
                type="search"
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Button onClick={handleCreatePost}>
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {loading ? (
                      Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <div key={i} className="flex items-center gap-2 rounded-md p-2">
                            <div className="h-5 w-5 animate-pulse rounded-full bg-muted" />
                            <div className="h-4 w-full animate-pulse rounded bg-muted" />
                          </div>
                        ))
                    ) : (
                      <>
                        <div
                          className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-muted"
                          onClick={() => setSearchQuery("")}
                        >
                          <MessageSquare className="h-5 w-5" />
                          <span className="font-medium">All Posts</span>
                          <Badge variant="secondary" className="ml-auto">
                            {posts.length}
                          </Badge>
                        </div>
                        {categories.map((category) => (
                          <div
                            key={category.id}
                            className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-muted"
                            onClick={() => setSearchQuery(category.name)}
                          >
                            <DynamicIcon name={category.icon} />
                            <span>{category.name}</span>
                            <Badge variant="secondary" className="ml-auto">
                              {category.postCount}
                            </Badge>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-3">
              <Tabs defaultValue="all">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="all">All Posts</TabsTrigger>
                    <TabsTrigger value="popular">Popular</TabsTrigger>
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="mt-4 space-y-4">
                  {loading ? (
                    Array(3)
                      .fill(0)
                      .map((_, i) => (
                        <Card key={i}>
                          <CardContent className="p-6">
                            <div className="space-y-3">
                              <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />
                              <div className="h-4 w-full animate-pulse rounded bg-muted" />
                              <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
                            </div>
                          </CardContent>
                        </Card>
                      ))
                  ) : filteredPosts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <MessageSquare className="h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium">No posts found</h3>
                      <p className="text-muted-foreground">Try adjusting your search or create a new post</p>
                    </div>
                  ) : (
                    filteredPosts.map((post) => (
                      <Card key={post.id}>
                        <CardHeader className="p-4 pb-0">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-2">
                              <Image
                                src={post.authorAvatar || "/placeholder.svg"}
                                alt={post.authorName}
                                width={32}
                                height={32}
                                className="rounded-full"
                              />
                              <div>
                                <p className="text-sm font-medium">{post.authorName}</p>
                                <p className="text-xs text-muted-foreground">
                                  {new Date(post.createdAt).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            {post.isPinned && <Badge variant="secondary">Pinned</Badge>}
                          </div>
                        </CardHeader>
                        <CardContent className="p-4">
                          <Link href={`/forum/${post.id}`}>
                            <h3 className="text-lg font-semibold hover:text-primary hover:underline">{post.title}</h3>
                          </Link>
                          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.content}</p>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between border-t p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{post.viewCount}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{post.commentCount}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="h-4 w-4 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{post.likeCount}</span>
                            </div>
                          </div>
                          <Badge variant="outline">
                            {categories.find((c) => c.id === post.categoryId)?.name || "General"}
                          </Badge>
                        </CardFooter>
                      </Card>
                    ))
                  )}
                </TabsContent>

                <TabsContent value="popular" className="mt-4 space-y-4">
                  {loading ? (
                    <div className="flex items-center justify-center py-12">
                      <p>Loading popular posts...</p>
                    </div>
                  ) : (
                    [...filteredPosts]
                      .sort((a, b) => b.likeCount - a.likeCount)
                      .slice(0, 5)
                      .map((post) => (
                        <Card key={post.id}>
                          <CardHeader className="p-4 pb-0">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-2">
                                <Image
                                  src={post.authorAvatar || "/placeholder.svg"}
                                  alt={post.authorName}
                                  width={32}
                                  height={32}
                                  className="rounded-full"
                                />
                                <div>
                                  <p className="text-sm font-medium">{post.authorName}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {new Date(post.createdAt).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              {post.isPinned && <Badge variant="secondary">Pinned</Badge>}
                            </div>
                          </CardHeader>
                          <CardContent className="p-4">
                            <Link href={`/forum/${post.id}`}>
                              <h3 className="text-lg font-semibold hover:text-primary hover:underline">{post.title}</h3>
                            </Link>
                            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.content}</p>
                          </CardContent>
                          <CardFooter className="flex items-center justify-between border-t p-4">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Eye className="h-4 w-4 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{post.viewCount}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{post.commentCount}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className="h-4 w-4 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{post.likeCount}</span>
                              </div>
                            </div>
                            <Badge variant="outline">
                              {categories.find((c) => c.id === post.categoryId)?.name || "General"}
                            </Badge>
                          </CardFooter>
                        </Card>
                      ))
                  )}
                </TabsContent>

                <TabsContent value="recent" className="mt-4 space-y-4">
                  {loading ? (
                    <div className="flex items-center justify-center py-12">
                      <p>Loading recent posts...</p>
                    </div>
                  ) : (
                    [...filteredPosts]
                      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                      .slice(0, 5)
                      .map((post) => (
                        <Card key={post.id}>
                          <CardHeader className="p-4 pb-0">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-2">
                                <Image
                                  src={post.authorAvatar || "/placeholder.svg"}
                                  alt={post.authorName}
                                  width={32}
                                  height={32}
                                  className="rounded-full"
                                />
                                <div>
                                  <p className="text-sm font-medium">{post.authorName}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {new Date(post.createdAt).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              {post.isPinned && <Badge variant="secondary">Pinned</Badge>}
                            </div>
                          </CardHeader>
                          <CardContent className="p-4">
                            <Link href={`/forum/${post.id}`}>
                              <h3 className="text-lg font-semibold hover:text-primary hover:underline">{post.title}</h3>
                            </Link>
                            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.content}</p>
                          </CardContent>
                          <CardFooter className="flex items-center justify-between border-t p-4">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Eye className="h-4 w-4 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{post.viewCount}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageSquare className="h-4 w-4 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{post.commentCount}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className="h-4 w-4 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">{post.likeCount}</span>
                              </div>
                            </div>
                            <Badge variant="outline">
                              {categories.find((c) => c.id === post.categoryId)?.name || "General"}
                            </Badge>
                          </CardFooter>
                        </Card>
                      ))
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}
