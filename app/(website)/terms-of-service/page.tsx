import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, Phone, Mail, MapPin, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TermsOfServicePage() {
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
    </div>
  )
}
