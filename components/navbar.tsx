"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Packages", href: "#packages" },
    { label: "Menu", href: "#menu" },
    { label: "About", href: "#about" },
    // { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Shivagiri Caterers"
              width={200}
              height={200}
              className="w-16 h-16 sm:w-19 sm:h-19"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2 md:gap-3">
            <a
              href="tel:+919945035835"
              className="flex items-center gap-1 px-3 py-2 md:px-4 md:py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-200 text-xs md:text-sm font-medium"
            >
              <Phone size={16} />
              <span className="hidden md:inline">Call</span>
            </a>
            <a
              href="https://wa.me/919945035835"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 md:px-4 md:py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-200 text-xs md:text-sm font-medium"
            >
              <MessageCircle size={16} />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-card/50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex gap-2">
              <a
                href="tel:+919945035835"
                className="flex-1 text-center px-3 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all text-xs font-medium"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919945035835"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center px-3 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-all text-xs font-medium"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
