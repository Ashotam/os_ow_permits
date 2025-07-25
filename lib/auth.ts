export interface User {
  id: string
  email: string
  name: string
  role: "admin"
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

// Mock admin user
const ADMIN_USER: User = {
  id: "1",
  email: "admin@truckpermitspro.com",
  name: "Admin User",
  role: "admin",
}

const ADMIN_PASSWORD = "admin123" // In production, this would be hashed

export function login(email: string, password: string): Promise<User | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === ADMIN_USER.email && password === ADMIN_PASSWORD) {
        // Store auth state in localStorage for demo
        localStorage.setItem("auth_user", JSON.stringify(ADMIN_USER))
        resolve(ADMIN_USER)
      } else {
        resolve(null)
      }
    }, 1000) // Simulate network delay
  })
}

export function logout(): void {
  localStorage.removeItem("auth_user")
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null

  try {
    const userStr = localStorage.getItem("auth_user")
    return userStr ? JSON.parse(userStr) : null
  } catch {
    return null
  }
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}
