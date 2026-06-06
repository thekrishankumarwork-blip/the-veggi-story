'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface MenuItem {
  name: string
  price: number
}

interface MenuCategory {
  name: string
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    name: 'Soups',
    items: [
      { name: 'Veg Manchow Soup', price: 149 },
      { name: 'Mix Veg Chimney Soup', price: 149 },
      { name: 'Sweet Corn Veg Soup', price: 149 },
      { name: 'Tomato Dhaniya Shorba', price: 149 },
    ],
  },
  {
    name: 'Starters',
    items: [
      { name: 'Hara Bhara Kabab', price: 219 },
      { name: 'Malai Paneer Tikka', price: 299 },
      { name: 'Achari Paneer Tikka', price: 309 },
      { name: 'Veggie Tandoori Platter', price: 479 },
    ],
  },
  {
    name: 'Chinese',
    items: [
      { name: 'Veg Fried Rice', price: 229 },
      { name: 'Veg Schezwan Fried Rice', price: 279 },
      { name: 'Crispy Corn', price: 299 },
      { name: 'Paneer Chilli', price: 299 },
      { name: 'Veg Hakka Noodles', price: 229 },
      { name: 'Veg Schezwan Noodles', price: 259 },
    ],
  },
  {
    name: 'Sizzlers',
    items: [
      { name: 'Paneer Steak Sizzler', price: 499 },
      { name: 'Italian Sizzler', price: 499 },
      { name: 'Oriental Sizzler', price: 499 },
    ],
  },
  {
    name: 'Indian Breads',
    items: [
      { name: 'Tandoori Roti', price: 29 },
      { name: 'Butter Roti', price: 34 },
      { name: 'Garlic Naan', price: 65 },
      { name: 'Cheese Naan', price: 70 },
      { name: 'Kulcha', price: 65 },
    ],
  },
  {
    name: 'Beverages',
    items: [
      { name: 'Fresh Lime Soda', price: 69 },
      { name: 'Cold Coffee', price: 139 },
      { name: 'Tea', price: 69 },
      { name: 'Hot Coffee', price: 129 },
    ],
  },
  {
    name: 'Milkshakes',
    items: [
      { name: 'Vanilla Milkshake', price: 149 },
      { name: 'Chocolate Milkshake', price: 149 },
      { name: 'Oreo Milkshake', price: 179 },
      { name: 'Dry Fruit Milkshake', price: 199 },
    ],
  },
]

export function Menu() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0)

  return (
    <section id="menu" className="section-padding bg-[#1a5f3f]">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-widest">
            Our Culinary Journey
          </span>
          <h2 className="heading-md mt-4">Complete Menu</h2>
          <p className="text-[#f5f1e8]/70 mt-4 max-w-2xl mx-auto">
            Explore our diverse collection of vegetarian dishes across multiple cuisines
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {menuData.map((category, index) => (
            <div
              key={category.name}
              className="border border-[#d4af37] border-opacity-30 rounded-lg overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() =>
                  setExpandedCategory(expandedCategory === index ? null : index)
                }
                className="w-full px-6 py-4 bg-[#0f3a25] hover:bg-[#164d33] transition-colors flex items-center justify-between group"
              >
                <span className="text-lg font-serif font-semibold text-[#d4af37]">
                  {category.name}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-[#d4af37] transition-transform duration-300 ${
                    expandedCategory === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedCategory === index && (
                <div className="bg-[#1a5f3f] px-6 py-4 space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-center pb-3 border-b border-[#d4af37] border-opacity-10 last:border-b-0"
                    >
                      <span className="text-[#f5f1e8] font-medium">{item.name}</span>
                      <span className="text-[#d4af37] font-semibold">₹{item.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Order Button */}
        <div className="text-center mt-12">
          <p className="text-[#f5f1e8]/70 mb-4">Ready to order?</p>
          <a
            href="https://wa.me/918003084668?text=Hi%20The%20Veggie%20Story,%20I%20would%20like%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Order Now on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
