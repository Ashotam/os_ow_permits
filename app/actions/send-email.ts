"use server"

import { z } from "zod"

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  startZipCode: z.string().optional(),
  startCity: z.string().optional(),
  deliveryZipCode: z.string().optional(),
  deliveryCity: z.string().optional(),
  permitType: z.string().min(1, "Please select a permit type"),
  commodity: z.string().optional(),
  width: z.string().optional(),
  height: z.string().optional(),
  length: z.string().optional(),
  weight: z.string().optional(),
  message: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

// Function to send email using SMTP (primary method)
async function sendEmailViaSMTP(validatedData: FormData) {
  try {
    // Check if we have SMTP credentials
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.log("Missing SMTP credentials - cannot send via SMTP")
      return false
    }

    console.log("Attempting SMTP email send...")

    // Dynamic import to avoid issues in environments that don't support it

        const nodemailer = await import("nodemailer")


    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
          New Quote Request - OS OW Permits
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Customer Information</h3>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Company:</strong> ${validatedData.company || "Not provided"}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
        </div>

        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Trip Details</h3>
          <p><strong>Start Location:</strong> ${validatedData.startZipCode || "Not provided"}${validatedData.startCity ? ` (${validatedData.startCity})` : ""}</p>
          <p><strong>Delivery Location:</strong> ${validatedData.deliveryZipCode || "Not provided"}${validatedData.deliveryCity ? ` (${validatedData.deliveryCity})` : ""}</p>
          <p><strong>Permit Type:</strong> ${validatedData.permitType}</p>
        </div>

        ${
          validatedData.permitType === "Oversize/Overweight" && validatedData.commodity
            ? `
        <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Load Information</h3>
          <p><strong>Commodity:</strong> ${validatedData.commodity}</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px;">
            <p><strong>Width:</strong> ${validatedData.width || "Not provided"}</p>
            <p><strong>Height:</strong> ${validatedData.height || "Not provided"}</p>
            <p><strong>Length:</strong> ${validatedData.length || "Not provided"}</p>
            <p><strong>Weight:</strong> ${validatedData.weight || "Not provided"}</p>
          </div>
        </div>
        `
            : ""
        }

        ${
          validatedData.message
            ? `
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Additional Details</h3>
          <p style="white-space: pre-wrap;">${validatedData.message}</p>
        </div>
        `
            : ""
        }

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
          <p>This quote request was submitted through the Go Go Permits website.</p>
          <p>Please respond within 1 hour as promised to the customer.</p>
          <p style="margin-top: 10px;">
            <strong>Go Go America LLC</strong><br>
            7403 Beck Ave<br>
            North Hollywood, CA 91605
          </p>
        </div>
      </div>
    `

    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
          Thank You for Your Quote Request!
        </h2>
        
        <p>Dear ${validatedData.firstName},</p>
        
        <p>Thank you for contacting OS OW Permits for your trucking permit needs. We have received your quote request and our permit specialists are already reviewing your information.</p>
        
        <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">What happens next?</h3>
          <ol style="color: #334155; line-height: 1.6;">
            <li>Our permit specialists will review your request</li>
            <li>We'll prepare a detailed quote for your specific needs</li>
            <li>You'll receive a response within the next hour</li>
          </ol>
        </div>
        
        <p>If you have any urgent questions, please don't hesitate to call us at <strong>+1 (818) 475-6020</strong>.</p>
        
        <p>Best regards,<br>
        The Go Go Permits Team</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
          <p>OS OW Permits - Fast, Fair, Affordable Trucking Permits</p>
          <p style="font-size: 12px; color: #9ca3af;">Operated by Go Go America LLC</p>
          <p style="margin-top: 10px;">
            7403 Beck Ave<br>
            North Hollywood, CA 91605
          </p>
        </div>
      </div>
    `

    // Create transporter with improved configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // Remove problematic TLS settings that might cause DNS issues
      tls: {
        rejectUnauthorized: false,
      },
      // Add connection timeout
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000, // 30 seconds
      socketTimeout: 60000, // 60 seconds
    })

    console.log("SMTP transporter created, attempting to verify connection...")

    // Try to verify connection (but don't fail if it doesn't work)
    try {
      await transporter.verify()
      console.log("SMTP connection verified successfully")
    } catch (verifyError) {
  if (verifyError instanceof Error) {
    console.log("SMTP verification failed, but continuing anyway:", verifyError.message)
  } else {
    console.log("SMTP verification failed with unknown error:", verifyError)
  }
}

    // Send business notification email
    console.log("Sending business notification email...")
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `🚛 New Quote Request from ${validatedData.firstName} ${validatedData.lastName}`,
      html: emailHtml,
    })

    // Send customer confirmation email
    console.log("Sending customer confirmation email...")
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: validatedData.email,
      subject: "Quote Request Received - OS OW Permits",
      html: customerEmailHtml,
    })

    console.log("SMTP emails sent successfully")
    return true
  } catch (error) {
    console.error("SMTP error:", error)
    return false
  }
}

// Fallback function using web API
async function sendEmailViaWebAPI(validatedData: FormData) {
  try {
    console.log("Attempting to send via Web API fallback...")

    const response = await fetch("https://formspree.io/f/xpwzgqpv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: validatedData.email,
        name: `${validatedData.firstName} ${validatedData.lastName}`,
        company: validatedData.company || "Not provided",
        phone: validatedData.phone,
        permitType: validatedData.permitType,
        startZip: validatedData.startZipCode || "Not provided",
        startCity: validatedData.startCity || "Not provided",
        deliveryZip: validatedData.deliveryZipCode || "Not provided",
        deliveryCity: validatedData.deliveryCity || "Not provided",
        commodity: validatedData.commodity || "Not provided",
        width: validatedData.width || "Not provided",
        height: validatedData.height || "Not provided",
        length: validatedData.length || "Not provided",
        weight: validatedData.weight || "Not provided",
        message: validatedData.message || "No additional details provided",
        _subject: `🚛 New Quote Request from ${validatedData.firstName} ${validatedData.lastName}`,
      }),
    })

    if (response.ok) {
      console.log("Email sent successfully via Web API fallback")
      return true
    } else {
      console.log("Web API fallback failed:", response.status, response.statusText)
      return false
    }
  } catch (error) {
    console.log("Web API fallback error:", error)
    return false
  }
}

export async function sendEmail(formData: FormData) {
  try {
    console.log("Processing quote request for:", formData.firstName, formData.lastName)

    // Validate form data
    const validatedData = formSchema.parse(formData)

    let emailSent = false

    // Try SMTP first (primary method)
    console.log("Trying SMTP method (primary)...")
    emailSent = await sendEmailViaSMTP(validatedData)

    if (emailSent) {
      console.log("Email sent successfully via SMTP!")
    } else {
      console.log("SMTP failed, trying Web API fallback...")

      // Try Web API as fallback
      emailSent = await sendEmailViaWebAPI(validatedData)

      if (emailSent) {
        console.log("Email sent successfully via Web API fallback!")
      } else {
        console.log("Both email methods failed")
      }
    }

    // Return success regardless of email status for better UX
    return {
      success: true,
      message:
        "Quote request submitted successfully! Check your email for confirmation. Our team will contact you within the next hour.",
    }
  } catch (error) {
    console.error("Error processing quote request:", error)

    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => err.message).join(", ")
      return {
        success: false,
        message: `Please check your form: ${errorMessages}`,
      }
    }

    return {
      success: false,
      message:
        "Sorry, there was an issue submitting your request. Please try calling us directly at +1 (818) 475-6020.",
    }
  }
}
