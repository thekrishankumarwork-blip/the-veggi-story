// Menu Data
const menuItems = [
  { id: 1, name: 'Veggie Tandoori Platter', price: 479 },
  { id: 2, name: 'Sunday Special Thali', price: 279 },
  { id: 3, name: 'Paneer Butter Masala', price: 249 },
  { id: 4, name: 'Chole Bhature', price: 189 },
  { id: 5, name: 'Vegetable Biryani', price: 229 },
  { id: 6, name: 'Masala Dosa', price: 159 },
  { id: 7, name: 'Dal Makhani', price: 199 },
  { id: 8, name: 'Aloo Gobi', price: 139 },
  { id: 9, name: 'Vegetable Samosa (Pack of 4)', price: 99 },
];

// WhatsApp Number
const whatsappNumber = '8003084668';

// Application State
let cart = {};
let orderIdCounter = 0;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  renderMenu();
  initializeOrderCounter();
});

// Initialize Order Counter based on date
function initializeOrderCounter() {
  const today = new Date();
  const dateKey = formatDate(today);
  const storedCount = localStorage.getItem(`order_count_${dateKey}`);
  orderIdCounter = storedCount ? parseInt(storedCount) + 1 : 1;
}

// Format date as YYYYMMDD
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

// Generate Unique Order ID
function generateOrderId() {
  const today = new Date();
  const dateStr = formatDate(today);
  const orderId = String(orderIdCounter).padStart(3, '0');
  return `TVS-${dateStr}-${orderId}`;
}

// Render Menu Items
function renderMenu() {
  const menuGrid = document.getElementById('menuGrid');
  menuGrid.innerHTML = '';
  
  menuItems.forEach(item => {
    const cartQty = cart[item.id]?.quantity || 0;
    
    const itemCard = document.createElement('div');
    itemCard.className = 'menu-item';
    itemCard.innerHTML = `
      <div class="item-header">
        <div class="item-name">${item.name}</div>
        <div class="item-price">₹${item.price}</div>
      </div>
      <div class="item-body">
        <div class="quantity-selector">
          <button class="qty-btn" onclick="decreaseQuantity(${item.id})">−</button>
          <div class="qty-display">${cartQty}</div>
          <button class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
        </div>
        <button class="add-to-cart-btn ${cartQty > 0 ? 'added' : ''}" onclick="addToCart(${item.id}, '${item.name}', ${item.price})">
          ${cartQty > 0 ? '✓ In Cart' : 'Add to Cart'}
        </button>
      </div>
    `;
    
    menuGrid.appendChild(itemCard);
  });
}

// Increase Quantity
function increaseQuantity(itemId) {
  if (!cart[itemId]) {
    const item = menuItems.find(m => m.id === itemId);
    cart[itemId] = { name: item.name, price: item.price, quantity: 0 };
  }
  cart[itemId].quantity++;
  renderMenu();
  updateCart();
}

// Decrease Quantity
function decreaseQuantity(itemId) {
  if (cart[itemId] && cart[itemId].quantity > 0) {
    cart[itemId].quantity--;
    if (cart[itemId].quantity === 0) {
      delete cart[itemId];
    }
    renderMenu();
    updateCart();
  }
}

// Add to Cart
function addToCart(itemId, itemName, price) {
  if (!cart[itemId]) {
    cart[itemId] = { name: itemName, price: price, quantity: 0 };
  }
  cart[itemId].quantity++;
  renderMenu();
  updateCart();
}

