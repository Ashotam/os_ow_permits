"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
  }, [isMenuOpen])

  return (
    <>
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/osow-logo-horizontal.webp"
                alt="OSOW Permits Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {[
                { label: "Services", href: "/#services" },
                { label: "Blog", href: "/blog" },
                { label: "Permit Types", href: "/#permits" },
                { label: "Reviews", href: "/#testimonials" },
                { label: "Contact", href: "/#contact" },
              ].map(link => (
                <Link key={link.href} href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/request-a-quote">
                <Button variant="ghost" className="hidden sm:inline-flex">Apply for Permits</Button>
              </Link>
              <Link href="tel:+15551234567">
                <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                  Call Us
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" onClick={() => setIsMenuOpen(false)} />
          <div className={clsx(
            "fixed inset-y-0 right-0 w-full z-50 bg-white transition-transform duration-300 ease-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}>
            <div className="h-full flex flex-col px-6 py-6">
              <div className="flex items-center justify-between mb-6 py-4 ">
                <span className="text-3xl font-bold tracking-wide">OSOW permits</span>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-8 h-8 " />
                </button>
              </div>
              <nav className="flex flex-col space-y-6 text-lg font-medium text-gray-800">
                {[
                  { href: "/#services", label: "Services" },
                  { href: "/blog", label: "Blog" },
                  { href: "/#permits", label: "Permit Types" },
                  { href: "/#testimonials", label: "Reviews" },
                  { href: "/#contact", label: "Contact" },
                  { href: "/request-a-quote", label: "Apply for Permits" },
                ].map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="hover:text-red-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}
