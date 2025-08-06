"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {PhoneInput} from "@/components/ui/phoneInput"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog"

export default function PhoneForm() {
  const [loading, setLoading] = useState(false)
  const [result,setResult] = useState<{message:string,success:boolean}|null>(null)
  const [openDialog,setOpenDialog] =  useState<boolean>(false)

   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const phone = formData.get("phone")?.toString()
    if (!phone) return

    setLoading(true)
    setResult(null)

    try {
      const res = await fetch("/api/sendPhoneNumber", {
        method: "POST",
        body: JSON.stringify({ phone }),
        headers: { "Content-Type": "application/json" },
      })
      const data = await res.json()
      setResult(data)
      setOpenDialog(true)
    } catch (error) {
      setResult({ success: false, message: "Something went wrong. Please try again." })
      setOpenDialog(true)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
       <PhoneInput name="phone" />
        <Button type="submit" size="lg" className="bg-white text-red-600 hover:bg-gray-100">
          {loading ? "Sending..." : "Order a Call Back"}
        </Button>
      </div>
       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
  <DialogContent className="rounded-2xl shadow-xl bg-white p-6 sm:max-w-md transition-all">
    <div className="flex items-center gap-3">
      <div
        className={`text-3xl ${
          result?.success ? "text-green-500" : "text-red-500"
        }`}
      >
        {result?.success ? "✅" : "❌"}
      </div>
      <div>
        <DialogTitle
          className={`text-lg font-semibold ${
            result?.success ? "text-green-700" : "text-red-700"
          }`}
        >
          {result?.success ? "Call Request Sent!" : "Something went wrong"}
        </DialogTitle>
        <DialogDescription className="mt-1 text-gray-600 text-sm">
          {result?.message}
        </DialogDescription>
      </div>
    </div>
  </DialogContent>
</Dialog>
    </form>
  )
}
