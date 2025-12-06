"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"

interface PackageData {
  price: string
  funkyName: string
  icon: React.ComponentType<{ className?: string }>
  items: string[]
  color: string
  highlight?: boolean
}

interface PackageCardProps {
  pkg: PackageData
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const [expanded, setExpanded] = useState(false)

  const visibleItems = expanded ? pkg.items : pkg.items.slice(0, 8)
  const hasMore = pkg.items.length > 8
  const Icon = pkg.icon

  const generateWhatsAppLink = () => {
    const itemsList = pkg.items.map((item, idx) => `${idx + 1}. ${item}`).join('\n')
    const message = `Hi Shivagiri Caterers,\n\nI am interested in the *${pkg.funkyName}* package.\n\n*Package Details:*\nPrice: ${pkg.price} per head\n\n*Items Included:*\n${itemsList}\n\nCan I get more information about this package?`
    return `https://wa.me/919945035835?text=${encodeURIComponent(message)}`
  }

  return (
    <div
      className={`group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg ${
        pkg.highlight
          ? "border-2 border-primary shadow-lg shadow-primary/25"
          : "border border-border hover:border-primary/50"
      }`}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color}`} />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col">
        {/* Price and Name */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-primary">{pkg.price}</div>
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-foreground">{pkg.funkyName}</h3>
          {pkg.highlight && <p className="text-primary text-sm mt-2">Most Popular</p>}
        </div>

        {/* Items List */}
        <div className="space-y-3 flex-1">
          {visibleItems.map((item, itemIdx) => (
            <div key={itemIdx} className="flex items-start gap-2">
              <Check size={16} className="text-primary mt-1 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}

          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 text-primary text-sm font-semibold mt-4 hover:text-primary/80 transition-colors"
            >
              <ChevronDown size={16} className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
              {expanded ? "View Less" : `View More (${pkg.items.length - 8})`}
            </button>
          )}
        </div>

        {/* CTA Button */}
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 w-full py-3 rounded-lg font-semibold text-center transition-all duration-200 ${
            pkg.highlight
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "border border-primary text-primary hover:bg-primary/10"
          }`}
        >
          Enquire Now
        </a>
      </div>
    </div>
  )
}