"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Truck, Save, Eye, LogOut, ArrowLeft, Upload, X, Plus } from "lucide-react"
import Link from "next/link"
import { getCurrentUser, logout } from "@/lib/auth"
import { mockCategories, generateSlug, calculateReadingTime } from "@/lib/blog"

export default function NewPostPage() {
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const [status, setStatus] = useState("draft")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      router.push("/admin")
    } else {
      setUser(currentUser)
    }
  }, [router])

  const handleLogout = () => {
    logout()
    router.push("/admin")
  }

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate saving
    setTimeout(() => {
      setIsLoading(false)
      router.push("/admin/posts")
    }, 1000)
  }

  const handlePreview = () => {
    // In a real app, this would open a preview modal or new tab
    alert("Preview functionality would be implemented here")
  }

  if (!user) {
    return <div>Loading...</div>
  }

  const slug = generateSlug(title)
  const readingTime = calculateReadingTime(content)

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
              <span className="text-xl font-bold text-gray-900">TruckPermits Pro</span>
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
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={handlePreview}>
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Post Title</CardTitle>
                  <CardDescription>Write a compelling title for your blog post</CardDescription>
                </CardHeader>
                <CardContent>
                  <Input
                    placeholder="Enter post title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-lg font-medium"
                    required
                  />
                  {title && <p className="text-sm text-gray-500 mt-2">URL: /blog/{slug}</p>}
                </CardContent>
              </Card>

              {/* Content */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Content</CardTitle>
                  <CardDescription>Write your blog post content in Markdown format</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Write your blog post content here... You can use Markdown formatting."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={20}
                    className="font-mono text-sm"
                    required
                  />
                  {content && (
                    <p className="text-sm text-gray-500 mt-2">Estimated reading time: {readingTime} minutes</p>
                  )}
                </CardContent>
              </Card>

              {/* Excerpt */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Excerpt</CardTitle>
                  <CardDescription>A brief summary of your post for previews and SEO</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Write a brief excerpt..."
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    rows={3}
                    required
                  />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Publish Settings */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Publish Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Select value={status} onValueChange={setStatus}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                      disabled={isLoading}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {isLoading ? "Saving..." : status === "published" ? "Publish" : "Save Draft"}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Category */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {mockCategories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.name}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                  <CardDescription>Add relevant tags to help readers find your content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add tag..."
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddTag())}
                    />
                    <Button type="button" onClick={handleAddTag} size="sm">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center space-x-1">
                        <span>{tag}</span>
                        <button type="button" onClick={() => handleRemoveTag(tag)} className="ml-1 hover:text-red-600">
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cover Image */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Cover Image</CardTitle>
                  <CardDescription>Add a cover image for your post</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Image URL..."
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                  />
                  <Button type="button" variant="outline" className="w-full bg-transparent">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Image
                  </Button>
                  {coverImage && (
                    <div className="relative h-32 rounded-lg overflow-hidden">
                      <img
                        src={coverImage || "/placeholder.svg"}
                        alt="Cover preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
