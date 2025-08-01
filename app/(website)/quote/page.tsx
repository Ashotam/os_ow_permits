import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Truck, Clock, Shield, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TruckPermits Pro</span>
            </Link>

            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-red-100 text-red-700 mb-4">
              Get Your Quote
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Request Your Permit Quote</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our permit specialists will provide you with a detailed quote within 30
              minutes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Permit Information</CardTitle>
                  <CardDescription>Please provide details about your shipment and permit requirements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Smith" required />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="john@trucking.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="ABC Trucking LLC" />
                    </div>
                  </div>

                  {/* Permit Type */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Permit Type</h3>
                    <div className="space-y-2">
                      <Label htmlFor="permitType">Select Permit Type *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose permit type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="oversize">Oversize Load Permit</SelectItem>
                          <SelectItem value="overweight">Overweight Load Permit</SelectItem>
                          <SelectItem value="both">Oversize & Overweight</SelectItem>
                          <SelectItem value="trip">Trip Permit</SelectItem>
                          <SelectItem value="annual">Annual Permit</SelectItem>
                          <SelectItem value="other">Other (specify in comments)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Route Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Route Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="origin">Origin (City, State) *</Label>
                        <Input id="origin" placeholder="Houston, TX" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="destination">Destination (City, State) *</Label>
                        <Input id="destination" placeholder="Denver, CO" required />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="travelDate">Travel Date *</Label>
                        <Input id="travelDate" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="duration">Trip Duration</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-day">1 Day</SelectItem>
                            <SelectItem value="2-3-days">2-3 Days</SelectItem>
                            <SelectItem value="4-7-days">4-7 Days</SelectItem>
                            <SelectItem value="1-2-weeks">1-2 Weeks</SelectItem>
                            <SelectItem value="longer">Longer than 2 weeks</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Load Specifications */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Load Specifications</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="length">Length (feet)</Label>
                        <Input id="length" placeholder="53" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="width">Width (feet)</Label>
                        <Input id="width" placeholder="8.5" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="height">Height (feet)</Label>
                        <Input id="height" placeholder="13.6" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight (lbs)</Label>
                        <Input id="weight" placeholder="80000" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="commodity">Commodity Description</Label>
                      <Input id="commodity" placeholder="Construction equipment, machinery, etc." />
                    </div>
                  </div>

                  {/* Vehicle Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Vehicle Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="truckMake">Truck Make/Model</Label>
                        <Input id="truckMake" placeholder="Peterbilt 379" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="trailerType">Trailer Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select trailer type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="flatbed">Flatbed</SelectItem>
                            <SelectItem value="lowboy">Lowboy</SelectItem>
                            <SelectItem value="step-deck">Step Deck</SelectItem>
                            <SelectItem value="van">Van/Dry Van</SelectItem>
                            <SelectItem value="reefer">Refrigerated</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Additional Services</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="escort" />
                        <Label htmlFor="escort">Escort vehicle required</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="rush" />
                        <Label htmlFor="rush">Rush processing (same day)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="weekend" />
                        <Label htmlFor="weekend">Weekend/holiday travel</Label>
                      </div>
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="space-y-2">
                    <Label htmlFor="comments">Additional Comments</Label>
                    <Textarea
                      id="comments"
                      placeholder="Any special requirements, questions, or additional information..."
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                  >
                    Submit Quote Request
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-red-600" />
                    <span>Need Help?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="font-semibold">24/7 Hotline</p>
                      <p className="text-sm text-gray-600">(555) 123-PERMIT</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="font-semibold">Email Support</p>
                      <p className="text-sm text-gray-600">quotes@truckpermitspro.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Highlights */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-semibold">Fast Processing</p>
                      <p className="text-sm text-gray-600">Most permits processed within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <p className="font-semibold">Licensed Agents</p>
                      <p className="text-sm text-gray-600">Certified in all 50 states</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="font-semibold">Route Planning</p>
                      <p className="text-sm text-gray-600">Expert guidance on optimal routes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing Info */}
              <Card className="bg-gradient-to-br from-red-50 to-orange-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our quotes are always competitive with transparent pricing and no hidden fees.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Trip permits starting at $45</li>
                    <li>• Oversize permits from $75</li>
                    <li>• Rush service available</li>
                    <li>• Volume discounts for fleets</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
