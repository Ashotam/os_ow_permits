import clientPromise from "@/lib/mongodb"

export async function getAllPublishedPosts() {
  const client = await clientPromise
  const db = client.db("blog")
  const posts = await db.collection("posts").find({ status: "published" }).toArray()
  return posts
}
export async function getPostBySlug(slug: string) {
  const client = await clientPromise
  const db = client.db("blog")
  const post = await db.collection("posts").findOne({ slug, status: "published" })
  return post
}