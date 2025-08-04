"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Truck, Search, Filter, Eye, Edit, Trash2, Plus, LogOut, Calendar, Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getCurrentUser, logout,User as Admin } from "@/lib/auth"
import {useBlogStore} from "../../store/useBlogStore"
import {formatDate } from "../../../lib/blog"
export default function AdminPostsPage() {
  const [user, setUser] = useState<Admin|null >(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const { posts,deletePost} = useBlogStore()

  const router = useRouter()

   const handleLogout = () => {
    logout()
    router.push("/admin")
  }
const handleDelete = async (postId: string) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this post?")
  if (confirmDelete) {
    await deletePost(postId)
  }
}

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      router.push("/admin")
    } else {
      setUser(currentUser)
    }
  }, [router])

 
  if (!user) {
    return <div>Loading...</div>
  }

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || post.status === statusFilter
    return matchesSearch && matchesStatus
  })

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

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user.name}</span>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/admin/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Manage Posts</h1>
              <p className="text-gray-600">Create, edit, and manage your blog content</p>
            </div>
          </div>
          <Link href="/admin/posts/new">
            <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <Card className="border-0 shadow-lg mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-500" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="all">All Status</option>
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts List */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Posts ({filteredPosts.length})</CardTitle>
            <CardDescription>{statusFilter === "all" ? "All posts" : `${statusFilter} posts`}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No posts found matching your criteria.</p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <div
                    key={post._id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-medium text-gray-900 truncate">{post.title}</h3>
                        <Badge variant={post.status === "published" ? "default" : "secondary"}>{post.status}</Badge>
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-2">{post.excerpt}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readingTime} min read</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{post.tags.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      {post.status === "published" && (
                        <Link href={`/blog/${post.slug}`}>
                          <Button size="sm" variant="outline" title="View Post">
                            <Eye className="w-3 h-3" />
                          </Button>
                        </Link>
                      )}
                      <Link href={`/admin/posts/${post._id}/edit`}>
                        <Button size="sm" variant="outline" title="Edit Post">
                          <Edit className="w-3 h-3" />
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 hover:text-red-700 hover:border-red-300 bg-transparent"
                        title="Delete Post"
                         onClick={() => handleDelete(post._id)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
