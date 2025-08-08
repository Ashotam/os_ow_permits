import Link from "next/link"
import { Metadata } from "next"
import {
  Truck,
  Ruler,
  Scale,
  Map,
  Shield,
  FileText,
  Clock,
  Phone,
  TrafficCone,
  Waypoints,
  Landmark,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Superload Permits | OSOW Permits",
  description:
    "Expert handling of Superload permits across states: route surveys, escorts, bridge analysis, utility coordination, and agency approvals.",
  openGraph: {
    title: "Superload Permits | OSOW Permits",
    description:
      "We plan and execute complex Superload moves: routing, escorts, engineering, utilities, and permits across multiple jurisdictions.",
    type: "website",
    url: "https://your-domain.com/permit-types/superload",
  },
}

export default function SuperloadPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Superload Permits
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Moving something massive? We handle the permits, routing, engineering, escorts, and agency coordination
              required for Superloads—so you stay compliant and on schedule.
            </p>
          </div>
        </div>
      </section>

      {/* What is a Superload */}
      <section className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Truck className="h-6 w-6 mr-2 text-red-600" />
                What’s a Superload?
              </h2>
              <p className="mt-3 text-gray-700">
                A Superload exceeds even standard Oversize/Overweight (OS/OW) permit limits. Thresholds vary by state,
                but typically push well beyond conventional dimensions or weight and require advanced planning and
                multi-agency coordination.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border p-4">
                  <div className="flex items-center text-gray-900 font-semibold">
                    <Ruler className="h-5 w-5 mr-2 text-orange-600" /> Common Dimensions
                  </div>
                  <ul className="mt-3 text-gray-700 space-y-1">
                    <li>Width: Often over <strong>16 ft</strong></li>
                    <li>Height: Often over <strong>16–17 ft</strong></li>
                    <li>Length: Often over <strong>125–150 ft</strong></li>
                  </ul>
                </div>

                <div className="rounded-xl border p-4">
                  <div className="flex items-center text-gray-900 font-semibold">
                    <Scale className="h-5 w-5 mr-2 text-orange-600" /> Common Weight
                  </div>
                  <ul className="mt-3 text-gray-700 space-y-1">
                    <li>Gross weight frequently over <strong>200,000 lb</strong></li>
                    <li>Per-axle & bridge formula checks apply</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-red-600" />
                Why Superloads Are More Complex
              </h2>
              <div className="mt-3 grid gap-3">
                {[
                  { icon: <Waypoints className="h-5 w-5 text-orange-600" />, text: "Route surveys & traffic control plans (TCPs)" },
                  { icon: <TrafficCone className="h-5 w-5 text-orange-600" />, text: "Pilot or police escorts" },
                  { icon: <Landmark className="h-5 w-5 text-orange-600" />, text: "Bridge engineering or structural analysis" },
                  { icon: <Zap className="h-5 w-5 text-orange-600" />, text: "Utility coordination for lines/signals" },
                  { icon: <Clock className="h-5 w-5 text-orange-600" />, text: "Time-of-day restrictions (curfews, weekend limits)" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 rounded-xl border p-4 bg-white">
                    {item.icon}
                    <span className="text-gray-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="border-b bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <Map className="h-6 w-6 mr-2 text-red-600" />
            How We Help
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {[
              "Plan and survey routes",
              "Coordinate escort vehicles",
              "Manage engineering & bridge analysis",
              "Liaise with state agencies",
              "Coordinate with utility companies",
              "Organize law enforcement clearances",
            ].map((item) => (
              <div key={item} className="rounded-xl border bg-white p-4">
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnaround & Cost */}
      <section className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Clock className="h-6 w-6 mr-2 text-red-600" />
                Superload Turnaround & Cost
              </h2>
              <ul className="mt-3 text-gray-700 space-y-2">
                <li>
                  <strong>Timeframe:</strong> typically <strong>2–6 weeks</strong>, depending on states and complexity
                </li>
                <li>
                  <strong>Fees:</strong> vary widely by state, route, and required services (escorts, engineering, utilities).{" "}
                  <Link href="/request-a-quote" className="text-red-600 underline">Request a quote</Link>.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-red-600" />
                What You’ll Need to Provide
              </h2>
              <ul className="mt-3 text-gray-700 space-y-2 list-disc pl-5">
                <li>Vehicle details (registration, plate, axle spacings & weights)</li>
                <li>Load dimensions (H × W × L) & gross weight</li>
                <li>Origin, destination, and desired dates</li>
                <li>Any known constraints or site requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="border-b bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-2xl font-bold text-gray-900">Summary Table</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Permit Type</th>
                  <th className="px-4 py-3 font-semibold">Dimensions / Weight</th>
                  <th className="px-4 py-3 font-semibold">Time to Issue</th>
                  <th className="px-4 py-3 font-semibold">Key Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">Oversize/Overweight</td>
                  <td className="px-4 py-3">Over 8’6” wide, 13’6” high, 80,000 lb+ (varies by state)</td>
                  <td className="px-4 py-3">1–5 business days</td>
                  <td className="px-4 py-3">Vehicle/load data, basic routing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Superload</td>
                  <td className="px-4 py-3">Often 16 ft+ wide, 125–150 ft long, 200,000 lb+ (state dependent)</td>
                  <td className="px-4 py-3">2–6 weeks</td>
                  <td className="px-4 py-3">Route survey, escorts, bridge clearance, TCPs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="rounded-2xl border bg-white p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900">✅ Get Started Today</h2>
            <p className="mt-2 text-gray-700">
              Let us help you move your load safely and legally—end to end.
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

      {/* Structured data for SEO */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Superload Permits",
            provider: { "@type": "Organization", name: "OSOW Permits" },
            areaServed: "US",
            url: "https://your-domain.com/permit-types/superload",
            description:
              "Full-service Superload permitting: routing, escorts, bridge/engineering reviews, utility coordination, and agency approvals.",
            serviceType: "Transportation permit service",
            telephone: "+18184756020",
            sameAs: [
              "tel:+18184756020",
              "mailto:Contact@OSOWpermits.com",
            ],
          }),
        }}
      />
    </main>
  )
}
