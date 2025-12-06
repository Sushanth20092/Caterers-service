export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Shivagiri Caterers made our wedding day perfect! The food was absolutely delicious and the service was impeccable.",
      author: "Priya & Arjun",
      location: "Udupi",
      rating: 5,
    },
    {
      quote:
        "Best catering service in Perampalli! The authentic Udupi dishes were a hit with all our guests. Highly recommended!",
      author: "Lucas Dsouza",
      location: "Perampalli",
      rating: 5,
    },
    {
      quote:
        "Corporate event catering done right. Professional team, excellent coordination, and outstanding food quality.",
      author: "Ramesh Kumar",
      location: "Udupi",
      rating: 5,
    },
    {
      quote:
        "The customizable menu options allowed us to create exactly what we wanted. Great experience from start to finish!",
      author: "Sneha shetty",
      location: "Udupi",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance text-foreground">Client Reviews</h2>
          <p className="text-muted-foreground text-lg">Hear from our satisfied customers</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-base italic mb-4">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-muted-foreground text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
