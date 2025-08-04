import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-red-100 text-red-700 mb-4">
              Legal Information
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-lg text-gray-600">Effective Date: July 26, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <p className="text-gray-700 leading-relaxed">
                This Cookie Policy explains what cookies are, how Go Go America LLC ("we," "us," or "our") uses cookies,
                and your choices regarding cookies.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What are Cookies?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Cookies are small pieces of data stored on your device (computer or mobile device) when you visit a
                  website. They are widely used to make websites work, or work more efficiently, as well as to provide
                  reporting information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">We use cookies to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Ensure our services function correctly.</li>
                  <li>Understand how you use our services to improve your experience.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies Used</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies are strictly necessary for the operation of our services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies:</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These cookies help us understand how visitors interact with our services by collecting and
                      reporting information anonymously.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Your Choices Regarding Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse all
                  cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not
                  be able to use some portions of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Changes to this Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Cookie Policy from time to time. We will notify you of any changes by posting the
                  new Cookie Policy on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Cookie Policy, please contact us at{" "}
                  <a href="mailto:info@osowpermits.com" className="text-red-600 hover:text-red-700">
                    info@osowpermits.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
