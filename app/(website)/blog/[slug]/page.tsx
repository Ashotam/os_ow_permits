import { notFound } from "next/navigation"
import { getPostBySlug } from "@/lib/db"
import { formatDate } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { User, Calendar, Clock, ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import type { Metadata, ResolvingMetadata  } from "next"

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post not found",
      description: "The blog post you're looking for doesn't exist.",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags ?? [],
  }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) return notFound()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/blog">
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden mt-8">
          {post.coverImage && (
            <div className="relative h-64 sm:h-96">
              <Image src={post.coverImage} alt={post.title} fill className="object-cover" priority  />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          )}

          <div className="p-8 sm:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge variant="outline">{post.category}</Badge>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium text-gray-700">Tags:</span>
                {post.tags?.map((tag: string) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
