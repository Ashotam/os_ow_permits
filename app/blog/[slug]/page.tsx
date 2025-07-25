import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, ArrowLeft, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { mockPosts, mockCategories, formatDate } from "@/lib/blog"
import ReactMarkdown from "react-markdown"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = mockPosts.find((p) => p.slug === params.slug && p.status === "published")

  if (!post) {
    notFound()
  }

  const relatedPosts = mockPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        p.status === "published" &&
        (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag))),
    )
    .slice(0, 3)

  const latestPosts = mockPosts.filter((p) => p.status === "published").slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TruckPermits Pro</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-red-600 font-medium">
                Blog
              </Link>
              <Link href="/#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>

            <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
              Call Us
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/blog" className="hover:text-red-600 transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-900">{post.title}</span>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Back to Blog */}
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Badge variant="outline">{post.category}</Badge>
                <span className="text-sm text-gray-500">{formatDate(post.publishedAt)}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {post.title}
              </h1>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>By {post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>

                {/* Social Share */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Share:</span>
                  <Button size="sm" variant="outline" className="p-2 bg-transparent">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2 bg-transparent">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2 bg-transparent">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2 bg-transparent">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Cover Image */}
              {post.coverImage && (
                <div className="relative h-64 sm:h-80 lg:h-96 mb-8 rounded-xl overflow-hidden">
                  <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
              )}
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">{children}</h1>
                  ),
                  h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>,
                  p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">{children}</ol>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-600 my-6">
                      {children}
                    </blockquote>
                  ),
                  strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t">
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="hover:bg-red-100 hover:text-red-700 cursor-pointer">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <Card className="mt-8 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.author}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Professional trucking industry expert with over 15 years of experience in permits, compliance, and
                      fleet management. Passionate about helping drivers navigate the complex world of commercial
                      transportation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="relative h-32">
                        <Image
                          src={relatedPost.coverImage || "/placeholder.svg?height=128&width=300"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardContent className="p-4">
                        <Badge variant="outline" className="text-xs mb-2">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="font-semibold text-sm line-clamp-2 hover:text-red-600 transition-colors mb-2">
                          <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                        </h3>
                        <p className="text-xs text-gray-500">
                          {formatDate(relatedPost.publishedAt)} • {relatedPost.readingTime} min read
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Latest Posts */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Latest Posts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {latestPosts.map((latestPost) => (
                  <div key={latestPost.id} className="flex space-x-3">
                    <div className="relative w-16 h-12 flex-shrink-0">
                      <Image
                        src={latestPost.coverImage || "/placeholder.svg?height=48&width=64"}
                        alt={latestPost.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium line-clamp-2 hover:text-red-600 transition-colors">
                        <Link href={`/blog/${latestPost.slug}`}>{latestPost.title}</Link>
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{formatDate(latestPost.publishedAt)}</p>
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
                      {mockPosts.filter((p) => p.category === category.name && p.status === "published").length}
                    </Badge>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Stay Updated</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest trucking industry insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                  <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all published posts
export async function generateStaticParams() {
  return mockPosts
    .filter((post) => post.status === "published")
    .map((post) => ({
      slug: post.slug,
    }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = mockPosts.find((p) => p.slug === params.slug && p.status === "published")

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | TruckPermits Pro Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}
