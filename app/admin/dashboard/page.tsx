"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, FileText, Eye, Edit, Trash2, Plus, LogOut, BarChart3, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { getCurrentUser, logout } from "@/lib/auth"
import {  formatDate } from "@/lib/blog"
import {useBlogStore} from "../../store/useBlogStore"

interface User {
  name: string
  [key: string]: any
}

export default function AdminDashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const { posts, fetchPosts,deletePost } = useBlogStore()

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
      fetchPosts()
    }
  }, [router])
useEffect(()=>{
  console.log(posts,"4444")
},[posts])
  const handleLogout = () => {
    logout()
    router.push("/admin")
  }

  if (!user) {
    return <div>Loading...</div>
  }

  const publishedPosts = posts.filter((post) => post.status === "published")
  const draftPosts = posts.filter((post) => post.status === "draft")

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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Dashboard</h1>
          <p className="text-gray-600">Manage your blog content and monitor performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Posts</p>
                  <p className="text-3xl font-bold text-gray-900">{posts.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Published</p>
                  <p className="text-3xl font-bold text-green-600">{publishedPosts.length}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Drafts</p>
                  <p className="text-3xl font-bold text-orange-600">{draftPosts.length}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Edit className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

         
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Posts</CardTitle>
                  <CardDescription>Manage your blog content</CardDescription>
                </div>
                <Link href="/admin/posts/new">
                  <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                    <Plus className="w-4 h-4 mr-2" />
                    New Post
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {posts.slice(0, 5).map((post) => (
                    <div
                      key={post._id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium text-gray-900 truncate">{post.title}</h3>
                          <Badge variant={post.status === "published" ? "default" : "secondary"}>{post.status}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readingTime} min read</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        {post.status === "published" && (
                          <Link href={`/blog/${post.slug}`}>
                            <Button size="sm" variant="outline">
                              <Eye className="w-3 h-3" />
                            </Button>
                          </Link>
                        )}
                        <Link href={`/admin/posts/${post._id}/edit`}>
                          <Button size="sm" variant="outline">
                            <Edit className="w-3 h-3" />
                          </Button>
                        </Link>
                        <Button
                         size="sm"
                          variant="outline"
                           className="text-red-600
                            hover:text-red-700 bg-transparent" 
                             onClick={() => handleDelete(post._id)}>
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href="/admin/posts">
                    <Button variant="outline" className="w-full bg-transparent">
                      View All Posts
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Stats */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/admin/posts/new">
                  <Button className="w-full justify-start bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Post
                  </Button>
                </Link>
                <Link href="/admin/posts">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <FileText className="w-4 h-4 mr-2" />
                    Manage Posts
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    <Eye className="w-4 h-4 mr-2" />
                    View Blog
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest changes and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">Published "Complete Guide to Oversize Load Permits"</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">Updated "IFTA Guide" draft</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">Created new post draft</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

           
          </div>
        </div>
      </div>
    </div>
  )
}
