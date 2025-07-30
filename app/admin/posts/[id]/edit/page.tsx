"use client"

import { useBlogStore } from "../../../../store/useBlogStore"
import { PostForm } from "../../postForm"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Truck, Eye, LogOut, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
export default function EditPostPage() {
  const { id } = useParams()
  const { posts, updatePost,fetchPosts } = useBlogStore()
  const router = useRouter()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const foundPost = posts.find(p => p._id === id)
    if (foundPost) setPost(foundPost)
  }, [posts, id])

  const handleUpdate = async (data) => {
   const { _id, ...updateData } = data
  await updatePost(id as string, updateData)
    await fetchPosts()
  router.push("/admin/posts")
  }

  if (!post) return <div>Loading...</div>

 return (
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">OSOWpermits</span>
              <Badge variant="secondary" className="ml-2">
                Admin
              </Badge>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/admin/posts">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Posts
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Create New Post</h1>
              <p className="text-gray-600">Edit and publish your blog post</p>
            </div>
          </div>
        </div>
         <PostForm initialData={post} onSubmit={handleUpdate} />
      </div>
    </div>
  )
}
