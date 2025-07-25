import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Clock, User, ArrowRight, Tag, Menu, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { mockPosts, mockCategories, formatDate } from "@/lib/blog"

export default function BlogPage() {
  const publishedPosts = mockPosts.filter((post) => post.status === "published")
  const featuredPost = publishedPosts[0]
  const recentPosts = publishedPosts.slice(1, 4)
  const latestPosts = publishedPosts.slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/osow-logo-horizontal.webp"
                alt="OSOW Permits Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="/blog" className="text-red-600 font-medium">
                Blog
              </Link>
              <Link href="/#permits" className="text-gray-600 hover:text-gray-900 transition-colors">
                Permit Types
              </Link>
              <Link href="/#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                Reviews
              </Link>
              <Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/request-a-quote">
                <Button variant="ghost" className="hidden sm:inline-flex">
                  Apply for Permits
                </Button>
              </Link>
              <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                Call Us
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

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
                  <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
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
                  <Card key={post.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
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
                  <div key={post.id} className="flex space-x-3">
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
                  <Input placeholder="Your email address" />
                  <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                  src="/osow-logo-horizontal.webp"
                  alt="OSOW Permits Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-gray-600 mb-4">
                Your trusted partner for all your trucking permit needs. Licensed and bonded in all 50 states.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-gray-900">
                  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.893-.957-2.178-1.555-3.594-1.555-2.71,0-4.92 2.211-4.92 4.92 0 .39.045.765.127 1.124C7.691 8.341 4.066 6.215 1.613 3.94c-.422.724-.665 1.566-.665 2.479 0 1.71 .87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.372 3.946 4.827-.413.111-.849.171-1.304.171-.314 0-.615-.30-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.212 7.548 2.212 9.058 0 14.01-7.506 14.01-14.01 0-.213-.005-.426-.015-.637.961-.689 1.8-1.56 2.46-2.548l-.047-.20z"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/request-a-quote" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Request a Quote
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">123 Trucking Lane, Suite 100, Anytown, USA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span className="text-gray-600">(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span className="text-gray-600">info@osowpermits.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} OSOWpermits. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
