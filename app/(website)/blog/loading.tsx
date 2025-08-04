import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingBlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Skeleton className="h-6 w-48 mx-auto mb-4" />
          <Skeleton className="h-10 w-96 mx-auto mb-2" />
          <Skeleton className="h-6 w-64 mx-auto" />
        </div>

        {/* Featured Post Skeleton */}
        <div className="mb-12">
          <Skeleton className="h-80 w-full rounded-xl mb-4" />
          <Skeleton className="h-6 w-64 mb-2" />
          <Skeleton className="h-6 w-full mb-2" />
        </div>

        {/* Latest Articles Skeletons */}
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="border-0 shadow-lg p-4 bg-white rounded-lg">
              <Skeleton className="h-48 w-full rounded-lg mb-4" />
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
