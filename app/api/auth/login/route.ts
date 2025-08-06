import { cookies } from "next/headers"
import { getUserByEmail } from "@/lib/db"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET!

export async function POST(req: Request) {
  const { email, password } = await req.json()
  const user = await getUserByEmail(email)
  if (!user || !user.password) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }

  const token = jwt.sign(
    { id: user._id, email: user.userEmail, role: user.role },
    JWT_SECRET,
    { expiresIn: "7d" }
  )

 const cookieStore = await cookies() 
  cookieStore.set("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  return NextResponse.json({ message: "Logged in" })
}
