"use client"

import { useEffect, useRef, useCallback } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Link from "@tiptap/extension-link"
import Image from "@tiptap/extension-image"
import Placeholder from "@tiptap/extension-placeholder"

import {
  Bold, Italic, Strikethrough,
  Heading1, Heading2, Heading3, Heading4,
  List, ListOrdered,
  Link as LinkIcon, Image as ImageIcon,
  Undo, Redo, Pilcrow
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import clsx from "clsx"

type BlogEditorProps = {
  value?: string
  onChange?: (html: string) => void
  placeholder?: string
  disabled?: boolean
}

export default function BlogEditor({
  value = "",
  onChange,
  placeholder = "Write your post...",
  disabled = false,
}: BlogEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const editor = useEditor({
    immediatelyRender: false,          // good for Next.js hydration
    editable: !disabled,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4] },  // H1–H4
      }),
      Link.configure({
        openOnClick: true,
        autolink: true,
        HTMLAttributes: { rel: "noopener noreferrer", target: "_blank" },
      }),
      Image.configure({ allowBase64: false }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
    editorProps: {
      attributes: {
        class: clsx(
          "prose max-w-none prose-gray",
          "focus:outline-none p-4 rounded-lg border bg-white min-h-[300px]"
        ),
      },
    },
  })

  // Keep external value in sync (for edit forms)
  useEffect(() => {
    if (!editor) return
    const current = editor.getHTML()
    if (value != null && value !== current) {
      editor.commands.setContent(value)
    }
  }, [value, editor])

  const promptForLink = () => {
    if (!editor) return
    const prev = editor.getAttributes("link").href as string | undefined
    const url = window.prompt("Enter URL", prev ?? "https://")
    if (url === null) return
    if (url === "") {
      editor.chain().focus().unsetLink().run()
      return
    }
    editor.chain().focus().setLink({ href: url }).run()
  }

  const openFileDialog = useCallback(() => {
    fileInputRef.current?.click()
  }, [])

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !editor) return
    try {
      const formData = new FormData()
      formData.append("file", file)
      const res = await fetch("/api/upload", { method: "POST", body: formData })
      const data = await res.json()
      if (!res.ok || !data?.url) throw new Error(data?.error || "Upload failed")
      // INSERT the image into the document
      editor.chain().focus().setImage({ src: data.url }).run()
      e.target.value = ""
    } catch (err) {
      console.error(err)
      alert("Image upload failed")
    }
  }

  if (!editor) return null

  return (
    <div className="w-full">
      {/* Toolbar */}
      <div className="mb-2 flex flex-wrap gap-2 rounded-lg border bg-white p-2">
        {/* Formatting */}
        <Button type="button" variant={editor.isActive("bold") ? "default" : "outline"} size="sm"
          onClick={() => editor.chain().focus().toggleBold().run()}>
          <Bold className="w-4 h-4" />
        </Button>
        <Button type="button" variant={editor.isActive("italic") ? "default" : "outline"} size="sm"
          onClick={() => editor.chain().focus().toggleItalic().run()}>
          <Italic className="w-4 h-4" />
        </Button>
        <Button type="button" variant={editor.isActive("strike") ? "default" : "outline"} size="sm"
          onClick={() => editor.chain().focus().toggleStrike().run()}>
          <Strikethrough className="w-4 h-4" />
        </Button>

        <div className="mx-1 h-6 w-px bg-gray-200" />

        {/* Paragraph + Headings */}
        <Button type="button" variant={editor.isActive("paragraph") ? "default" : "outline"} size="sm"
          onClick={() => editor.chain().focus().setParagraph().run()} title="Paragraph">
          <Pilcrow className="w-4 h-4" />
        </Button>
        <Button type="button" variant={editor.isActive("heading", { level: 1 }) ? "default" : "outline"} size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} title="H1">
          <Heading1 className="w-4 h-4" />
        </Button>
        <Button type="button" variant={editor.isActive("heading", { level: 2 }) ? "default" : "outline"} size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} title="H2">
          <Heading2 className="w-4 h-4" />
        </Button>
        <Button type="button" variant={editor.isActive("heading", { level: 3 }) ? "default" : "outline"} size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} title="H3">
          <Heading3 className="w-4 h-4" />
        </Button>
        <Button type="button" variant={editor.isActive("heading", { level: 4 }) ? "default" : "outline"} size="sm"
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} title="H4">
          <Heading4 className="w-4 h-4" />
        </Button>

        <div className="mx-1 h-6 w-px bg-gray-200" />

        {/* Lists */}
        <Button type="button" variant={editor.isActive("bulletList") ? "default" : "outline"} size="sm"
          onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <List className="w-4 h-4" />
        </Button>
        <Button type="button" variant={editor.isActive("orderedList") ? "default" : "outline"} size="sm"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <ListOrdered className="w-4 h-4" />
        </Button>

        <div className="mx-1 h-6 w-px bg-gray-200" />

        {/* Link + Image */}
        <Button type="button" variant={editor.isActive("link") ? "default" : "outline"} size="sm" onClick={promptForLink}>
          <LinkIcon className="w-4 h-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={openFileDialog}>
          <ImageIcon className="w-4 h-4" />
        </Button>

        <div className="mx-1 h-6 w-px bg-gray-200" />

        {/* Undo / Redo */}
        <Button type="button" variant="outline" size="sm" onClick={() => editor.chain().focus().undo().run()}>
          <Undo className="w-4 h-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" onClick={() => editor.chain().focus().redo().run()}>
          <Redo className="w-4 h-4" />
        </Button>

        {/* hidden file input */}
        <Input type="file" accept="image/*" ref={fileInputRef} className="hidden" onChange={handleUploadImage} />
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />
    </div>
  )
}
