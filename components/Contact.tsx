'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#0f0f0f] border-t border-[#d4af37] border-opacity-20">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="heading-md mt-4">Contact & Reservations</h2>
          <p className="text-[#f5f1e8]/70 mt-4 max-w-2xl mx-auto">
            Reach out to us for reservations, queries, or to share your feedback
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-[#1a5f3f] p-6 sm:p-8 rounded-lg border border-[#d4af37] border-opacity-20 hover:border-opacity-50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#d4af37] bg-opacity-20 p-4 rounded-lg">
                  <Phone className="text-[#d4af37]" size={28} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-[#f5f1e8] text-lg mb-2">
                    Phone & WhatsApp
                  </h3>
                  <a
                    href="tel:+918003084668"
                    className="text-[#d4af37] hover:text-[#e6c547] transition-colors text-lg font-medium"
                  >
                    +91 8003084668
                  </a>
                  <p className="text-[#f5f1e8]/70 mt-1">Available 9:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a5f3f] p-6 sm:p-8 rounded-lg border border-[#d4af37] border-opacity-20 hover:border-opacity-50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#d4af37] bg-opacity-20 p-4 rounded-lg">
                  <MapPin className="text-[#d4af37]" size={28} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-[#f5f1e8] text-lg mb-2">
                    Location
                  </h3>
                  <p className="text-[#f5f1e8]/90 leading-relaxed">
                    Auroville<br />
                    Near Axis Bank<br />
                    Pondicherry, India
                  </p>
                  <a
                    href="https://maps.app.goo.gl/pWMd7zbwcUsEnsQGA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d4af37] hover:text-[#e6c547] transition-colors mt-3 inline-block font-medium"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#1a5f3f] p-6 sm:p-8 rounded-lg border border-[#d4af37] border-opacity-20 hover:border-opacity-50 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#d4af37] bg-opacity-20 p-4 rounded-lg">
                  <Mail className="text-[#d4af37]" size={28} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-[#f5f1e8] text-lg mb-2">
                    Hours
                  </h3>
                  <p className="text-[#f5f1e8]/90 font-semibold text-lg">9:00 AM – 12:00 AM</p>
                  <p className="text-[#f5f1e8]/70 mt-1">Open 7 days a week</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-[#1a5f3f] p-6 sm:p-8 rounded-lg border border-[#d4af37] border-opacity-20 animate-fade-in">
            <h3 className="font-serif font-semibold text-[#f5f1e8] text-xl mb-6">
              Reserve a Table
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-[#f5f1e8]/80 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#0f3a25] border border-[#d4af37] border-opacity-30 rounded-lg text-[#f5f1e8] focus:outline-none focus:border-[#d4af37] focus:border-opacity-100 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-[#f5f1e8]/80 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-[#0f3a25] border border-[#d4af37] border-opacity-30 rounded-lg text-[#f5f1e8] focus:outline-none focus:border-[#d4af37] focus:border-opacity-100 transition-colors"
                  placeholder="+91 xxxxxxxxxx"
                />
              </div>

              <div>
                <label className="block text-[#f5f1e8]/80 font-medium mb-2">
                  Number of Guests
                </label>
                <select className="w-full px-4 py-2 bg-[#0f3a25] border border-[#d4af37] border-opacity-30 rounded-lg text-[#f5f1e8] focus:outline-none focus:border-[#d4af37] focus:border-opacity-100 transition-colors">
                  <option>Select number of guests</option>
                  <option>1-2</option>
                  <option>3-4</option>
                  <option>5-6</option>
                  <option>7+</option>
                </select>
              </div>

              <div>
                <label className="block text-[#f5f1e8]/80 font-medium mb-2">
                  Preferred Date & Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-2 bg-[#0f3a25] border border-[#d4af37] border-opacity-30 rounded-lg text-[#f5f1e8] focus:outline-none focus:border-[#d4af37] focus:border-opacity-100 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#f5f1e8]/80 font-medium mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 bg-[#0f3a25] border border-[#d4af37] border-opacity-30 rounded-lg text-[#f5f1e8] focus:outline-none focus:border-[#d4af37] focus:border-opacity-100 transition-colors resize-none"
                  placeholder="Any special requests or dietary preferences..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Reservation Request
              </button>

              <p className="text-[#f5f1e8]/60 text-sm text-center">
                Or contact us directly on WhatsApp for instant confirmation
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
