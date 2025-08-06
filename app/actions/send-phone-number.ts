    export async function sendPhoneNumber(phone: string) {
    if (!phone || phone.trim() === "") {
        return {
        success: false,
        message: "Phone number is required.",
        }
    }

    try {
        const nodemailer = await import("nodemailer")
        
        const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number.parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
        tls: { rejectUnauthorized: false },
        })

        await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: "📞 New Call Back Request",
        html: `
            <div style="font-family: Arial, sans-serif; font-size: 16px;">
            <h3 style="color: #1e40af;">📞 Call Back Requested</h3>
            <p><strong>Phone Number:</strong> ${phone}</p>
            </div>
        `,
        })

        return {
        success: true,
        message: "Phone number sent successfully. We’ll call you shortly.",
        }
    } catch (error) {
        console.error("Error sending phone number:", error)
        return {
        success: false,
        message: "Failed to send phone number. Please try again.",
        }
    }
    }
