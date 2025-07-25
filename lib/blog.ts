export interface BlogPost {
  id: string
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

export const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Complete Guide to Oversize Load Permits: Everything You Need to Know",
    slug: "complete-guide-oversize-load-permits",
    excerpt:
      "Learn everything about oversize load permits, from application requirements to route planning. This comprehensive guide covers all 50 states and common scenarios.",
    content: `# Complete Guide to Oversize Load Permits

Oversize load permits are essential for transporting cargo that exceeds standard legal dimensions. This comprehensive guide will walk you through everything you need to know about obtaining and managing oversize load permits.

## What Qualifies as an Oversize Load?

An oversize load typically exceeds one or more of these standard dimensions:
- **Width**: Over 8.5 feet (102 inches)
- **Height**: Over 13.5 feet (varies by state)
- **Length**: Over 48-53 feet (varies by trailer type)

## State-by-State Requirements

Each state has specific requirements for oversize loads:

### California
- Maximum width: 12 feet without escort
- Height restrictions vary by route
- Weekend travel restrictions apply

### Texas  
- Self-issue permits available online
- Escort requirements based on dimensions
- Special routing for certain areas

## Application Process

1. **Determine Route**: Plan your exact travel route
2. **Check Restrictions**: Verify state-specific limitations
3. **Submit Application**: Include vehicle details and load specifications
4. **Pay Fees**: Costs vary by state and load size
5. **Receive Permit**: Digital or physical permit issued

## Best Practices

- Apply for permits at least 3-5 business days in advance
- Keep permits easily accessible during transport
- Follow designated routes exactly as specified
- Maintain required escort vehicles when mandated

## Common Mistakes to Avoid

- Not checking bridge clearances
- Ignoring weekend/holiday restrictions  
- Failing to notify utilities for height clearance
- Not having backup routes planned

Need help with your oversize load permit? Contact OSOWpermits for expert assistance with applications across all 50 states.`,
    author: "Mike Johnson",
    publishedAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
    status: "published",
    category: "Permit Guides",
    tags: ["oversize", "permits", "regulations", "compliance"],
    coverImage: "/placeholder.svg?height=400&width=800",
    readingTime: 8,
  },
  {
    id: "2",
    title: "IFTA Fuel Tax Permits: A Driver's Complete Guide",
    slug: "ifta-fuel-tax-permits-guide",
    excerpt:
      "Understanding IFTA requirements, quarterly reporting, and how to stay compliant with fuel tax regulations across multiple states.",
    content: `# IFTA Fuel Tax Permits: A Driver's Complete Guide

The International Fuel Tax Agreement (IFTA) simplifies fuel tax reporting for commercial vehicles operating in multiple jurisdictions. Here's everything you need to know.

## What is IFTA?

IFTA is an agreement between U.S. states and Canadian provinces that allows qualified motor vehicles to travel through member jurisdictions under a single fuel tax license.

## Who Needs IFTA?

You need IFTA registration if your vehicle:
- Has two axles and a gross vehicle weight over 26,000 pounds, OR
- Has three or more axles regardless of weight, AND
- Operates in more than one IFTA jurisdiction

## Registration Process

1. **Choose Base Jurisdiction**: Usually your home state
2. **Complete Application**: Form varies by state
3. **Pay Registration Fee**: Typically $10-25 annually
4. **Receive Credentials**: License and decals

## Record Keeping Requirements

Maintain detailed records of:
- Distance traveled in each jurisdiction
- Fuel purchased (receipts required)
- Vehicle information and routes

## Quarterly Reporting

File returns by the last day of the month following each quarter:
- Q1: April 30
- Q2: July 31  
- Q3: October 31
- Q4: January 31

## Penalties for Non-Compliance

- Late filing: $50 or 10% of tax due
- Failure to file: $100 minimum
- Operating without valid credentials: Significant fines

Stay compliant with professional IFTA management from OSOWpermits.`,
    author: "Sarah Davis",
    publishedAt: "2024-01-10T14:30:00Z",
    updatedAt: "2024-01-10T14:30:00Z",
    status: "published",
    category: "Permit Guides",
    tags: ["IFTA", "fuel tax", "compliance", "reporting"],
    coverImage: "/placeholder.svg?height=400&width=800",
    readingTime: 6,
  },
  {
    id: "3",
    title: "New DOT Regulations for 2024: What Drivers Need to Know",
    slug: "new-dot-regulations-2024",
    excerpt:
      "Stay updated on the latest DOT regulations affecting commercial drivers, including ELD requirements, hours of service changes, and safety protocols.",
    content: `# New DOT Regulations for 2024: What Drivers Need to Know

The Department of Transportation continues to update regulations to improve safety and efficiency. Here are the key changes for 2024.

## Electronic Logging Device (ELD) Updates

### Enhanced Data Requirements
- Real-time location tracking improvements
- Better integration with fleet management systems
- Stricter malfunction reporting protocols

### Compliance Deadlines
- All carriers must upgrade to certified ELD systems
- Grace period ends March 31, 2024
- Penalties increase for non-compliance

## Hours of Service Modifications

### Short-Haul Exception Changes
- Extended radius from 100 to 150 air miles
- 14-hour duty period limit maintained
- Return to work reporting location required

### Sleeper Berth Provisions
- Split sleeper berth time flexibility
- 7/3 and 8/2 hour splits allowed
- Improved rest period calculations

## Safety Protocol Updates

### Pre-Trip Inspection Requirements
- Enhanced brake system checks
- Mandatory tire pressure verification
- Updated cargo securement standards

### Drug and Alcohol Testing
- Expanded random testing requirements
- New substances added to screening panels
- Faster result reporting mandated

## Technology Integration

### Advanced Driver Assistance Systems (ADAS)
- Collision mitigation systems encouraged
- Lane departure warnings recommended
- Automatic emergency braking incentives

## Compliance Tips

1. **Stay Informed**: Subscribe to DOT updates
2. **Train Regularly**: Update driver training programs
3. **Document Everything**: Maintain detailed compliance records
4. **Use Technology**: Leverage compliance management tools

Need help navigating these new regulations? OSOWpermits provides compliance consulting and permit services to keep your operation running smoothly.`,
    author: "Robert Chen",
    publishedAt: "2024-01-05T09:15:00Z",
    updatedAt: "2024-01-05T09:15:00Z",
    status: "published",
    category: "Regulations",
    tags: ["DOT", "regulations", "compliance", "2024", "ELD"],
    coverImage: "/placeholder.svg?height=400&width=800",
    readingTime: 7,
  },
  {
    id: "4",
    title: "Winter Driving Safety: Essential Tips for Truck Drivers",
    slug: "winter-driving-safety-tips",
    excerpt:
      "Prepare for winter driving conditions with essential safety tips, equipment recommendations, and emergency procedures for professional truck drivers.",
    content: `# Winter Driving Safety: Essential Tips for Truck Drivers

Winter driving presents unique challenges for commercial truck drivers. Proper preparation and knowledge can prevent accidents and keep you safe on the road.

## Pre-Winter Vehicle Preparation

### Engine and Cooling System
- Check antifreeze levels and concentration
- Inspect belts and hoses for wear
- Test battery and charging system
- Verify heater and defroster operation

### Tires and Traction
- Install winter tires or chains as required
- Check tire pressure regularly (cold weather reduces pressure)
- Inspect tread depth - minimum 4/32" for steer tires
- Carry tire chains and practice installation

### Emergency Equipment
- Extra blankets and warm clothing
- Emergency food and water supplies
- Flashlight with extra batteries
- First aid kit and medications
- Cell phone charger and backup power

## Driving Techniques

### Speed and Following Distance
- Reduce speed by 25-50% in snow/ice conditions
- Increase following distance to 8-10 seconds
- Use gentle acceleration and braking
- Avoid sudden steering movements

### Braking and Traction
- Use engine braking when possible
- Apply brakes gently and progressively
- If equipped, use anti-lock braking properly
- Know how to recover from skids

## Route Planning

### Weather Monitoring
- Check weather forecasts along entire route
- Monitor road conditions and closures
- Have alternate routes planned
- Consider delaying travel in severe conditions

### Fuel and Rest Stops
- Keep fuel tanks at least half full
- Plan stops at truck-friendly locations
- Allow extra time for delays
- Know locations of emergency services

## Emergency Procedures

### If Stranded
1. Stay with your vehicle
2. Run engine periodically for heat
3. Keep exhaust pipe clear of snow
4. Use emergency supplies wisely
5. Signal for help safely

### Communication
- Notify dispatch of delays immediately
- Keep emergency contacts updated
- Monitor CB radio for road conditions
- Use GPS tracking for location updates

## State-Specific Requirements

Many states have specific winter driving requirements:
- **Colorado**: Traction law requirements
- **California**: Chain requirements on mountain passes
- **Wyoming**: Possible I-80 closures for light vehicles

Stay safe this winter with proper preparation and professional permit services from OSOWpermits.`,
    author: "Lisa Martinez",
    publishedAt: "2023-12-20T11:45:00Z",
    updatedAt: "2023-12-20T11:45:00Z",
    status: "published",
    category: "Tips & Tricks",
    tags: ["winter driving", "safety", "preparation", "emergency"],
    coverImage: "/placeholder.svg?height=400&width=800",
    readingTime: 9,
  },
  {
    id: "5",
    title: "Understanding Trip Permits: When and How to Apply",
    slug: "understanding-trip-permits",
    excerpt:
      "Learn about trip permits, including when they're required, application processes, and tips for efficient permit management across different states.",
    content: `# Understanding Trip Permits: When and How to Apply

Trip permits are temporary authorizations that allow commercial vehicles to operate in states where they're not registered. Here's your complete guide.

## When Trip Permits Are Required

### Interstate Operations
- Operating in states where vehicle isn't registered
- Temporary operations outside home state
- One-time deliveries or pickups
- Emergency situations requiring immediate travel

### Intrastate Operations
- Vehicles registered in other states
- Temporary local operations
- Special event transportation
- Construction or agricultural work

## Types of Trip Permits

### Single Trip Permits
- Valid for one specific journey
- Typically 72-hour duration
- Most common for occasional operations
- Cost-effective for infrequent travel

### Multi-Trip Permits
- Valid for multiple trips within timeframe
- Usually 30-day duration
- Better value for regular operations
- Simplified administration

## Application Requirements

### Vehicle Information
- VIN and registration details
- Gross vehicle weight
- Axle configuration
- Fuel type and capacity

### Route Details
- Origin and destination
- Planned travel dates
- Specific highways if required
- Mileage estimates

### Documentation
- Current registration certificate
- Proof of insurance
- Driver's license information
- Payment method

## State-Specific Considerations

### California
- Online application system
- Immediate electronic permits
- Weight-based fee structure
- Special requirements for certain routes

### Texas
- Self-service online portal
- Instant permit issuance
- Competitive pricing
- 24/7 availability

### New York
- Paper permits still required
- Business day processing
- Higher fees for overweight
- Strict route compliance

## Cost Management Tips

### Bulk Applications
- Apply for multiple permits together
- Take advantage of volume discounts
- Use permit services for efficiency
- Plan routes to minimize permits needed

### Timing Strategies
- Apply during business hours when possible
- Avoid rush periods and holidays
- Allow extra time for processing
- Keep backup permits for emergencies

## Common Mistakes to Avoid

1. **Incorrect Weight Declarations**: Always use actual weights
2. **Route Deviations**: Stick to approved routes exactly
3. **Expired Permits**: Check expiration dates regularly
4. **Missing Documentation**: Keep all permits accessible
5. **Late Applications**: Apply with sufficient lead time

## Digital vs. Paper Permits

### Digital Advantages
- Instant issuance
- No risk of loss or damage
- Easy storage and retrieval
- Environmental benefits

### Paper Requirements
- Some states still require physical permits
- Keep in weatherproof storage
- Make copies for backup
- Display as required by law

## Compliance Best Practices

### Record Keeping
- Maintain permit copies for audits
- Track expiration dates
- Document route compliance
- Store receipts and applications

### Driver Training
- Ensure drivers understand permit requirements
- Provide clear route instructions
- Establish communication protocols
- Review compliance regularly

Need help managing your trip permits efficiently? OSOWpermits offers comprehensive permit services with expert support across all 50 states.`,
    author: "David Wilson",
    publishedAt: "2023-12-15T16:20:00Z",
    updatedAt: "2023-12-15T16:20:00Z",
    status: "published",
    category: "Permit Guides",
    tags: ["trip permits", "interstate", "compliance", "applications"],
    coverImage: "/placeholder.svg?height=400&width=800",
    readingTime: 10,
  },
  {
    id: "6",
    title: "Draft: Upcoming Changes to Overweight Permit Regulations",
    slug: "upcoming-overweight-permit-changes",
    excerpt:
      "Preview of proposed changes to overweight permit regulations that may affect commercial trucking operations in 2024.",
    content: `# Upcoming Changes to Overweight Permit Regulations

This is a draft post about upcoming regulatory changes...`,
    author: "Mike Johnson",
    publishedAt: "2024-01-20T08:00:00Z",
    updatedAt: "2024-01-20T08:00:00Z",
    status: "draft",
    category: "Regulations",
    tags: ["overweight", "regulations", "2024", "changes"],
    readingTime: 5,
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

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  return mockPosts
    .filter(
      (post) =>
        post.id !== currentPost.id &&
        post.status === "published" &&
        (post.category === currentPost.category || post.tags.some((tag) => currentPost.tags.includes(tag))),
    )
    .slice(0, limit)
}
