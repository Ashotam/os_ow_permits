
export interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt: string
  status: "draft" | "published"
  category: string
  tags: string[]
  coverImage?: string
  readingTime: number
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string
}

export const mockCategories: BlogCategory[] = [
  {
    id: "1",
    name: "Permit Guides",
    slug: "permit-guides",
    description: "Step-by-step guides for obtaining various permits",
  },
  {
    id: "2",
    name: "Industry News",
    slug: "industry-news",
    description: "Latest updates from the trucking industry",
  },
  {
    id: "3",
    name: "Regulations",
    slug: "regulations",
    description: "Understanding trucking regulations and compliance",
  },
  {
    id: "4",
    name: "Tips & Tricks",
    slug: "tips-tricks",
    description: "Practical advice for truck drivers",
  },
]


export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}