// Update Cart Display
function updateCart() {
  const cartItemsContainer = document.getElementById('cartItems');
  const hasItems = Object.keys(cart).length > 0;
  
  if (!hasItems) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">No items selected yet</p>';
    updateCartSummary(0);
    return;
  }
  
  cartItemsContainer.innerHTML = '';
  let subtotal = 0;
  
  Object.entries(cart).forEach(([itemId, item]) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-details">₹${item.price} × ${item.quantity} = ₹${itemTotal}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${itemId})">✕</button>
    `;
    cartItemsContainer.appendChild(cartItem);
  });
  
  updateCartSummary(subtotal);
}

// Remove from Cart
function removeFromCart(itemId) {
  delete cart[itemId];
  renderMenu();
  updateCart();
}

// Update Cart Summary
function updateCartSummary(subtotal) {
  const taxRate = 0.05;
  const tax = Math.round(subtotal * taxRate);
  const total = subtotal + tax;
  
  document.getElementById('subtotal').textContent = `₹${subtotal}`;
  document.getElementById('tax').textContent = `₹${tax}`;
  document.getElementById('total').textContent = `₹${total}`;
  
  const placeOrderBtn = document.getElementById('placeOrderBtn');
  placeOrderBtn.disabled = Object.keys(cart).length === 0;
}

// Validate Customer Details
function validateDetails() {
  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('mobileNumber').value.trim();
  const orderType = document.querySelector('input[name="orderType"]:checked').value;
  const address = document.getElementById('deliveryAddress').value.trim();
  
  if (!name) {
    alert('Please enter your name');
    return null;
  }
  
  if (!phone || phone.length < 10) {
    alert('Please enter a valid mobile number');
    return null;
  }
  
  if (orderType === 'Delivery' && !address) {
    alert('Please enter delivery address for delivery orders');
    return null;
  }
  
  if (Object.keys(cart).length === 0) {
    alert('Please add items to your cart');
    return null;
  }
  
  return {
    name: name,
    phone: phone,
    address: address,
    orderType: orderType
  };
}

// Build WhatsApp Message
function buildWhatsAppMessage(details, orderId) {
  const subtotal = calculateSubtotal();
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;
  
  let itemsList = '';
  Object.entries(cart).forEach(([itemId, item]) => {
    const itemTotal = item.price * item.quantity;
    itemsList += `${item.name} (₹${item.price} × ${item.quantity} = ₹${itemTotal})\n`;
  });
  
  const message = `🍽️ *The Veggie Story Order*

*Order ID:* ${orderId}

*Customer:*
${details.name}

*Mobile:*
${details.phone}

*Order Type:*
${details.orderType}

${details.orderType === 'Delivery' ? `*Address:*
${details.address}

` : ''}*Items:*
${itemsList}

*Subtotal:* ₹${subtotal}
*Tax (5%):* ₹${tax}
*Total:* ₹${total}`;
  
  return message;
}

// Calculate Subtotal
function calculateSubtotal() {
  let subtotal = 0;
  Object.entries(cart).forEach(([itemId, item]) => {
    subtotal += item.price * item.quantity;
  });
  return subtotal;
}

// Place Order
function placeOrder() {
  const details = validateDetails();
  
  if (!details) {
    return;
  }
  
  const orderId = generateOrderId();
  const message = buildWhatsAppMessage(details, orderId);
  
  // Update order counter in localStorage
  const today = new Date();
  const dateKey = formatDate(today);
  localStorage.setItem(`order_count_${dateKey}`, orderIdCounter);
  
  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  // Show Success Screen
  showSuccessScreen(orderId);
  
  // Open WhatsApp
  setTimeout(() => {
    // Check if running in iframe (v0 preview)
    if (window.self !== window.top) {
      window.open(whatsappUrl, '_blank');
    } else {
      window.location.href = whatsappUrl;
    }
  }, 500);
}

// Show Success Screen
function showSuccessScreen(orderId) {
  document.getElementById('successOrderId').textContent = orderId;
  document.getElementById('successScreen').classList.remove('hidden');
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Reset Order
function resetOrder() {
  // Hide success screen
  document.getElementById('successScreen').classList.add('hidden');
  
  // Clear form and cart
  document.getElementById('customerName').value = '';
  document.getElementById('mobileNumber').value = '';
  document.getElementById('deliveryAddress').value = '';
  document.querySelector('input[name="orderType"][value="Dine In"]').checked = true;
  
  // Clear cart
  cart = {};
  renderMenu();
  updateCart();
  
  // Increment order counter for next order
  orderIdCounter++;
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
