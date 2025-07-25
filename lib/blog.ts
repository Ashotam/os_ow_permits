export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  coverImage?: string
  author: string
  publishedAt: string
  updatedAt: string
  tags: string[]
  category: string
  status: "draft" | "published"
  readingTime: number
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string
}

// Mock data for demonstration
export const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Complete Guide to Oversize Load Permits in 2024",
    slug: "complete-guide-oversize-load-permits-2024",
    content: `# Complete Guide to Oversize Load Permits in 2024

Getting an oversize load permit can seem daunting, but with the right knowledge and preparation, the process becomes much more manageable. In this comprehensive guide, we'll walk you through everything you need to know about oversize load permits.

## What Qualifies as an Oversize Load?

An oversize load is any shipment that exceeds the standard legal dimensions for highway travel. These dimensions vary by state, but generally include:

- **Width**: Over 8.5 feet
- **Height**: Over 13.5 feet  
- **Length**: Over 53 feet for trailers
- **Weight**: Over 80,000 pounds gross vehicle weight

## Types of Oversize Permits

### Single Trip Permits
Perfect for one-time shipments, these permits are valid for a specific route and timeframe.

### Annual Permits
Cost-effective for frequent oversize shipments, valid for multiple trips within a year.

### Superload Permits
Required for extremely large or heavy loads that exceed even oversize limits.

## State-by-State Requirements

Each state has unique requirements for oversize load permits. Some key considerations:

- **Texas**: Requires detailed route surveys for loads over certain dimensions
- **California**: Has strict environmental restrictions in certain areas
- **Florida**: Requires pilot cars for loads over specific widths

## Best Practices for Permit Applications

1. **Plan Ahead**: Apply for permits at least 3-5 business days before travel
2. **Accurate Measurements**: Double-check all dimensions and weights
3. **Route Planning**: Use approved routes and avoid restricted areas
4. **Documentation**: Keep all permits and supporting documents readily available

## Common Mistakes to Avoid

- Underestimating load dimensions
- Not checking for seasonal restrictions
- Failing to coordinate with utility companies
- Inadequate pilot car arrangements

## Conclusion

Proper permit planning is essential for safe and legal oversize load transportation. When in doubt, consult with experienced permit professionals who can guide you through the process and ensure compliance with all regulations.`,
    excerpt:
      "Everything you need to know about obtaining oversize load permits, including requirements, types, and best practices for 2024.",
    coverImage: "/placeholder.svg?height=400&width=800&text=Oversize+Load+Truck",
    author: "Mike Rodriguez",
    publishedAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    tags: ["oversize permits", "trucking regulations", "transportation"],
    category: "Permits",
    status: "published",
    readingTime: 8,
  },
  {
    id: "2",
    title: "Understanding IFTA: A Driver's Guide to Fuel Tax Reporting",
    slug: "understanding-ifta-drivers-guide-fuel-tax-reporting",
    content: `# Understanding IFTA: A Driver's Guide to Fuel Tax Reporting

The International Fuel Tax Agreement (IFTA) is a cooperative agreement between the lower 48 states of the United States and the Canadian provinces. This guide will help you understand IFTA requirements and compliance.

## What is IFTA?

IFTA simplifies the reporting of fuel use by interstate motor carriers. Instead of obtaining fuel permits for each state, qualified motor carriers receive IFTA licenses and fuel decals.

## Who Needs IFTA?

You need IFTA if your vehicle:
- Has two axles and a gross vehicle weight over 26,000 pounds, OR
- Has three or more axles regardless of weight, AND
- Travels in more than one IFTA jurisdiction

## IFTA Reporting Requirements

### Quarterly Reports
- Due by the last day of the month following each quarter
- Must include detailed fuel purchase and mileage records
- Late filing results in penalties and interest

### Record Keeping
Maintain records for four years including:
- Distance records by jurisdiction
- Fuel purchase receipts
- Vehicle maintenance records

## Tips for IFTA Compliance

1. **Keep Detailed Records**: Document every mile and gallon
2. **Use Technology**: GPS tracking and fuel cards simplify reporting
3. **File on Time**: Avoid costly penalties with timely submissions
4. **Understand Tax Rates**: Rates vary by jurisdiction and fuel type

## Common IFTA Mistakes

- Incomplete mileage records
- Missing fuel receipts
- Incorrect jurisdiction reporting
- Late filing penalties

## Conclusion

IFTA compliance doesn't have to be complicated. With proper record-keeping and understanding of requirements, you can avoid penalties and focus on what matters most - running your business.`,
    excerpt:
      "A comprehensive guide to IFTA compliance, reporting requirements, and best practices for interstate truckers.",
    coverImage: "/placeholder.svg?height=400&width=800&text=IFTA+Fuel+Tax",
    author: "Sarah Johnson",
    publishedAt: "2024-01-10T14:30:00Z",
    updatedAt: "2024-01-10T14:30:00Z",
    tags: ["IFTA", "fuel tax", "compliance", "reporting"],
    category: "Compliance",
    status: "published",
    readingTime: 6,
  },
  {
    id: "3",
    title: "Top 5 Route Planning Tools for Commercial Drivers",
    slug: "top-5-route-planning-tools-commercial-drivers",
    content: `# Top 5 Route Planning Tools for Commercial Drivers

Efficient route planning is crucial for commercial drivers. The right tools can save time, fuel, and help avoid costly violations. Here are our top picks for 2024.

## 1. Rand McNally TND Series

**Best for**: Professional drivers who want dedicated hardware
**Key Features**:
- Truck-specific routing
- Real-time traffic updates
- Weigh station locations
- Fuel stop planning

## 2. Garmin dēzl Series

**Best for**: Drivers who need advanced fleet management
**Key Features**:
- Custom truck profiles
- Load-to-dock guidance
- Driver alerts and warnings
- Integration with fleet management systems

## 3. Trucker Path App

**Best for**: Community-driven information
**Key Features**:
- Real-time truck stop reviews
- Parking availability
- Fuel prices
- Weigh station status

## 4. PC*MILER

**Best for**: Fleet managers and dispatchers
**Key Features**:
- Precise mileage calculations
- Route optimization
- Toll cost estimation
- HazMat routing

## 5. Google Maps (Commercial Features)

**Best for**: Budget-conscious drivers
**Key Features**:
- Free to use
- Real-time traffic
- Street view
- Integration with other apps

## Choosing the Right Tool

Consider these factors:
- **Budget**: Free apps vs. premium solutions
- **Features**: Basic navigation vs. comprehensive fleet management
- **Hardware**: Smartphone apps vs. dedicated GPS units
- **Integration**: Compatibility with existing systems

## Pro Tips for Route Planning

1. **Plan Multiple Routes**: Always have backup options
2. **Check Restrictions**: Verify bridge heights and weight limits
3. **Consider Traffic Patterns**: Plan around rush hours
4. **Update Regularly**: Keep your tools and maps current

## Conclusion

The right route planning tool can make a significant difference in your efficiency and profitability. Consider your specific needs and budget when making your choice.`,
    excerpt:
      "Discover the best route planning tools for commercial drivers, including features, pricing, and recommendations for different use cases.",
    coverImage: "/placeholder.svg?height=400&width=800&text=Route+Planning+GPS",
    author: "David Thompson",
    publishedAt: "2024-01-05T09:15:00Z",
    updatedAt: "2024-01-05T09:15:00Z",
    tags: ["route planning", "GPS", "trucking tools", "navigation"],
    category: "Technology",
    status: "published",
    readingTime: 5,
  },
]

export const mockCategories: BlogCategory[] = [
  {
    id: "1",
    name: "Permits",
    slug: "permits",
    description: "Everything about trucking permits and regulations",
  },
  {
    id: "2",
    name: "Compliance",
    slug: "compliance",
    description: "Stay compliant with trucking laws and regulations",
  },
  {
    id: "3",
    name: "Technology",
    slug: "technology",
    description: "Latest tools and technology for truckers",
  },
  {
    id: "4",
    name: "Safety",
    slug: "safety",
    description: "Safety tips and best practices for drivers",
  },
]

// Utility functions
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function getPostsByCategory(category: string): BlogPost[] {
  return mockPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase() && post.status === "published",
  )
}

export function getPostsByTag(tag: string): BlogPost[] {
  return mockPosts.filter(
    (post) => post.tags.some((t) => t.toLowerCase() === tag.toLowerCase()) && post.status === "published",
  )
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase()
  return mockPosts.filter(
    (post) =>
      post.status === "published" &&
      (post.title.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.content.toLowerCase().includes(lowercaseQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))),
  )
}
