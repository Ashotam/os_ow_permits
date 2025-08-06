import bcrypt from "bcryptjs"

export interface User {
  id: string
  email: string
  name: string
  role: string
}

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10
  const hashed = await bcrypt.hash(password, saltRounds)
  return hashed
}


export function logout(): void {
  localStorage.removeItem("currentUser")
}
