"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Clock, User, ArrowRight, Tag, Menu, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {  mockCategories, formatDate } from "@/lib/blog"
import {useBlogStore} from "../../store/useBlogStore"
import { useEffect } from "react"
export default function BlogPage() {
  
  const {posts,fetchPosts} = useBlogStore()
  const publishedPosts = posts.filter((post) => post.status === "published")
  const featuredPost = publishedPosts[0]
  const recentPosts = publishedPosts.slice(1, 4)
  const latestPosts = publishedPosts.slice(0, 3)
  useEffect(()=>{
    fetchPosts()
    console.log(posts)
  },[])
    useEffect(()=>{
    
    console.log(posts)
  },[posts])
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blog Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-red-100 text-red-700 mb-4">
            OSOWpermits Blog
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Trucking Industry Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert advice, industry updates, and practical guides for professional truck drivers and fleet operators.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {featuredPost && (
              <Card className="mb-12 border-0 shadow-lg overflow-hidden">
                <div className="relative h-64 sm:h-80">
                  <Image
                    src={featuredPost.coverImage || "/placeholder.svg?height=320&width=800"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <Badge className="bg-red-600 hover:bg-red-700 mb-3">Featured</Badge>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2 leading-tight">{featuredPost.title}</h2>
                    <p className="text-gray-200 mb-4 line-clamp-2">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredPost.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readingTime} min read</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}

            {/* Recent Posts Grid */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {recentPosts.map((post) => (
                  <Card key={post._id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={post.coverImage || "/placeholder.svg?height=192&width=400"}
                        alt={post.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{formatDate(post.publishedAt)}</span>
                      </div>
                      <CardTitle className="text-lg leading-tight hover:text-red-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readingTime} min</span>
                          </div>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm">
                            Read More
                            <ArrowRight className="ml-1 w-3 h-3" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Posts List */}
            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>
              <div className="space-y-6">
                {publishedPosts.map((post) => (
                  <Card key={post._id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-4 gap-6 p-6">
                      <div className="relative h-32 md:h-24">
                        <Image
                          src={post.coverImage || "/placeholder.svg?height=96&width=160"}
                          alt={post.title}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:col-span-3 space-y-3">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          <span className="text-xs text-gray-500">{formatDate(post.publishedAt)}</span>
                        </div>
                        <h3 className="text-xl font-semibold hover:text-red-600 transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readingTime} min read</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="w-5 h-5 text-red-600" />
                  <span>Search Articles</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Input placeholder="Search blog posts..." className="pr-10" />
                  <Button size="sm" className="absolute right-1 top-1 h-8 w-8 p-0" variant="ghost">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Latest Posts */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Latest Posts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {latestPosts.map((post) => (
                  <div key={post._id} className="flex space-x-3">
                    <div className="relative w-16 h-12 flex-shrink-0">
                      <Image
                        src={post.coverImage || "/placeholder.svg?height=48&width=64"}
                        alt={post.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium line-clamp-2 hover:text-red-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{formatDate(post.publishedAt)}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Tag className="w-5 h-5 text-orange-600" />
                  <span>Categories</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {mockCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/blog/category/${category.slug}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-medium">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {posts.filter((p) => p.category === category.name && p.status === "published").length}
                    </Badge>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
