import Link from "next/link"
import { Metadata } from "next"
import { Truck, Ruler, Scale, Map, Shield, FileText, Clock, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Oversize, Overweight | OSOW Permits",
  description:
    "Get legal and fast Oversize, Overweight & Superload permits. Route planning, DOT filings, escort guidance, and same-day turnaround in many cases.",
  openGraph: {
    title: "Oversize, Overweight & Superload Permits | OSOW Permits",
    description:
      "We handle OS/OW & Superload permits end-to-end: load evaluation, route planning, filings, and support—fast and compliant.",
    type: "website",
    url: "https://your-domain.com/permit-types/oversize-overweight",
  },
}

export default function OversizeOverweightPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Oversize  & Overweight Permits
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Need to haul a load that’s larger or heavier than usual? We make it easy to get the permits you need to
              stay legal and avoid costly delays.
            </p>
          </div>
        </div>
      </section>

      {/* What are OS/OW + Superload */}
      <section className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Truck className="h-6 w-6 mr-2 text-red-600" />
                What Are Oversize & Overweight Permits?
              </h2>
              <p className="mt-3 text-gray-700">
                Oversize/Overweight (OS/OW) permits are required when your vehicle or load exceeds legal limits for
                height, width, length, or weight. These permits are issued by state transportation authorities and
                specify approved routes, timing, and safety requirements. Superload permits apply to exceptionally
                large/heavy loads that exceed standard OS/OW thresholds and often require additional engineering
                reviews, escorts, or police.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border p-4">
                  <div className="flex items-center text-gray-900 font-semibold">
                    <Ruler className="h-5 w-5 mr-2 text-orange-600" /> When You Need It
                  </div>
                  <ul className="mt-3 text-gray-700 space-y-1">
                    <li>Width: Over <strong>8’6”</strong></li>
                    <li>Height: Over <strong>13’6”</strong></li>
                    <li>Length: Over <strong>65’</strong> (single) / <strong>75’</strong> (combination)</li>
                    <li>Weight: Over <strong>80,000 lbs gross</strong> or per-axle limits</li>
                    <li>Superload: Beyond typical OS/OW limits (varies by state)</li>
                  </ul>
                </div>

                <div className="rounded-xl border p-4">
                  <div className="flex items-center text-gray-900 font-semibold">
                    <Scale className="h-5 w-5 mr-2 text-orange-600" /> Regulations
                  </div>
                  <ul className="mt-3 text-gray-700 space-y-1">
                    <li>Issued per state with route restrictions and travel hour limits</li>
                    <li>Escort/pilot cars may be required</li>
                    <li>Comply with federal & DOT bridge formulas</li>
                    <li>Superload may need route surveys or engineering sign-off</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-red-600" />
                Who Needs One?
              </h2>
              <ul className="mt-3 text-gray-700 space-y-2 list-disc pl-5">
                <li>Construction or mining equipment</li>
                <li>Agricultural machinery</li>
                <li>Modular homes or mobile offices</li>
                <li>Utility structures (tanks, turbines, etc.)</li>
                <li>Industrial materials (steel beams, concrete barriers, girders)</li>
              </ul>

              <div className="mt-6 rounded-xl border p-4">
                <div className="flex items-center text-gray-900 font-semibold">
                  <Shield className="h-5 w-5 mr-2 text-orange-600" /> Why Permits Matter
                </div>
                <p className="mt-3 text-gray-700">
                  Without proper permits, you risk fines, impoundment, or being denied entry at state lines. Oversize
                  and superload movements can damage infrastructure and create safety hazards. Permits protect the
                  public and roads while ensuring your transport remains compliant.
                </p>
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
              "Evaluate your load & determine permit type",
              "Plan safe, legal routes across one or multiple states",
              "File all required documentation with DOTs",
              "Fast turnaround — same-day in many cases",
              "Escort, curfew, and travel-hour guidance",
              "Ongoing support & tracking updates",
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
                <li>Vehicle info (registration, plate, axle spacings & weights)</li>
                <li>Load dimensions (height, width, length, gross weight)</li>
                <li>Origin & destination</li>
                <li>Travel dates and preferred schedule</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Clock className="h-6 w-6 mr-2 text-red-600" />
                Turnaround Time & Pricing
              </h2>
              <ul className="mt-3 text-gray-700 space-y-2">
                <li>
                  <strong>Single-Trip Permits:</strong> typically 1–5 business days (state dependent)
                </li>
                <li>
                  <strong>Annual/Blanket Permits:</strong> typically 7–15 business days
                </li>
                <li>
                  <strong>Superload:</strong> additional time for reviews, surveys, or escorts
                </li>
                <li>
                  <strong>Cost:</strong> varies by state and load —{" "}
                  <Link href="/request-a-quote" className="text-red-600 underline">
                    request a free quote
                  </Link>
                  .
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/request-a-quote"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold text-white
                         bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
            >
              Get a Free Quote
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

      {/* FAQ (optional quick wins) */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900">Common Questions</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border p-4">
              <p className="font-semibold text-gray-900">Do I need escorts?</p>
              <p className="mt-1 text-gray-700">
                Depends on width/length and the state. We’ll let you know when pilot cars or police escorts are required.
              </p>
            </div>
            <div className="rounded-xl border p-4">
              <p className="font-semibold text-gray-900">Can I travel at night or on weekends?</p>
              <p className="mt-1 text-gray-700">
                Many states restrict OS/OW and superload travel during peak hours or at night. We’ll plan compliant timing.
              </p>
            </div>
            <div className="rounded-xl border p-4">
              <p className="font-semibold text-gray-900">Can you handle multi-state trips?</p>
              <p className="mt-1 text-gray-700">
                Yes—route planning and filings across multiple states is our bread and butter.
              </p>
            </div>
            <div className="rounded-xl border p-4">
              <p className="font-semibold text-gray-900">How fast can I get my permit?</p>
              <p className="mt-1 text-gray-700">
                Same-day is possible in many cases; timelines vary by state workload and load size.
              </p>
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
            name: "Oversize, Overweight & Superload Permits",
            provider: { "@type": "Organization", name: "OSOW Permits" },
            areaServed: "US",
            url: "https://your-domain.com/permit-types/oversize-overweight",
            description:
              "Permit processing for oversize, overweight, and superload moves, including routing, filings, and compliance support.",
            serviceType: "Transportation permit service",
            telephone: "+18184756020",
          }),
        }}
      />
    </main>
  )
}
