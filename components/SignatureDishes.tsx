'use client'

import Image from 'next/image'

const signatureDishes = [
  {
    id: 1,
    name: 'Rajasthani Thali',
    image: '/images/rajasthani-thali.png',
    description: 'Traditional Rajasthani feast with dal, bajra roti, seasonal vegetables',
  },
  {
    id: 2,
    name: 'Chole Bhature',
    image: '/images/chole-bhature.png',
    description: 'Fluffy deep-fried bread served with spiced chickpea curry',
  },
  {
    id: 3,
    name: 'Veggie Tandoori Platter',
    image: '/images/veggie-tandoori-platter.png',
    description: 'Marinated vegetables and paneer grilled to perfection',
  },
  {
    id: 4,
    name: 'Paneer Tikka',
    image: '/images/paneer-tikka.png',
    description: 'Tender paneer pieces charred in clay oven with aromatic spices',
  },
  {
    id: 5,
    name: 'Paneer Butter Masala',
    image: '/images/paneer-butter-masala.png',
    description: 'Creamy tomato-based curry with soft paneer pieces',
  },
  {
    id: 6,
    name: 'Sunday Special Thali',
    image: '/images/sunday-special-thali.png',
    description: 'Abundant vegetarian feast with multiple curries and breads',
  },
]

export function SignatureDishes() {
  return (
    <section id="signature-dishes" className="section-padding bg-[#0f0f0f] border-t border-[#d4af37] border-opacity-20">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-widest">
            Chef&apos;s Specials
          </span>
          <h2 className="heading-md mt-4">Signature Dishes</h2>
          <p className="text-[#f5f1e8]/70 mt-4 max-w-2xl mx-auto">
            Experience our most beloved creations, crafted with premium ingredients and culinary expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish, index) => (
            <div
              key={dish.id}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-64 sm:h-72">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a5f3f] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#d4af37] mb-2">
                {dish.name}
              </h3>
              <p className="text-[#f5f1e8]/80">{dish.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
