'use client'

import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918003084668?text=Hi%20The%20Veggie%20Story,%20I%20would%20like%20to%20place%20an%20order"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Chat with us on WhatsApp"
      title="Order via WhatsApp"
    >
      <MessageCircle size={32} className="fill-current" />
    </a>
  )
}
