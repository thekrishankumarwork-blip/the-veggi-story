'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

const galleryImages = [
  { src: '/images/rajasthani-thali.png', alt: 'Rajasthani Thali', category: 'Food' },
  { src: '/images/chole-bhature.png', alt: 'Chole Bhature', category: 'Food' },
  { src: '/images/paneer-tikka.png', alt: 'Paneer Tikka', category: 'Food' },
  { src: '/images/paneer-butter-masala.png', alt: 'Paneer Butter Masala', category: 'Food' },
  { src: '/images/veggie-tandoori-platter.png', alt: 'Veggie Tandoori Platter', category: 'Food' },
  { src: '/images/sunday-special-thali.png', alt: 'Sunday Special Thali', category: 'Food' },
  { src: '/images/restaurant-interior.png', alt: 'Restaurant Interior', category: 'Interior' },
  { src: '/images/family-dining.png', alt: 'Family Dining', category: 'Ambiance' },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="section-padding bg-[#0f0f0f] border-t border-[#d4af37] border-opacity-20">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-widest">
            Visual Journey
          </span>
          <h2 className="heading-md mt-4">Photo Gallery</h2>
          <p className="text-[#f5f1e8]/70 mt-4 max-w-2xl mx-auto">
            Discover the beauty of our cuisine and dining experience
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group animate-fade-in"
              onClick={() => setSelectedImage(image.src)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a5f3f] via-[#1a5f3f]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-[#f5f1e8] font-semibold">{image.alt}</p>
                <p className="text-[#d4af37] text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-96 sm:h-screen sm:max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-[#f5f1e8] hover:text-[#d4af37] transition-colors"
            >
              <X size={32} />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
