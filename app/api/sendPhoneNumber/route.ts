import { NextResponse } from "next/server"
import { sendPhoneNumber } from "@/app/actions/send-phone-number"

export async function POST(req: Request) {
  try {
    const { phone } = await req.json()

    if (!phone || typeof phone !== "string") {
      return NextResponse.json({ success: false, message: "Invalid phone number" }, { status: 400 })
    }

    const result = await sendPhoneNumber(phone)

    return NextResponse.json(result)
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
