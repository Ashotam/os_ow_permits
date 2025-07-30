import { create } from "zustand"
import { BlogPost } from "../../lib/blog"

type BlogStore = {
  posts: BlogPost[]
  loading: boolean
  error: string | null
  fetchPosts: () => Promise<void>
  createPost: (post: Partial<BlogPost>) => Promise<void>
  updatePost: (id: string, post: Partial<BlogPost>) => Promise<void>
  deletePost: (id: string) => Promise<void>
  getPostBySlug: (slug: string) => BlogPost | null
  getRelatedPosts: (currentPost: BlogPost, limit?: number) => BlogPost[]
}

export const useBlogStore = create<BlogStore>((set, get) => ({
  posts: [],
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null })
    try {
      const res = await fetch("/api/posts")
      const data = await res.json()
      if (Array.isArray(data)) {
        set({ posts: data })
      } else {
        throw new Error("Invalid response format")
      }
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch posts" })
    } finally {
      set({ loading: false })
    }
  },

  createPost: async (newPost) => {
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      })
      const data = await res.json()
      if (data.success) {
        set((state) => ({
          posts: [{ ...newPost, _id: data.id } as BlogPost, ...state.posts],
        }))
      } else {
        throw new Error(data.error)
      }
    } catch (err: any) {
      set({ error: err.message || "Failed to create post" })
    }
  },

  updatePost: async (id, updatedPost) => {
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      })
      const data = await res.json()
      set((state) => ({
        posts: state.posts.map((post) => (post._id === id ? data : post)),
      }))
    } catch (err: any) {
      set({ error: err.message || "Failed to update post" })
    }
  },

  deletePost: async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      })
      set((state) => ({
        posts: state.posts.filter((post) => post._id !== id),
      }))
    } catch (err: any) {
      set({ error: err.message || "Failed to delete post" })
    }
  },

  getPostBySlug: (slug: string): BlogPost | null => {
    const state = get()
    return (
      state.posts.find(
        (post) => post.slug === slug && post.status === "published"
      ) || null
    )
  },

  getRelatedPosts: (currentPost: BlogPost, limit = 3): BlogPost[] => {
    const state = get()
    return state.posts
      .filter(
        (post) =>
          post._id !== currentPost._id &&
          post.status === "published" &&
          (post.category === currentPost.category ||
            post.tags.some((tag) => currentPost.tags.includes(tag)))
      )
      .slice(0, limit)
  },
}))
