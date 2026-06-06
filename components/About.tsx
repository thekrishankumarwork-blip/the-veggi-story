'use client'

import { MapPin, Clock, Phone } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="section-padding bg-[#1a5f3f]">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-widest">
              About Us
            </span>
            <h2 className="heading-md mt-4 mb-6">Our Story</h2>
            <p className="text-[#f5f1e8]/90 text-lg leading-relaxed mb-6">
              The Veggie Story is a premium vegetarian restaurant dedicated to bringing you the finest multicuisine experience. With a passion for authentic Indian flavors, modern Chinese cuisine, and innovative fusion dishes, we celebrate the incredible variety of vegetarian cooking.
            </p>
            <p className="text-[#f5f1e8]/90 text-lg leading-relaxed mb-8">
              Every dish is crafted with premium vegetarian ingredients, traditional cooking techniques, and a commitment to quality. Whether you&apos;re a vegetarian by choice or by preference, we believe exceptional food speaks for itself.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#d4af37] bg-opacity-20 p-3 rounded-lg">
                  <MapPin className="text-[#d4af37]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#f5f1e8] mb-1">Location</h3>
                  <p className="text-[#f5f1e8]/80">Auroville, Near Axis Bank, Pondicherry</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#d4af37] bg-opacity-20 p-3 rounded-lg">
                  <Clock className="text-[#d4af37]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#f5f1e8] mb-1">Opening Hours</h3>
                  <p className="text-[#f5f1e8]/80">9:00 AM – 12:00 AM (Midnight)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#d4af37] bg-opacity-20 p-3 rounded-lg">
                  <Phone className="text-[#d4af37]" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#f5f1e8] mb-1">Contact</h3>
                  <a
                    href="tel:+918003084668"
                    className="text-[#d4af37] hover:text-[#e6c547] transition-colors"
                  >
                    +91 8003084668
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-lg overflow-hidden shadow-2xl h-96 animate-fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1549999999995!2d79.80958!3d12.0296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f718d5e5e5e5%3A0x5e5e5e5e5e5e5e5e!2sAuroville%2C%20Pondicherry!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
