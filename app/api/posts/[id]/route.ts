import { NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function PUT(req: NextRequest) {
  try {
    const url = new URL(req.url)
    const id = url.pathname.split('/').pop()
    const body = await req.json()
    const client = await clientPromise
    const db = client.db("blog")

    const result = await db.collection("posts").updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...body, updatedAt: new Date() } }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    
    const url = new URL(req.url)
    const id = url.pathname.split('/').pop()
    const client = await clientPromise
    const db = client.db("blog")

    const result = await db.collection("posts").deleteOne({ _id: new ObjectId(id) })

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, error: "Post not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
