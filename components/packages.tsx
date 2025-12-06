"use client"

import { Crown, Waves, Flame, Gem, PartyPopper, Zap } from "lucide-react"
import PackageCard from "./package-card"

interface PackageData {
  price: string
  funkyName: string
  icon: React.ComponentType<{ className?: string }>
  items: string[]
  color: string
  highlight?: boolean
}

export default function Packages() {
  const packages: PackageData[] = [
    {
      price: "₹250",
      funkyName: "Royal Feast",
      icon: Crown,
      items: [
        "Welcome Drink",
        "Veg Palya",
        "Apam/Idli/Parotta",
        "Chicken Gravy",
        "Ghee Rice/Biryani",
        "Green Masala",
        "Hariyali Kabab",
        "Rice",
        "Dhal",
        "Payasam",
        "Ice Cream",
        "Sweet Beeda",
      ],
      color: "from-primary/20 to-primary/5",
    },
    {
      price: "₹240",
      funkyName: "Coastal Bliss",
      icon: Waves,
      items: [
        "Welcome Drink",
        "Neer Dosa",
        "Kundapura Chicken",
        "Chicken 65",
        "Ghee Rice",
        "Green Masala",
        "Rice",
        "Dhal",
        "Payasam",
        "Ice Cream",
      ],
      color: "from-primary/15 to-primary/5",
    },
    {
      price: "₹200",
      funkyName: "Spice Master",
      icon: Flame,
      items: [
        "Welcome Drink",
        "Apam/Idli/Neer Dosa",
        "Kundapura Chicken",
        "Chicken Kabab",
        "Chicken Pepper/Chilly",
        "Rice",
        "Dhal",
        "Payasam",
      ],
      color: "from-primary/15 to-primary/5",
    },
    {
      price: "₹190",
      funkyName: "Biryani Dream",
      icon: Gem,
      items: ["Welcome Drink", "Biryani", "Green Masala", "Salad", "Kabab", "Rice", "Dhal", "Veg Palya", "Payasam"],
      color: "from-primary/15 to-primary/5",
    },
    {
      price: "₹155",
      funkyName: "Festival Special",
      icon: PartyPopper,
      items: ["Welcome Drink", "Veg Palya", "Idli/Apam", "Kundapura Chicken", "Kabab", "Rice", "Dhal", "Payasam"],
      color: "from-primary/15 to-primary/5",
    },
    {
      price: "₹140",
      funkyName: "Quick Bite",
      icon: Zap,
      items: ["Welcome Drink", "Rotti", "Chicken Gravy", "Urval Chicken", "Rice", "Dhal", "Veg Palya", "Payasam"],
      color: "from-primary/15 to-primary/5",
    },
  ]

  return (
    <section id="packages" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance text-foreground">Per-Head Catering Packages</h2>
          <p className="text-muted-foreground text-lg">Choose the perfect package for your event</p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, idx) => (
            <PackageCard key={idx} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}