"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Phone, Mail, MapPin, CheckCircle } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { useState } from "react"

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    permitType: "",
    additionalDetails: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="bg-red-100 text-red-700 mb-4">
              Request a Quote
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get Your Permit Quote</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and our permit specialists will provide you with a detailed quote within 30
              minutes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-semibold">Contact Information</CardTitle>
                  <CardDescription className="text-gray-600">
                    Please provide your details and permit requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                 <ContactForm/>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Phone className="w-5 h-5 text-red-600" />
                    <span>Need Help?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">24/7 Hotline</p>
                      <p className="text-sm text-gray-600">(555) 123-PERMIT</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email Support</p>
                      <p className="text-sm text-gray-600">quotes@osowpermits.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Highlights */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Fast Processing</p>
                      <p className="text-sm text-gray-600">Most permits processed within 2 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Licensed Agents</p>
                      <p className="text-sm text-gray-600">Certified in all 50 states</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Route Planning</p>
                      <p className="text-sm text-gray-600">Expert guidance on optimal routes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Trusted by Thousands</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">10,000+ permits processed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">99.8% success rate</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">A+ BBB rating</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">Licensed & insured</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-slate-800 text-white border-0">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-gray-300 mb-4">Get your quote within 30 minutes during business hours</p>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    Average: 15 minutes
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
