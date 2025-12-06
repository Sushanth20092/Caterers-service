"use client"

import { Store, Target, UtensilsCrossed, Users } from "lucide-react"

export default function About() {
  const usps = [
    {
      icon: Store,
      title: "Hygienic Kitchen",
      description: "State-of-the-art kitchen with trained staff following strict food safety standards",
    },
    {
      icon: Target,
      title: "Customizable Menus",
      description: "Flexible veg, non-veg, or combination menus tailored to your preferences",
    },
    {
      icon: UtensilsCrossed,
      title: "Live Counters",
      description: "Professional on-site buffet setup and live counters for seamless service",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced in weddings, house-warming, and corporate events",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance text-foreground">
            About Shivagiri Caterers
          </h2>
        </div>

        {/* Story - Full Width */}
        <div className="bg-background border border-border rounded-xl p-8 sm:p-12 mb-12">
          <p className="text-muted-foreground text-lg leading-relaxed text-balance text-center max-w-5xl mx-auto">
            Rooted in Perampalli, Udupi, Shivagiri Caterers has been delivering exceptional coastal and multi-cuisine catering since 2016. Under the expert leadership of Main Chef Suprith Kumar, we craft menus that blend tradition with innovation. From grand weddings and traditional house ceremonies to corporate gatherings, we bring quality, authenticity, and a refined culinary experience to events across Udupi and surrounding areas.
          </p>
        </div>

        {/* USPs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, idx) => {
            const Icon = usp.icon
            return (
              <div
                key={idx}
                className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{usp.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{usp.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}