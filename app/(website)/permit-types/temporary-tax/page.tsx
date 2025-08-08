import Link from "next/link"
import {
Phone
} from "lucide-react"
export default function OtherPermitsPage() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
          📋 Other Trucking-Related Permits
        </h1>
        
        {/* Intro */}
        <p className="text-lg text-gray-700 mb-8">
          In addition to oversize, trip, and fuel permits, some states require special permits unique to 
          their regulations and tax systems. We provide temporary versions of these permits to keep your 
          operations moving without interruption.
        </p>

        {/* Permit Type Sections */}
        <div className="space-y-10">
          {/* Kentucky KYU */}
          <div>
            <h2 className="text-2xl font-semibold text-red-600 mb-3">
              🔹 Kentucky KYU Number (Temporary)
            </h2>
            <p className="text-gray-700">
              A state-specific tax registration number required for commercial vehicles operating in Kentucky. 
              We provide temporary KYU permits to cover short-term operations and interstate travel.
            </p>
          </div>

          {/* NY HUT */}
          <div>
            <h2 className="text-2xl font-semibold text-red-600 mb-3">
              🔹 New York HUT Permit (Temporary)
            </h2>
            <p className="text-gray-700">
              The Highway Use Tax (HUT) permit is mandatory for carriers in New York. We offer temporary HUT 
              permits for commercial vehicles needing short-term authorization to travel through the state.
            </p>
          </div>

          {/* Oregon */}
          <div>
            <h2 className="text-2xl font-semibold text-red-600 mb-3">
              🔹 Oregon Weight-Mile Tax Permit (Temporary)
            </h2>
            <p className="text-gray-700">
              Oregon charges commercial vehicles based on weight and miles traveled. Our service includes 
              temporary Weight-Mile Tax permits so you can operate legally without long-term registration.
            </p>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-md">
          <h3 className="font-bold text-lg mb-2">❓ Need a Different Temporary Permit?</h3>
          <p className="text-gray-700">
            If you require a temporary permit not listed here, contact us! We work directly with state 
            Departments of Transportation and regulatory agencies to quickly secure the right permits 
            for your unique needs.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-4">⚠️ Why Choose Us for Temporary Permits?</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Fast, reliable temporary permits</li>
            <li>Full compliance with state and federal rules</li>
            <li>Minimized downtime and fines</li>
            <li>We handle all the paperwork for you</li>
          </ul>
        </div>

        {/* Contact CTA */}
         <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/request-a-quote"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-white
                         bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+18184756020"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-red-600
                         ring-1 ring-red-200 hover:bg-red-50"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call +1 (818) 475-6020
            </a>
          </div>

      </div>
    </section>
  )
}
