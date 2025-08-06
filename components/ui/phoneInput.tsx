"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"

export function PhoneInput({ name }: { name?: string }) {
  const [value, setValue] = useState("+1 ")

  const formatPhoneNumber = (digits: string) => {
    if (digits.length === 0) return ""
    if (digits.length < 4) return `(${digits}`
    if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value

    if (raw.startsWith("+1")) {
      raw = raw.slice(2)
    }

    let digits = raw.replace(/\D/g, "").slice(0, 10)

    const formatted = formatPhoneNumber(digits)

    setValue(`+1 ${formatted}`)
  }

  return (
    <Input
      type="tel"
      name={name || "phone"}
      placeholder="+1 (555) 123-4567"
      value={value}
      onChange={handleChange}
      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
    />
  )
}
