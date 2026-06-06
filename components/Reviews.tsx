'use client'

import { Star } from 'lucide-react'

interface Review {
  name: string
  location: string
  rating: number
  text: string
}

const reviews: Review[] = [
  {
    name: 'Priya Sharma',
    location: 'Pondicherry',
    rating: 5,
    text: 'The Veggie Story is an absolute gem! The food quality is outstanding, and every dish is crafted with such care. Best vegetarian restaurant in Pondicherry!',
  },
  {
    name: 'Arjun Kumar',
    location: 'Bangalore',
    rating: 5,
    text: 'Visited during a family trip. The ambiance is so elegant, and the service is impeccable. The Rajasthani Thali was unforgettable!',
  },
  {
    name: 'Sneha Patel',
    location: 'Chennai',
    rating: 5,
    text: 'Pure vegetarian fine dining at its best! The fusion dishes are creative without compromising authenticity. Highly recommended!',
  },
  {
    name: 'Rajesh Nair',
    location: 'Auroville',
    rating: 5,
    text: 'Regular customer here. The consistency in quality and taste is remarkable. Every visit feels special at The Veggie Story.',
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-[#1a5f3f] border-t border-[#d4af37] border-opacity-20">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-widest">
            Guest Experiences
          </span>
          <h2 className="heading-md mt-4">Customer Reviews</h2>
          <p className="text-[#f5f1e8]/70 mt-4 max-w-2xl mx-auto">
            Hear what our delighted guests have to say about The Veggie Story
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#0f3a25] rounded-lg p-6 sm:p-8 border border-[#d4af37] border-opacity-20 hover:border-opacity-50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[#d4af37] text-[#d4af37]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#f5f1e8]/90 text-lg leading-relaxed mb-6 italic">
                &quot;{review.text}&quot;
              </p>

              {/* Reviewer Info */}
              <div className="border-t border-[#d4af37] border-opacity-20 pt-4">
                <p className="text-[#d4af37] font-semibold">{review.name}</p>
                <p className="text-[#f5f1e8]/70 text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-[#f5f1e8]/70 mb-4">Have you dined with us? Share your experience!</p>
          <a
            href="https://wa.me/918003084668?text=Hi%20The%20Veggie%20Story,%20I%20had%20a%20great%20experience!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block"
          >
            Share Your Review
          </a>
        </div>
      </div>
    </section>
  )
}
