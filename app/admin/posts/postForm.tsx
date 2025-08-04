"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Save, Plus, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { mockCategories, generateSlug, calculateReadingTime } from "@/lib/blog"

type PostFormProps = {
  initialData?: any
  onSubmit: (postData: any) => Promise<void>
  isLoading?: boolean
}

export const PostForm = ({ initialData = {}, onSubmit, isLoading = false }: PostFormProps) => {
  const router = useRouter()

  const [title, setTitle] = useState(initialData.title || "")
  const [excerpt, setExcerpt] = useState(initialData.excerpt || "")
  const [content, setContent] = useState(initialData.content || "")
  const [status, setStatus] = useState<"draft" | "published">(initialData.status || "draft")
  const [category, setCategory] = useState(initialData.category || "")
  const [tags, setTags] = useState<string[]>(initialData.tags || [])
  const [newTag, setNewTag] = useState("")
  const [coverImage, setCoverImage] = useState(initialData.coverImage || "")

  const slug = generateSlug(title)
  const readingTime = calculateReadingTime(content)

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    })

    const data = await res.json()
    if (res.ok) {
      setCoverImage(data.url)
    } else {
      alert("Upload failed: " + data.error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const postData = {
      ...initialData,
      title,
      excerpt,
      content,
      status,
      category,
      tags,
      coverImage,
      slug,
      readingTime,
      publishedAt: status === "published" ? new Date().toISOString() : undefined,
    }
    await onSubmit(postData)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post Title" required />
          <p className="text-sm text-gray-500">URL: /blog/{slug}</p>

          {/* Content */}
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" rows={12} required />
          <p className="text-sm text-gray-500">Estimated reading time: {readingTime} minutes</p>

          {/* Excerpt */}
          <Textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Excerpt" rows={3} required />
        </div>

        <div className="space-y-4">
          {/* Status */}
          <Label>Status</Label>
          <Select value={status}  onValueChange={(value) => setStatus(value as "draft" | "published")}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
            </SelectContent>
          </Select>

          {/* Category */}
          <Label>Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
            <SelectContent>
              {mockCategories.map(cat => (
                <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Tags */}
          <Label>Tags</Label>
          <div className="flex space-x-2">
            <Input value={newTag} onChange={(e) => setNewTag(e.target.value)} placeholder="Add tag..." />
            <Button type="button" onClick={handleAddTag} size="sm"><Plus className="w-4 h-4" /></Button>
          </div>
          <div className="flex flex-wrap gap-1">
            {tags.map(tag => (
              <Badge key={tag} variant="secondary">
                {tag}
                <button type="button" onClick={() => handleRemoveTag(tag)} className="ml-1">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>

          {/* Cover Image */}
         
      <div>
        <Label htmlFor="cover">Cover Image</Label>
        <Input type="file" accept="image/*" onChange={handleUpload} />
        {coverImage && (
          <img
            src={coverImage}
            alt="Cover preview"
            className="w-full h-48 object-cover mt-2 rounded-lg border"
          />
        )}
      </div>

          <Button type="submit" disabled={isLoading} className="w-full mt-4">
            <Save className="w-4 h-4 mr-2" />
            {isLoading ? "Saving..." : "Save Post"}
          </Button>
        </div>
      </div>
    </form>
  )
}


