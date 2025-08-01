import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "../globals.css"
import Header from "../../components/ui/header"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "OSOWpermits - Professional Trucking Permit Services",
  description:
    "Fast, reliable trucking permit services for drivers nationwide. Get oversize, overweight, and trip permits processed quickly with 24/7 support.",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
         <Header />
        {children}
        
        </body>
    </html>
  )
}
