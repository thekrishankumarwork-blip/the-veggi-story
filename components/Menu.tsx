'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { ChevronDown, Plus, Minus, X } from 'lucide-react'

interface MenuItem {
  id: string
  name: string
  price: number
  image?: string
}

interface MenuCategory {
  name: string
  items: MenuItem[]
}

interface CartItem extends MenuItem {
  quantity: number
}

interface OrderFormData {
  customerName: string
  mobileNumber: string
  deliveryAddress: string
  orderType: 'dine-in' | 'delivery'
}

const menuData: MenuCategory[] = [
  {
    name: 'Soups',
    items: [
      { id: 'soup-1', name: 'Veg Manchow Soup', price: 149 },
      { id: 'soup-2', name: 'Mix Veg Chimney Soup', price: 149 },
      { id: 'soup-3', name: 'Sweet Corn Veg Soup', price: 149 },
      { id: 'soup-4', name: 'Tomato Dhaniya Shorba', price: 149 },
    ],
  },
  {
    name: 'Starters',
    items: [
      { id: 'start-1', name: 'Hara Bhara Kabab', price: 219 },
      { id: 'start-2', name: 'Malai Paneer Tikka', price: 299, image: '/dishes/paneer-tikka.png' },
      { id: 'start-3', name: 'Achari Paneer Tikka', price: 309 },
      { id: 'start-4', name: 'Veggie Tandoori Platter', price: 479, image: '/dishes/veggie-tandoori-platter.png' },
    ],
  },
  {
    name: 'Chinese',
    items: [
      { id: 'chin-1', name: 'Veg Fried Rice', price: 229 },
      { id: 'chin-2', name: 'Veg Schezwan Fried Rice', price: 279 },
      { id: 'chin-3', name: 'Crispy Corn', price: 299 },
      { id: 'chin-4', name: 'Paneer Chilli', price: 299 },
      { id: 'chin-5', name: 'Veg Hakka Noodles', price: 229, image: '/dishes/veg-hakka-noodles.png' },
      { id: 'chin-6', name: 'Veg Schezwan Noodles', price: 259 },
    ],
  },
  {
    name: 'Sizzlers',
    items: [
      { id: 'sizz-1', name: 'Paneer Steak Sizzler', price: 499 },
      { id: 'sizz-2', name: 'Italian Sizzler', price: 499 },
      { id: 'sizz-3', name: 'Oriental Sizzler', price: 499 },
    ],
  },
  {
    name: 'Indian Breads',
    items: [
      { id: 'bread-1', name: 'Tandoori Roti', price: 29 },
      { id: 'bread-2', name: 'Butter Roti', price: 34 },
      { id: 'bread-3', name: 'Garlic Naan', price: 65 },
      { id: 'bread-4', name: 'Cheese Naan', price: 70 },
      { id: 'bread-5', name: 'Kulcha', price: 65 },
    ],
  },
  {
    name: 'Beverages',
    items: [
      { id: 'bev-1', name: 'Fresh Lime Soda', price: 69 },
      { id: 'bev-2', name: 'Cold Coffee', price: 139, image: '/dishes/cold-coffee.png' },
      { id: 'bev-3', name: 'Tea', price: 69 },
      { id: 'bev-4', name: 'Hot Coffee', price: 129 },
    ],
  },
  {
    name: 'Milkshakes',
    items: [
      { id: 'milk-1', name: 'Vanilla Milkshake', price: 149, image: '/dishes/milkshake.png' },
      { id: 'milk-2', name: 'Chocolate Milkshake', price: 149, image: '/dishes/milkshake.png' },
      { id: 'milk-3', name: 'Oreo Milkshake', price: 179, image: '/dishes/milkshake.png' },
      { id: 'milk-4', name: 'Dry Fruit Milkshake', price: 199, image: '/dishes/milkshake.png' },
    ],
  },
]

