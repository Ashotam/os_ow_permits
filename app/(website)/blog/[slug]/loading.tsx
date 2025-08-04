export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <div className="animate-spin h-10 w-10 rounded-full border-t-2 border-b-2 border-red-600 mx-auto" />
        <p className="text-gray-600 text-sm">Loading post...</p>
      </div>
    </div>
  )
}