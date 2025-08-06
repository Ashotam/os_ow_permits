// app/api/auth/register/route.ts
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import clientPromise from "@/lib/mongodb"

export async function POST(req: Request) {
  try {
   const userEmail = 'd.avanesyan@gmail.com';
   const userPassword = 'Osowpermits123!';   
   const userRole = 'admin';

   

    const client = await clientPromise
    const db = client.db("user")
    const users = db.collection("admin")

    // Check if the user already exists
    const existingUser = await users.findOne({ userEmail })
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(userPassword, 10)

    // Create user
    const newUser = {
      userEmail,
      password: hashedPassword,
      userRole,
      createdAt: new Date(),
    }

    const result = await users.insertOne(newUser)

    return NextResponse.json({ message: "User created", userId: result.insertedId })
  } catch (err) {
    console.error("Error creating user:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
