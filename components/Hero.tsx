'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.png"
          alt="The Veggie Story Restaurant"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a5f3f] via-[#1a5f3f]/60 to-[#0f0f0f] z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-[#d4af37] bg-opacity-20 border border-[#d4af37] rounded-full text-[#d4af37] text-sm font-semibold">
            Welcome to Premium Dining
          </span>
        </div>

        <h1 className="heading-lg mb-4 text-[#d4af37]">The Veggie Story</h1>
        <p className="text-xl sm:text-2xl text-[#f5f1e8] mb-4 font-light">
          Pure Vegetarian Multicuisine Excellence
        </p>
        <p className="text-base sm:text-lg text-[#f5f1e8]/80 mb-8 max-w-2xl mx-auto">
          Experience the finest vegetarian cuisine crafted with premium ingredients and traditional recipes
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#menu" className="btn-primary">
            Explore Menu
          </a>
          <a
            href="https://wa.me/918003084668?text=Hi%20The%20Veggie%20Story,%20I%20would%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Order via WhatsApp
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-[#d4af37] text-2xl">↓</div>
        </div>
      </div>
    </section>
  )
}
