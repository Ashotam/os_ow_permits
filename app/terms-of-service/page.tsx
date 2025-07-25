import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, Phone, Mail, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TermsOfServicePage() {
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
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
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
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600">Effective Date: July 26, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Please read these Terms of Service ("Terms") carefully before using the services operated by Go Go
                America LLC ("us," "we," or "our").
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using our services, you agree to be bound by these Terms. If you disagree with any
                  part of the Terms, then you may not access the services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to use our services only for lawful purposes and in accordance with these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content, trademarks, and data on our services, including but not limited to text, graphics, logos,
                  and images, are the property of Go Go America LLC or its content suppliers and are protected by
                  intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclaimer of Warranties</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are provided on an "as is" and "as available" basis, without any warranties of any kind,
                  either express or implied.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Go Go America LLC, nor its directors, employees, partners, agents, suppliers, or
                  affiliates, be liable for any indirect, incidental, special, consequential or punitive damages,
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                  resulting from (i) your access to or use of or inability to access or use the services; (ii) any
                  conduct or content of any third party on the services; (iii) any content obtained from the services;
                  and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on
                  warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been
                  informed of the possibility of such damage, and even if a remedy set forth herein is found to have
                  failed of its essential purpose.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of [Your State/Country],
                  without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will
                  provide notice of any changes by posting the new Terms on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms, please contact us at{" "}
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
