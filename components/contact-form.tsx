"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { sendEmail } from "@/app/actions/send-email";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    startZipCode: "",
    deliveryZipCode: "",
    permitType: "",
    commodity: "",
    width: "",
    height: "",
    length: "",
    weight: "",
    additionalDetails: "",
  });

  const handleInputChange = (name: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({});

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        router.push(`/success?name=${encodeURIComponent(formData.firstName)}`);
      } else {
        setFormStatus(result);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" value={formData.firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} required className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" value={formData.lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} required className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="companyName">Company Name</Label>
        <Input id="companyName" value={formData.companyName} onChange={(e) => handleInputChange("companyName", e.target.value)} className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500" />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="startZipCode">Start Zip Code</Label>
          <Input id="startZipCode" value={formData.startZipCode} onChange={(e) => handleInputChange("startZipCode", e.target.value)} className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="deliveryZipCode">Delivery Zip Code</Label>
          <Input id="deliveryZipCode" value={formData.deliveryZipCode} onChange={(e) => handleInputChange("deliveryZipCode", e.target.value)} className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="permitType">Permit Type *</Label>
        <Select onValueChange={(value) => handleInputChange("permitType", value)} required>
          <SelectTrigger className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500">
            <SelectValue placeholder="Select permit type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="oversize">Oversize Load Permit</SelectItem>
            <SelectItem value="overweight">Overweight Load Permit</SelectItem>
            <SelectItem value="both">Oversize & Overweight</SelectItem>
            <SelectItem value="trip">Trip Permit</SelectItem>
            <SelectItem value="annual">Annual Permit</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {formData.permitType === "oversize" || formData.permitType === "overweight" || formData.permitType === "both" ? (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="commodity">Commodity *</Label>
            <Input id="commodity" value={formData.commodity} onChange={(e) => handleInputChange("commodity", e.target.value)} required className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="width">Width *</Label>
              <Input id="width" value={formData.width} onChange={(e) => handleInputChange("width", e.target.value)} required className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Height *</Label>
              <Input id="height" value={formData.height} onChange={(e) => handleInputChange("height", e.target.value)} required className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="length">Length *</Label>
              <Input id="length" value={formData.length} onChange={(e) => handleInputChange("length", e.target.value)} required className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="weight">Weight *</Label>
              <Input id="weight" value={formData.weight} onChange={(e) => handleInputChange("weight", e.target.value)} required className="h-11 border-gray-300 focus:border-red-500 focus:ring-red-500" />
            </div>
          </div>
        </div>
      ) : null}

      <div className="space-y-2">
        <Label htmlFor="additionalDetails">Additional Details</Label>
        <Textarea
          id="additionalDetails"
          placeholder="Provide extra information about the shipment, special requirements, etc."
          value={formData.additionalDetails}
          onChange={(e) => handleInputChange("additionalDetails", e.target.value)}
          rows={4}
          className="border-gray-300 focus:border-red-500 focus:ring-red-500 resize-none"
        />
      </div>

      <div className="pt-6">
        <Button
          type="submit"
          size="lg"
          className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium h-12 text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <React.Fragment>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </React.Fragment>
          ) : (
            "Submit Quote Request"
          )}
        </Button>
      </div>
    </form>
  );
}
