export interface User {
  id: string
  email: string
  name: string
  role: string
}

const DEMO_USER: User = {
  id: "1",
  email: "admin@osowpermits.com",
  name: "Admin User",
  role: "admin",
}

const DEMO_PASSWORD = "admin123"

export function login(email: string, password: string): User | null {
  if (email === DEMO_USER.email && password === DEMO_PASSWORD) {
    localStorage.setItem("currentUser", JSON.stringify(DEMO_USER))
    return DEMO_USER
  }
  return null
}

export function logout(): void {
  localStorage.removeItem("currentUser")
}

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null

  const userStr = localStorage.getItem("currentUser")
  if (!userStr) return null

  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}
