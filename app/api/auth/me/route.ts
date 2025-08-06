import jwt from "jsonwebtoken"
import { NextRequest, NextResponse } from "next/server"
import { getUserByEmail } from "@/lib/db"

const JWT_SECRET = process.env.JWT_SECRET!

export async function GET(req: NextRequest) {
  const cookie = req.headers.get("cookie")
  const tokenMatch = cookie?.match(/auth_token=([^;]+)/)
  const token = tokenMatch?.[1]
    console.log({token},878787)
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string }
     console.log(decoded.email,"decoded.email")
    const user = await getUserByEmail(decoded.email)
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json({
      name: user.name || "Admin",
      email: user.userEmail,
      role: user.role,
    })
  } catch (err) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 })
  }
}
