import Link from "next/link"
import { Metadata } from "next"
import {
  Truck,
  FileText,
  Map,
  Clock,
  Phone,
  Shield,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Trip Permits (Temporary Trip Permits) | OSOW Permits",
  description:
    "Temporary Trip Permits for interstate travel without IRP. Fast processing, multi-state coverage, and compliant documentation.",
  openGraph: {
    title: "Trip Permits (Temporary Trip Permits) | OSOW Permits",
    description:
      "Traveling interstate without IRP? Get a temporary Trip Permit fast. We handle filings, multi-state routes, and electronic delivery.",
    type: "website",
    url: "https://your-domain.com/permit-types/trip",
  },
}

export default function TripPermitsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Trip Permits
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Traveling interstate without IRP credentials? A Trip Permit lets
              your vehicle legally cross state or provincial lines for short-term
              or one-time trips.
            </p>
          </div>
        </div>
      </section>

      {/* What it covers */}
      <section className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Truck className="h-6 w-6 mr-2 text-red-600" />
                Trip Permits (Temporary Trip Permits)
              </h2>
              <p className="mt-3 text-gray-700">
                A Trip Permit serves as temporary registration for vehicles not
                enrolled in the International Registration Plan (IRP). It’s ideal
                for one-time trips, leased vehicles, or temporary operations.
              </p>

              <div className="mt-6 rounded-xl border p-4 bg-white">
                <div className="flex items-center text-gray-900 font-semibold">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-orange-600" />
                  When You Need It
                </div>
                <ul className="mt-3 text-gray-700 space-y-2 list-disc pl-5">
                  <li>Your vehicle is not registered under IRP</li>
                  <li>One-time or short-term interstate trip</li>
                  <li>Usually operate in your home state but need to cross the border</li>
                  <li>Waiting on IRP processing and must move now</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-red-600" />
                Validity & Regulations
              </h2>
              <ul className="mt-3 text-gray-700 space-y-2">
                <li>Issued per state or province</li>
                <li>Typically valid for <strong>72–120 hours</strong> (3–5 days)</li>
                <li>Some states limit usage per vehicle per year</li>
                <li>Legally required when traveling interstate without an active IRP account</li>
              </ul>

              <div className="mt-6 rounded-xl border p-4">
                <div className="flex items-center text-gray-900 font-semibold">
                  <Shield className="h-5 w-5 mr-2 text-orange-600" />
                  Why It’s Important
                </div>
                <ul className="mt-3 text-gray-700 space-y-2 list-disc pl-5">
                  <li>Avoid costly fines and potential impoundment</li>
                  <li>Prevent delays at weigh stations and checkpoints</li>
                  <li>Stay compliant while you operate across state lines</li>
                </ul>
              </div>
            </div>
          </div>
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
              "Determine where permits are required",
              "File all state paperwork",
              "Deliver documents electronically",
              "Combine with fuel permits if needed",
              "Most permits issued same day",
              "Support for multi-state routes",
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
                What You’ll Need
              </h2>
              <ul className="mt-3 text-gray-700 space-y-2 list-disc pl-5">
                <li>Vehicle details (VIN, license plate, weight)</li>
                <li>Carrier name and DOT/MC number</li>
                <li>Travel origin & destination</li>
                <li>Dates of travel</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Clock className="h-6 w-6 mr-2 text-red-600" />
                Turnaround & Quote
              </h2>
              <ul className="mt-3 text-gray-700 space-y-2">
                <li>
                  <strong>Validity:</strong> typically <strong>72–120 hours</strong> per state
                </li>
                <li>
                  <strong>Processing Time:</strong> same day in most states
                </li>
                <li>
                  <strong>Cost:</strong> <em>Request a quote from OSOWPermits.</em>
                </li>
              </ul>
              <p className="mt-3 text-gray-600">
                Multi-state routes may require multiple permits.
              </p>
            </div>
          </div>

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


      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Trip Permits",
            provider: { "@type": "Organization", name: "OSOW Permits" },
            areaServed: "US",
            url: "https://your-domain.com/permit-types/trip",
            description:
              "Temporary Trip Permits for interstate travel without IRP. We file paperwork, deliver documents electronically, and support multi-state routes.",
            serviceType: "Transportation permit service",
            telephone: "+18184756020",
          }),
        }}
      />
    </main>
  )
}
