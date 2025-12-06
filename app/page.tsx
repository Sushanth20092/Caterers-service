"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Packages from "@/components/packages"
import Menu from "@/components/menu"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Packages />
      <Menu />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
