import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, User, ArrowRight, Menu, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Oversize Load Permits: A Complete Guide for Truckers",
    excerpt:
      "Learn everything you need to know about oversize load permits, including requirements, costs, and application processes across different states.",
    author: "Mike Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Permits",
    image: "/placeholder.svg?height=300&width=500",
    slug: "understanding-oversize-load-permits",
  },
  {
    id: 2,
    title: "State-by-State Guide to Trip Permit Requirements",
    excerpt:
      "Navigate the complex world of trip permits with our comprehensive state-by-state breakdown of requirements, fees, and processing times.",
    author: "Sarah Davis",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Regulations",
    image: "/placeholder.svg?height=300&width=500",
    slug: "state-by-state-trip-permit-guide",
  },
  {
    id: 3,
    title: "How to Avoid Common Permit Violations and Fines",
    excerpt:
      "Protect your business from costly violations with these essential tips for staying compliant with permit regulations.",
    author: "David Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Compliance",
    image: "/placeholder.svg?height=300&width=500",
    slug: "avoid-permit-violations-fines",
  },
  {
    id: 4,
    title: "The Future of Digital Permits in the Trucking Industry",
    excerpt:
      "Explore how digital transformation is revolutionizing the permit application process and what it means for truckers.",
    author: "Lisa Chen",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Technology",
    image: "/placeholder.svg?height=300&width=500",
    slug: "future-digital-permits-trucking",
  },
  {
    id: 5,
    title: "Emergency Permit Services: When You Need Permits Fast",
    excerpt: "Learn about emergency permit services and how to get the permits you need when time is critical.",
    author: "Tom Wilson",
    date: "2024-01-05",
    readTime: "5 min read",
    category: "Services",
    image: "/placeholder.svg?height=300&width=500",
    slug: "emergency-permit-services",
  },
  {
    id: 6,
    title: "Cost-Effective Strategies for Fleet Permit Management",
    excerpt:
      "Discover proven strategies to reduce permit costs and streamline the permit management process for your fleet.",
    author: "Jennifer Martinez",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Fleet Management",
    image: "/placeholder.svg?height=300&width=500",
    slug: "cost-effective-fleet-permit-management",
  },
]

const categories = ["All", "Permits", "Regulations", "Compliance", "Technology", "Services", "Fleet Management"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-orange-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="bg-red-100 text-red-700">
              📚 Trucking Knowledge Hub
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Trucking Permits
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                {" "}
                Blog & Resources
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest insights, regulations, and best practices in the trucking permit industry.
              Expert advice from seasoned professionals to help you navigate the road ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-red-600 hover:bg-red-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <p className="text-gray-600">Our most popular and comprehensive guide</p>
          </div>

          <Card className="overflow-hidden border-0 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 w-fit mb-4">
                  {blogPosts[0].category}
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h3>
                <p className="text-gray-600 mb-6 text-lg">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                </div>
                <Link href={`/blog/${blogPosts[0].slug}`}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Articles</h2>
            <p className="text-gray-600">Stay up to date with the latest trucking permit news and insights</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-red-100 text-red-700">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-red-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
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
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
            <p className="text-xl text-red-100">
              Get the latest trucking permit news, regulations, and expert tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-red-200">Join 5,000+ truckers who trust our insights. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.893-.957-2.178-1.555-3.594-1.555-2.71,0-4.92 2.211-4.92 4.92 0 .39.045.765.127 1.124C7.691 8.341 4.066 6.215 1.613 3.94c-.422.724-.665 1.566-.665 2.479 0 1.71 .87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.372 3.946 4.827-.413.111-.849.171-1.304.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.212 7.548 2.212 9.058 0 14.01-7.506 14.01-14.01 0-.213-.005-.426-.015-.637.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
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
