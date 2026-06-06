'use client'

import { Heart } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f3a25] border-t border-[#d4af37] border-opacity-30">
      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Restaurant Info */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#d4af37] mb-4">
                The Veggie Story
              </h3>
              <p className="text-[#f5f1e8]/80 leading-relaxed mb-6">
                Premium vegetarian multicuisine restaurant in Pondicherry, crafting authentic and innovative dishes with the finest ingredients.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4af37] hover:text-[#e6c547] transition-colors text-sm font-medium"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-semibold text-[#f5f1e8] text-lg mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { href: '#about', label: 'About Us' },
                  { href: '#menu', label: 'Menu' },
                  { href: '#gallery', label: 'Gallery' },
                  { href: '#contact', label: 'Contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[#f5f1e8]/70 hover:text-[#d4af37] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-serif font-semibold text-[#f5f1e8] text-lg mb-6">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-[#f5f1e8]/70 text-sm uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+918003084668"
                    className="text-[#d4af37] hover:text-[#e6c547] transition-colors font-medium"
                  >
                    +91 8003084668
                  </a>
                </div>
                <div>
                  <p className="text-[#f5f1e8]/70 text-sm uppercase tracking-wide mb-1">
                    Address
                  </p>
                  <p className="text-[#f5f1e8]/80">
                    Auroville, Near Axis Bank<br />
                    Pondicherry, India
                  </p>
                </div>
                <div>
                  <p className="text-[#f5f1e8]/70 text-sm uppercase tracking-wide mb-1">
                    Hours
                  </p>
                  <p className="text-[#f5f1e8]/80">9:00 AM – 12:00 AM<br />
                  All Days Open</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#d4af37] border-opacity-20 pt-8">
            {/* Bottom Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-[#f5f1e8]/60 text-sm text-center sm:text-left">
                © {currentYear} The Veggie Story. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-[#f5f1e8]/60">
                <span>Made with</span>
                <Heart size={16} className="text-[#d4af37] fill-[#d4af37]" />
                <span>for vegetarian cuisine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
