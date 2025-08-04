import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Users, Globe, Menu, Truck, FileText, Phone, Mail, MapPin, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
   
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-200">
                  🚛 Fast & Reliable Permit Service
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Get Your Trip
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    Permits Fast
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional permit services for truck drivers and fleet operators. Get oversize, overweight, and trip
                  permits processed quickly with expert support every step of the way.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                 <a href="tel:+18184756020">
                  <Button
                   size="lg"
                   className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                  >
                    Call Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                 </a>

                <Link href="/request-a-quote">
                  <Button size="lg" variant="outline">
                    Request a Quote
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>All 50 States</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Same Day Service</span>
                </div>
              </div>
            </div>

            <div className="relative justify-self-center"  >
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 rounded-3xl blur-3xl opacity-20"></div>
             <Image
               src="placeholder.svg"
               alt="Truck Driver with Permits"
               width={600}
               height={500}
               priority 
               quality={75}
               className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              Our Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Complete Permit Solutions for Truckers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From single trip permits to annual registrations, we handle all your trucking permit needs with speed and
              accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Oversize/Overweight Permits</CardTitle>
                <CardDescription>
                  Get permits for loads exceeding standard dimensions and weight limits across all states
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Trip Permits</CardTitle>
                <CardDescription>
                  Single and multi-trip permits for interstate and intrastate commercial vehicle operations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Fuel Permits (IFTA, IRP, etc.)</CardTitle>
                <CardDescription>
                  International Fuel Tax Agreement and International Registration Plan permits for multi-state
                  operations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Temporary Tax Permits</CardTitle>
                <CardDescription>
                  Short-term tax permits for temporary operations and special circumstances across jurisdictions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Multi-State Coverage</CardTitle>
                <CardDescription>
                  Comprehensive permit services across all 50 states with local expertise
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Fleet Management</CardTitle>
                <CardDescription>
                  Dedicated account management for trucking companies and fleet operators
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="permits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-red-100 text-red-700">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Trusted by thousands of drivers nationwide
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over a decade of experience in the trucking industry, we understand the challenges drivers face on
                the road. Our permit specialists work around the clock to ensure your permits are processed accurately
                and delivered on time.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Licensed permit agents in all states</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Average processing time under 2 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">24/7 customer support hotline</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Money-back guarantee on service</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg"
                alt="Professional Truck Driver"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              Driver Reviews
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">What truckers are saying about us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from professional drivers across America
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "These guys saved my bacon when I needed an emergency overweight permit at 2 AM. Got it processed in
                  45 minutes. Outstanding service!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                    MR
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                    <p className="text-sm text-gray-600">Owner-Operator, Texas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Been using them for 3 years for all our fleet permits. Never had a single issue. Professional, fast,
                  and reliable every time."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                    SJ
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Fleet Manager, California</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The customer service is top-notch. They walk you through everything and make sure you understand all
                  the requirements. Highly recommend!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                    DT
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">David Thompson</p>
                    <p className="text-sm text-gray-600">Long-Haul Driver, Florida</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to hit the road with confidence?</h2>
            <p className="text-xl text-red-100">
              Join thousands of drivers who trust us with their permit needs. Get started today and experience the
              difference professional service makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your phone number"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Order a Call Back
              </Button>
            </div>
            <p className="text-sm text-red-200">
              Call us 24/7 at (555) 123-PERMIT or fill out the form above for instant quotes.
            </p>
          </div>
        </div>
      </section>

      
    
    </div>
  )
}
