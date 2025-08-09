// app/blog/page.tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {  Calendar, User, ArrowRight, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/blog"
import { getAllPublishedPosts } from "@/lib/db" 
export const metadata = {
  title: "Trucking Industry Insights | OSOWpermits Blog",
  description: "Expert trucking permit tips, regulations, and news across the United States. Stay informed with OSOWpermits.",
}

export default async function BlogPage() {
  const posts = await getAllPublishedPosts()
  const featuredPost = posts[0]
  const recentPosts = posts.slice(1, 4)
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-red-100 text-red-700 mb-4">
            OSOWpermits Blog
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Trucking Industry Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert advice, industry updates, and practical guides for professional truck drivers and fleet operators.
          </p>
        </div>

        {/* Featured post */}
        {featuredPost && (
          <Card className="mb-12 border-0 shadow-lg overflow-hidden">
            <div className="relative h-64 sm:h-80">
              <Image
                src={featuredPost.coverImage || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <Badge className="bg-red-600 hover:bg-red-700 mb-3">Featured</Badge>
                <h2 className="text-3xl font-bold">{featuredPost.title}</h2>
                <p className="text-sm">
                  {featuredPost.excerpt?.length > 120
                   ? featuredPost.excerpt.slice(0, 100) + "..."
                       : featuredPost.excerpt}
                       </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span><User className="inline w-4 h-4" /> {featuredPost.author}</span>
                  <span><Calendar className="inline w-4 h-4" /> {formatDate(featuredPost.publishedAt)}</span>
                </div>
              </div>
            </div>
            <CardContent className="grid place-items-center my-3">
              <Link href={`/blog/${featuredPost.slug}`}>
                <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                  Read Full Article <ArrowRight className="ml-2 w-4 h-4 " />
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Other posts */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {recentPosts.map((post) => (
            <Card key={post._id.toString()} className="border-0 shadow-lg">
              <div className="relative h-48">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <Badge variant="outline">{post.category}</Badge>
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" size="sm">Read More <ArrowRight className="ml-1 w-3 h-3" /></Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
