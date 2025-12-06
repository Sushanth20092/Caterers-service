import { Heart, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-center">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4">Address</h3>
            <p className="text-muted-foreground text-sm">
              Shivagiri moodu perampalli post kunjibettu udupi 576102.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Packages", "Menu", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
             <li className="space-y-1">
  <a
    href="tel:+919945035835"
    className="text-muted-foreground hover:text-primary transition-colors block"
  >
    +91 9945035835
  </a>

  <a
    href="tel:+919980262767"
    className="text-muted-foreground hover:text-primary transition-colors block"
  >
    +91 9980262767
  </a>
</li>
              <li>
                <a
                  href="mailto:shivagiricaterers@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  shivagiricaterers@gmail.com
                </a>
              </li>
           
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4 justify-center">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/shivagiri_caterers/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-lg flex items-center justify-center text-primary transition-all"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Shivagiri Caterers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}