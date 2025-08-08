"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"

const PERMIT_ITEMS = [
  { label: "Oversize & Overweight", href: "/permit-types/oversize-overweight" },
  { label: "Superload", href: "/permit-types/superload" },
  { label: "Trip", href: "/permit-types/trip" },
  { label: "Fuel", href: "/permit-types/fuel" },
  { label: "Temporary Tax Permits", href: "/permit-types/temporary-tax" },
  { label: "Annual", href: "/permit-types/annual" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPermitsOpen, setIsPermitsOpen] = useState(false) // mobile
  const [isPermitsOpenDesktop, setIsPermitsOpenDesktop] = useState(false)
  const hoverTimeout = useRef<number | null>(null)
  const permitsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto"
  }, [isMenuOpen])

  // safer close on outside click / Esc for desktop
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!permitsRef.current?.contains(e.target as Node)) {
        setIsPermitsOpenDesktop(false)
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsPermitsOpenDesktop(false)
    }
    if (isPermitsOpenDesktop) {
      document.addEventListener("mousedown", onDocClick)
      document.addEventListener("keydown", onKey)
    }
    return () => {
      document.removeEventListener("mousedown", onDocClick)
      document.removeEventListener("keydown", onKey)
    }
  }, [isPermitsOpenDesktop])

  // helpers to manage hover with a small delay (prevents flicker)
  const openNow = () => {
    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current)
    setIsPermitsOpenDesktop(true)
  }
  const closeSoon = () => {
    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current)
    hoverTimeout.current = window.setTimeout(() => setIsPermitsOpenDesktop(false), 150)
  }

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

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/#services" className="text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </Link>

              <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                Blog
              </Link>

              {/* Permit Types (desktop) — hover-open, stays open for clicking */}
              <div
                ref={permitsRef}
                className="relative"
                onMouseEnter={openNow}
                onMouseLeave={closeSoon}
              >
                <button
                  type="button"
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  aria-haspopup="menu"
                  aria-expanded={isPermitsOpenDesktop}
                  onClick={() => setIsPermitsOpenDesktop(v => !v)} 
                >
                  Permit Types
                  <ChevronDown className={clsx("ml-1 h-4 w-4 transition-transform", isPermitsOpenDesktop && "rotate-180")} />
                </button>

                {isPermitsOpenDesktop && (
                  <div
                    // IMPORTANT: no margin gap between trigger and menu.
                    // Use top-full + ring to avoid hover gaps; close is delayed anyway.
                    className="absolute left-0 top-full w-72 rounded-xl border bg-white shadow-lg p-2 z-[60]"
                    role="menu"
                    onMouseEnter={openNow}
                    onMouseLeave={closeSoon}
                  >
                    <ul className="py-1">
                      {PERMIT_ITEMS.map(item => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => setIsPermitsOpenDesktop(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Link href="/#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                Reviews
              </Link>
              <Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/request-a-quote">
                <Button   className="hidden sm:inline-flex bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 
               text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200">Request a Quote</Button>
              </Link>
              <Link href="tel:+18184756020">
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
          <div
            className={clsx(
              "fixed inset-y-0 right-0 w-full z-50 bg-white transition-transform duration-300 ease-out",
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="h-full flex flex-col px-6 py-6">
              <div className="flex items-center justify-between mb-6 py-4">
                <span className="text-3xl font-bold tracking-wide">OSOW Permits</span>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-8 h-8" />
                </button>
              </div>

              <nav className="flex flex-col text-lg font-medium text-gray-800">
                <Link href="/#services" className="py-3 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
                  Services
                </Link>

                <Link href="/blog" className="py-3 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
                  Blog
                </Link>

                {/* Mobile: Permit Types collapsible */}
                <button
                  className="py-3 flex items-center justify-between hover:text-red-600"
                  onClick={() => setIsPermitsOpen(v => !v)}
                  aria-expanded={isPermitsOpen}
                >
                  <span>Permit Types</span>
                  <ChevronDown className={clsx("h-5 w-5 transition-transform", isPermitsOpen && "rotate-180")} />
                </button>

                {isPermitsOpen && (
                  <div className="mb-2 ml-2 rounded-lg border bg-gray-50">
                    {PERMIT_ITEMS.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-base text-gray-700 hover:text-red-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                <Link href="/#testimonials" className="py-3 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
                  Reviews
                </Link>
                <Link href="/#contact" className="py-3 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <Link href="/request-a-quote" className="py-3 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
                  Request a Quote
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}
