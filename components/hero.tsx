"use client"

import { ArrowDown } from "lucide-react"
import LightRays from "./light-rays"
import Counter from "./counter"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
   <div className="absolute inset-0 w-full h-full">
        <LightRays
          raysOrigin="top-center"
          raysColor="#f7941d"
          raysSpeed={1.2}
          lightSpread={0.2}
          rayLength={8.0}
          pulsating={false}
          fadeDistance={4.0}
          saturation={3.0}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.0}
          distortion={0.25}
        />
      </div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full">
          <span className="text-primary text-sm font-medium">🍽️ Serving Udupi & Surroundings</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-white leading-tight text-balance">
          SHIVAGIRI CATERERS
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-base text-gray-300 mb-8 text-balance">
  Authentic Udupi & Multi-Cuisine Catering for Weddings, House Functions & Corporate Events
</p>


        <div className="mb-12">
          <Counter end={1800} duration={2500} />
        </div>

        

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#packages"
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-primary/25"
          >
            View Packages
          </a>
          <a
            href="https://wa.me/919945035835?text=Hi%20Shivagiri%20Caterers,%20I%20want%20to%20book%20your%20catering%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Book Your Event
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-primary" size={28} />
        </div>
      </div>
    </section>
  )
}
