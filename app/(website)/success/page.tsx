"use client"

import { useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { CheckCircle, ArrowLeft, Phone } from "lucide-react"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const name = searchParams.get("name") || ""

  // If no name is provided, redirect to home page after a short delay
  useEffect(() => {
    if (!name) {
      const timeout = setTimeout(() => {
        router.push("/")
      }, 5000)

      return () => clearTimeout(timeout)
    }
  }, [name, router])

  return (
   
      <main className="flex-1">
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container">
            <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>

              <h1 className="text-3xl font-bold mb-4">{name ? `Thank You, ${name}!` : "Thank You!"}</h1>

              <p className="text-lg mb-6">
                Your quote request has been successfully submitted. Our team will review your information and get back
                to you shortly.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-8">
                <h2 className="font-semibold text-blue-800 mb-2">What happens next?</h2>
                <ol className="text-left text-blue-700 space-y-2 pl-5 list-decimal">
                  <li>Our permit specialists will review your request</li>
                  <li>We'll prepare a detailed quote for your specific needs</li>
                  <li>You'll receive a response within the next hour</li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call Us
                </Link>
              </div>
               <a
                        href="tel:+1 (818) 475-6020"
                        className="text-lg font-bold">
                         +1 (818) 475-6020
                      </a>
            </div>
          </div>
        </section>
      </main>
      
  )
}
