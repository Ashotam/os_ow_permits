"use client"
import { PostForm } from "../postForm"
import { useBlogStore } from "../../../store/useBlogStore"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Truck, Eye, LogOut, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Post {
  title: string
  slug: string
  content: string
  excerpt?: string
  author: string
  category: string
  tags?: string[]
  coverImage?: string
  publishedAt?: string
}

export default function NewPostPage() {
  const { createPost } = useBlogStore()
  const router = useRouter()

  const handleCreate = async (data:Post) => {
    await createPost(data)
    router.push("/admin/posts")
  }

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
              <p className="text-gray-600">Write and publish a new blog post</p>
            </div>
          </div>
        </div>
           <PostForm onSubmit={handleCreate} />
      </div>
    </div>
  )
}
