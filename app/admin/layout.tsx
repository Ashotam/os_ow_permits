import type React from "react"
import { Roboto } from "next/font/google"
import {cookies} from "next/headers"
import "../globals.css"
import { redirect } from "next/navigation"
import jwt from "jsonwebtoken"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})


export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        </body>
    </html>
  )
}
