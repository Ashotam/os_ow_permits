import Link from "next/link"
import { Metadata } from "next"
import {
  Fuel as FuelIcon,
  Map,
  FileText,
  Clock,
  Phone,
  Shield,
  CheckCircle2,
  Globe2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Fuel Permits (IFTA & Temporary Fuel Permits) | OSOW Permits",
  description:
    "IFTA and temporary fuel permits for interstate carriers. We handle licenses, quarterly filings, and same-day temporary permits where available.",
  openGraph: {
    title: "Fuel Permits (IFTA & Temporary Fuel Permits) | OSOW Permits",
    description:
      "Crossing state lines? Stay compliant with IFTA or temporary fuel permits. We manage licensing, filings, and permits in all U.S. states and Canadian provinces.",
    type: "website",
    url: "https://your-domain.com/permit-types/fuel",
  },
}

export default function FuelPermitsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Fuel Permits (IFTA & Temporary Fuel Permits)
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Crossing state lines with a commercial vehicle? Fuel permits keep you compliant with fuel tax laws when operating in multiple jurisdictions.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
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
        </div>
      </section>

      {/* What it covers */}
      <section className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <FuelIcon className="h-6 w-6 mr-2 text-red-600" />
                What It Covers
              </h2>
              <p className="mt-3 text-gray-700">
                Fuel permits are required for carriers operating across multiple states or provinces. These permits track fuel usage and taxes based on where you travel—not just where you fuel up.
              </p>
              <ul className="mt-4 text-gray-700 space-y-2 list-disc pl-5">
                <li><strong>IFTA Permit (International Fuel Tax Agreement)</strong></li>
                <li><strong>Temporary Fuel Permit</strong> (for non-IFTA carriers or one-time trips)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <CheckCircle2 className="h-6 w-6 mr-2 text-red-600" />
                When You Need It
              </h2>
              <ul className="mt-3 text-gray-700 space-y-2 list-disc pl-5">
                <li>Commercial vehicle with GVW over <strong>26,000 lbs</strong> or <strong>3+ axles</strong></li>
                <li>Travel through two or more IFTA member jurisdictions</li>
                <li>No IFTA license and operating out of state (need a temporary fuel permit)</li>
                <li>Waiting for IFTA credentials and need to move now</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Permit types & regulations */}
      <section className="border-b bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border bg-white p-5">
              <div className="flex items-center text-gray-900 font-semibold">
                <Globe2 className="h-5 w-5 mr-2 text-orange-600" />
                IFTA Permit (International Fuel Tax Agreement)
              </div>
              <ul className="mt-3 text-gray-700 space-y-2 list-disc pl-5">
                <li>Covers 48 U.S. states and 10 Canadian provinces</li>
                <li>Single <strong>quarterly</strong> fuel tax return filed through your base jurisdiction</li>
                <li>Tracks mileage and fuel purchases by jurisdiction</li>
                <li>Eliminates separate fuel tax filings in each state</li>
              </ul>
            </div>

            <div className="rounded-xl border bg-white p-5">
              <div className="flex items-center text-gray-900 font-semibold">
                <FileText className="h-5 w-5 mr-2 text-orange-600" />
                Temporary Fuel Permit
              </div>
              <ul className="mt-3 text-gray-700 space-y-2 list-disc pl-5">
                <li>Allows out-of-state travel without an IFTA license</li>
                <li>Issued by state; typically valid for <strong>3–20 days</strong></li>
                <li>Ideal for new carriers, leased vehicles, or one-time hauls</li>
                <li>Some states offer combined <em>trip + fuel</em> permits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Shield className="h-6 w-6 mr-2 text-red-600" />
            Why It Matters
          </h2>
          <ul className="mt-3 text-gray-700 space-y-2 list-disc pl-5">
            <li>Avoid fines and penalties</li>
            <li>Prevent impoundments and delays at weigh stations or borders</li>
            <li>Protect your operating credentials from suspension</li>
          </ul>
        </div>
      </section>

      {/* What we do */}
      <section className="border-b bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Map className="h-6 w-6 mr-2 text-red-600" />
            What We Do for You
          </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {[
            "Obtain your IFTA license",
            "File quarterly IFTA reports",
            "Order temporary fuel permits in any state/province",
            "Ensure coverage for each leg of your route",
            "Combine with trip permits when needed",
            "Same-day temporary permits in many states",
          ].map((item) => (
            <div key={item} className="rounded-xl border bg-white p-4">
              <span className="text-gray-800">{item}</span>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Requirements & Turnaround */}
      <section className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-red-600" />
                What You’ll Need to Provide
              </h2>
              <ul className="mt-3 text-gray-700 space-y-2 list-disc pl-5">
                <li>Vehicle info (VIN, plate, fuel type, weight)</li>
                <li>Carrier details (DOT or MC number)</li>
                <li>Jurisdictions you plan to travel through</li>
                <li>Travel dates</li>
                <li>Fuel purchase records (for IFTA filings)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Clock className="h-6 w-6 mr-2 text-red-600" />
                Turnaround & Quote
              </h2>
              <ul className="mt-3 text-gray-700 space-y-2">
                <li><strong>IFTA License:</strong> annual credential; initial issuance typically 1–2 weeks</li>
                <li><strong>Temporary Fuel Permit:</strong> typically valid 3–20 days; often same-day issuance</li>
                <li><strong>Cost:</strong> <em>Request a quote from OSOWPermits.</em></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Fuel Permits (IFTA & Temporary Fuel Permits)",
            provider: { "@type": "Organization", name: "OSOW Permits" },
            areaServed: "US & Canada",
            url: "https://your-domain.com/permit-types/fuel",
            description:
              "IFTA licensing, quarterly filings, and temporary fuel permits for cross-border carriers. Same-day temporary permits in many states.",
            serviceType: "Transportation permit service",
            telephone: "+18184756020",
          }),
        }}
      />
    </main>
  )
}
