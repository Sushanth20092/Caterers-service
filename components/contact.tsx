"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    menuType: "both",
    mealTimes: [] as string[],
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleMealTimeToggle = (mealTime: string) => {
    setFormData((prev) => ({
      ...prev,
      mealTimes: prev.mealTimes.includes(mealTime)
        ? prev.mealTimes.filter((m) => m !== mealTime)
        : [...prev.mealTimes, mealTime],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      const mealTimesText = formData.mealTimes.length > 0 ? formData.mealTimes.join(", ") : "Not specified"
      const message = `New Enquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nEvent Date: ${formData.eventDate}\nGuest Count: ${formData.guestCount}\nMenu Type: ${formData.menuType}\nMeal Times: ${mealTimesText}\nMessage: ${formData.message}`
      const encodedMessage = encodeURIComponent(message)
      window.open(`https://wa.me/919945035835?text=${encodedMessage}`, "_blank")

      setSubmitted(true)
      setIsSubmitting(false)

      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: "",
          phone: "",
          eventDate: "",
          guestCount: "",
          menuType: "both",
          mealTimes: [],
          message: ""
        })
      }, 3000)
    }, 500)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">Plan your perfect event with us</p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-lg text-foreground">Phone</h3>
              </div>
              <div className="text-foreground/80 space-y-1">
                <p>+91 9945035835</p>
                <p>+91 9980262767</p>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-lg text-foreground">Email</h3>
              </div>
              <p className="text-foreground/80 break-words">
                shivagiricaterers@gmail.com
              </p>
            </div>

            {/* Address */}
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-lg text-foreground">Location</h3>
              </div>
              <p className="text-foreground/80">Perampalli, Udupi</p>
            </div>
          </div>

          {/* Response Time */}
          <div className="text-center mb-12 p-4 bg-primary/10 rounded-lg">
            <p className="text-lg font-medium text-foreground">⏱️ Response Time: We will get back within 24 hours.</p>
          </div>

          {/* Enquiry Form */}
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium mb-2 text-foreground">
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
              </div>

              <div>
                <label htmlFor="guestCount" className="block text-sm font-medium mb-2 text-foreground">
                  Approx. Guest Count
                </label>
                <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
              </div>

              <div>
                <label htmlFor="menuType" className="block text-sm font-medium mb-2 text-foreground">
                  Menu Type
                </label>
                <select
                  id="menuType"
                  name="menuType"
                  value={formData.menuType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                >
                  <option value="vegetarian">Vegetarian</option>
                  <option value="non-vegetarian">Non-Vegetarian</option>
                  <option value="both">Both (Mixed)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3 text-foreground">
                  Meal Times (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-3">
                  {["Breakfast", "Lunch", "Dinner"].map((mealTime) => (
                    <button
                      key={mealTime}
                      type="button"
                      onClick={() => handleMealTimeToggle(mealTime)}
                      className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                        formData.mealTimes.includes(mealTime)
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {formData.mealTimes.includes(mealTime) && "✓ "}
                      {mealTime}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full py-3 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground font-semibold rounded-lg transition-all duration-200"
              >
                {submitted ? "✓ Sent!" : isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}