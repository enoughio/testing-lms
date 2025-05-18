export type ForumCategory = {
  id: string
  name: string
  description: string
  postCount: number
  icon: string
}

export type ForumPost = {
  id: string
  title: string
  content: string
  categoryId: string
  authorId: string
  authorName: string
  authorAvatar: string
  createdAt: string
  updatedAt: string
  viewCount: number
  likeCount: number
  commentCount: number
  isPinned: boolean
}

export type ForumComment = {
  id: string
  postId: string
  content: string
  authorId: string
  authorName: string
  authorAvatar: string
  createdAt: string
  likeCount: number
}