export function Menu() {
  const searchParams = useSearchParams()
  const tableParam = searchParams.get('table')
  const tableNumber = tableParam ? parseInt(tableParam, 10) : null
  const isTableOrder = tableNumber && tableNumber >= 1 && tableNumber <= 20

  const [expandedCategory, setExpandedCategory] = useState<number | null>(0)
  const [cart, setCart] = useState<CartItem[]>([])
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [orderSuccess, setOrderSuccess] = useState(false)
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    mobileNumber: '',
    deliveryAddress: '',
    orderType: isTableOrder ? 'dine-in' : 'delivery',
  })

  useEffect(() => {
    if (isTableOrder) {
      setFormData((prev) => ({
        ...prev,
        orderType: 'dine-in',
      }))
    }
  }, [isTableOrder])

  const generateOrderId = () => {
    const today = new Date()
    const dateStr = today.toISOString().split('T')[0].replace(/-/g, '')
    const randomNum = String(Math.floor(Math.random() * 1000)).padStart(3, '0')
    if (isTableOrder) {
      return `TVS-${dateStr}-T${tableNumber}-${randomNum}`
    }
    return `TVS-${dateStr}-${randomNum}`
  }

  const addToCart = (item: MenuItem) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id)

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
    } else {
      setCart(
        cart.map((item) =>
          item.id === itemId ? { ...item, quantity } : item
        )
      )
    }
  }

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter((item) => item.id !== itemId))
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const calculateGST = () => {
    const subtotal = calculateTotal()
    return Math.round(subtotal * 0.05 * 100) / 100 // 5% GST
  }

  const calculateGrandTotal = () => {
    return Math.round((calculateTotal() + calculateGST()) * 100) / 100
  }

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePlaceOrder = () => {
    if (
      !formData.customerName ||
      !formData.mobileNumber ||
      (formData.orderType === 'delivery' && !formData.deliveryAddress) ||
      cart.length === 0
    ) {
      alert('Please fill in all required fields and add items to cart')
      return
    }

    const orderId = generateOrderId()
    const subtotal = calculateTotal()
    const gst = calculateGST()
    const grandTotal = calculateGrandTotal()
    const itemsList = cart
      .map((item) => `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`)
      .join('\n')

    let locationInfo = ''
    if (isTableOrder) {
      locationInfo = `Table: ${tableNumber}`
    } else {
      locationInfo = `Delivery Address:\n${formData.deliveryAddress}`
    }

    const whatsappMessage = encodeURIComponent(
      `🍽️ The Veggie Story Order\n\nOrder ID: ${orderId}\n\nCustomer:\n${formData.customerName}\n\nMobile:\n${formData.mobileNumber}\n\nOrder Type:\n${formData.orderType === 'dine-in' ? 'DINE IN' : 'DELIVERY'}\n\n${locationInfo}\n\nItems Ordered:\n${itemsList}\n\nSubtotal: ₹${subtotal}\nGST (5%): ₹${gst}\n\nGrand Total: ₹${grandTotal}`
    )

    const whatsappUrl = `https://wa.me/8003084668?text=${whatsappMessage}`

    // Open WhatsApp
    if (window.self !== window.top) {
      window.open(whatsappUrl, '_blank')
    } else {
      window.location.href = whatsappUrl
    }

    // Show success screen
    setOrderSuccess(true)
    setTimeout(() => {
      resetOrder()
    }, 5000)
  }

  const resetOrder = () => {
    setCart([])
    setOrderSuccess(false)
    setShowOrderForm(false)
    setFormData({
      customerName: '',
      mobileNumber: '',
      deliveryAddress: '',
      orderType: isTableOrder ? 'dine-in' : 'delivery',
    })
  }

  if (orderSuccess) {
    return (
      <section id="menu" className="section-padding bg-[#1a5f3f] min-h-screen flex items-center">
        <div className="container-max w-full">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8 text-6xl">✓</div>
            <h2 className="heading-md mb-4 text-[#d4af37]">Order Placed Successfully!</h2>
            {isTableOrder && (
              <p className="text-[#d4af37] mb-4 text-lg font-semibold">
                🪑 Ordering from Table {tableNumber}
              </p>
            )}
            <p className="text-[#f5f1e8]/80 mb-8 text-lg">
              Thank you for ordering from The Veggie Story.
            </p>
            <p className="text-[#f5f1e8]/70 mb-8">
              We&apos;ve sent your order details via WhatsApp. Our team will contact you soon to confirm your order.
            </p>
            <button
              onClick={resetOrder}
              className="btn-primary"
            >
              Place Another Order
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="menu" className="section-padding bg-[#1a5f3f]">
      <div className="container-max">
        {isTableOrder && (
          <div className="mb-8 p-4 bg-[#d4af37] bg-opacity-20 border border-[#d4af37] rounded-lg text-center">
            <p className="text-[#d4af37] text-lg font-semibold">
              🪑 Ordering from Table {tableNumber}
            </p>
          </div>
        )}
        
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-semibold text-sm uppercase tracking-widest">
            Our Culinary Journey
          </span>
          <h2 className="heading-md mt-4">Order Now</h2>
          <p className="text-[#f5f1e8]/70 mt-4 max-w-2xl mx-auto">
            Select your favorite dishes and place your order directly from here
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            <div className="max-w-3xl space-y-4">
              {menuData.map((category, index) => (
                <div
                  key={category.name}
                  className="border border-[#d4af37] border-opacity-30 rounded-lg overflow-hidden"
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
                    <div className="bg-[#1a5f3f] px-6 py-4 space-y-4">
                      {category.items.map((item) => (
                        <div
                          key={item.id}
                          className="p-4 border border-[#d4af37] border-opacity-20 rounded-lg hover:border-opacity-40 transition-all"
                        >
                          {item.image && (
                            <div className="relative w-full h-40 mb-3 rounded-lg overflow-hidden bg-[#0f3a25]">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="text-[#f5f1e8] font-semibold">{item.name}</h4>
                              <p className="text-[#d4af37] font-semibold mt-1">₹{item.price}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => addToCart(item)}
                            className="w-full py-2 bg-[#d4af37] hover:bg-[#e6c547] text-[#1a5f3f] font-semibold rounded transition-colors"
                          >
                            Add to Cart
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-[#d4af37] border-opacity-30 rounded-lg overflow-hidden bg-[#0f3a25]">
              <div className="px-6 py-4 bg-[#0f3a25] border-b border-[#d4af37] border-opacity-20">
                <h3 className="text-lg font-serif font-semibold text-[#d4af37]">
                  Shopping Cart ({cart.length})
                </h3>
              </div>

              {cart.length === 0 ? (
                <div className="p-6 text-center text-[#f5f1e8]/60">
                  Your cart is empty. Start by selecting dishes from the menu.
                </div>
              ) : (
                <>
                  <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-[#1a5f3f] rounded border border-[#d4af37] border-opacity-10"
                      >
                        <div className="flex-1">
                          <p className="text-[#f5f1e8] text-sm font-medium">{item.name}</p>
                          <p className="text-[#d4af37] text-xs mt-1">₹{item.price}</p>
                        </div>
                        <div className="flex items-center gap-2 ml-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="p-1 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a5f3f] rounded transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center text-[#f5f1e8] font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="p-1 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a5f3f] rounded transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 text-red-400 hover:bg-red-400 hover:text-[#1a5f3f] rounded transition-colors ml-1"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="px-6 py-4 border-t border-[#d4af37] border-opacity-20 bg-[#164d33]">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center text-[#f5f1e8]/80">
                        <span>Subtotal:</span>
                        <span>₹{calculateTotal()}</span>
                      </div>
                      <div className="flex justify-between items-center text-[#f5f1e8]/80 text-sm">
                        <span>GST (5%):</span>
                        <span>₹{calculateGST()}</span>
                      </div>
                      <div className="border-t border-[#d4af37] border-opacity-20 pt-2 flex justify-between items-center">
                        <span className="text-[#f5f1e8]">Grand Total:</span>
                        <span className="text-2xl font-serif font-bold text-[#d4af37]">
                          ₹{calculateGrandTotal()}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowOrderForm(true)}
                      className="w-full btn-primary"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Order Form Modal */}
        {showOrderForm && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-[#0f3a25] rounded-lg max-w-md w-full border border-[#d4af37] border-opacity-30">
              <div className="px-6 py-4 border-b border-[#d4af37] border-opacity-20 flex justify-between items-center">
                <h3 className="text-lg font-serif font-semibold text-[#d4af37]">
                  Customer Details
                </h3>
                <button
                  onClick={() => setShowOrderForm(false)}
                  className="text-[#f5f1e8]/60 hover:text-[#f5f1e8]"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-[#d4af37] font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 bg-[#1a5f3f] border border-[#d4af37] border-opacity-30 text-[#f5f1e8] rounded focus:outline-none focus:border-[#d4af37]"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-[#d4af37] font-semibold mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 bg-[#1a5f3f] border border-[#d4af37] border-opacity-30 text-[#f5f1e8] rounded focus:outline-none focus:border-[#d4af37]"
                    placeholder="10-digit mobile number"
                  />
                </div>

                <div>
                  <label className="block text-[#d4af37] font-semibold mb-2">
                    Order Type *
                  </label>
                  <select
                    name="orderType"
                    value={formData.orderType}
                    onChange={handleFormChange}
                    disabled={isTableOrder}
                    className="w-full px-4 py-2 bg-[#1a5f3f] border border-[#d4af37] border-opacity-30 text-[#f5f1e8] rounded focus:outline-none focus:border-[#d4af37] disabled:opacity-60"
                  >
                    <option value="dine-in">Dine In</option>
                    <option value="delivery">Delivery</option>
                  </select>
                  {isTableOrder && (
                    <p className="text-[#d4af37] text-xs mt-2">Automatically set for table order</p>
                  )}
                </div>

                {formData.orderType === 'delivery' && (
                  <div>
                    <label className="block text-[#d4af37] font-semibold mb-2">
                      Delivery Address *
                    </label>
                    <input
                      type="text"
                      name="deliveryAddress"
                      value={formData.deliveryAddress}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 bg-[#1a5f3f] border border-[#d4af37] border-opacity-30 text-[#f5f1e8] rounded focus:outline-none focus:border-[#d4af37]"
                      placeholder="Enter delivery address"
                    />
                  </div>
                )}

                <div className="pt-4 flex gap-3">
                  <button
                    onClick={() => setShowOrderForm(false)}
                    className="flex-1 px-4 py-2 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a5f3f] font-semibold rounded transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="flex-1 btn-primary"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
