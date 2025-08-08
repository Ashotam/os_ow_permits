import Link from "next/link"
import { Metadata } from "next"
import {
  CalendarCheck,
  Truck,
  Map,
  Landmark,
  FileText,
  Shield,
  Phone,
  ClipboardList,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Annual Permit Services | OSOW Permits",
  description:
    "Keep your fleet compliant year-round. We secure annual oversize/overweight, divisible load, and route-specific permits across the U.S.",
  openGraph: {
    title: "Annual Permit Services | OSOW Permits",
    description:
      "Hassle-free annual permits for carriers and operators. Fast processing, expert guidance, and compliance across states.",
    type: "website",
    url: "https://your-domain.com/permit-types/annual",
  },
}

export default function AnnualPermitsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Annual Permit Services
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Keep your trucks moving year-round with our hassle-free annual permit solutions. We handle the paperwork,
              renewals, and compliance—so your fleet stays on the road without interruptions.
            </p>
          </div>
        </div>
      </section>

      {/* What is an Annual Permit */}
      <section className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <CalendarCheck className="h-6 w-6 mr-2 text-red-600" />
                What is an Annual Permit?
              </h2>
              <p className="mt-3 text-gray-700">
                An Annual Permit authorizes commercial vehicles to operate for a full year under specific conditions set
                by the issuing state or authority. Compared to single-trip permits, annual permits reduce paperwork and
                cut down on frequent renewals.
              </p>

              <div className="mt-6 rounded-xl border p-4 bg-white">
                <div className="flex items-center text-gray-900 font-semibold">
                  <Truck className="h-5 w-5 mr-2 text-orange-600" />
                  Typically Covers
                </div>
                <ul className="mt-3 text-gray-700 space-y-2 list-disc pl-5">
                  <li>Oversize/Overweight movements</li>
                  <li>Repetitive travel between defined points</li>
                  <li>Specific routes or cargo types</li>
                  <li>Special vehicle configurations</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-red-600" />
                Why Choose Annual?
              </h2>
              <ul className="mt-3 text-gray-700 space-y-2 list-disc pl-5">
                <li>Minimize downtime with fewer renewals</li>
                <li>Predictable authority for recurring moves</li>
                <li>Reduce risk of violations and delays</li>
                <li>Streamlined compliance for fleets</li>
              </ul>
              <div className="mt-6 rounded-xl border p-4">
                <div className="flex items-center text-gray-900 font-semibold">
                  <FileText className="h-5 w-5 mr-2 text-orange-600" />
                  We Handle It End-to-End
                </div>
                <p className="mt-3 text-gray-700">
                  Application prep, filings, status tracking, and coordination with state agencies—done for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Permits We Handle */}
      <section className="border-b bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <ClipboardList className="h-6 w-6 mr-2 text-red-600" />
            Annual Permits We Handle
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {[
              "Oversize/Overweight Annual Permits",
              "Trip & Fuel Tax (where annual options exist)",
              "Divisible Load Permits",
              "Special Vehicle Configuration Permits",
              "Route-Specific Annual Travel Permits",
              "State-specific or custom permits",
            ].map((label) => (
              <div key={label} className="rounded-xl border bg-white p-4">
                <span className="text-gray-800">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* States We Serve */}
      <section className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Landmark className="h-6 w-6 mr-2 text-red-600" />
            States We Serve
          </h2>
          <p className="mt-3 text-gray-700">
            We work with DOTs and regulatory agencies across all 48 contiguous states to secure the permits your fleet
            needs. Common states with annual options include:
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-gray-800">
            {["California", "Texas", "Florida", "Illinois", "New York", "Pennsylvania"].map((s) => (
              <div key={s} className="rounded-lg border px-3 py-2 bg-white">{s}</div>
            ))}
          </div>
          <p className="mt-3 text-gray-600">
            Don’t see your state listed? We’ll confirm availability and requirements for your routes.
          </p>
        </div>
      </section>

      {/* Required Information */}
      <section className="border-b bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <FileText className="h-6 w-6 mr-2 text-red-600" />
            Required Information
          </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <ul className="text-gray-700 space-y-2 list-disc pl-5">
            <li>Vehicle details (VIN, plate number, axle configuration)</li>
            <li>Load description (if oversize/overweight)</li>
            <li>Operating zones or route details</li>
          </ul>
          <ul className="text-gray-700 space-y-2 list-disc pl-5">
            <li>Proof of insurance</li>
            <li>USDOT and/or MC number (if applicable)</li>
            <li>Fleet count (if requesting for multiple vehicles)</li>
          </ul>
        </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-2xl border bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900">📝 Get Your Annual Permit Today</h2>
            <p className="mt-2 text-gray-700">
              Avoid last-minute permit runs and keep your trucks rolling all year long. Our specialists will secure the
              right permits quickly and correctly.
            </p>
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
            name: "Annual Permit Services",
            provider: { "@type": "Organization", name: "OSOW Permits" },
            areaServed: "US",
            url: "https://your-domain.com/permit-types/annual",
            description:
              "Annual oversize/overweight, divisible load, and route-specific permits. We manage filings, renewals, and compliance across states.",
            serviceType: "Transportation permit service",
            telephone: "+18184756020",
          }),
        }}
      />
    </main>
  )
}
