// Cart State
let cart = JSON.parse(localStorage.getItem('orderplz_cart')) || [];

// DOM Elements
const cartItemsContainer = document.getElementById('cart-items');
const cartSubtotalElement = document.getElementById('cart-subtotal');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');

// Add item to cart
function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    
    updateCartUI();
    showNotification(`${name} added to cart`);
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    localStorage.setItem('orderplz_cart', JSON.stringify(cart));
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';
    let subtotal = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 1rem 0;">Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            totalItems += item.quantity;

            const cartItemHTML = `
                <div class="cart-item">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                    </div>
                    <div>
                        <span style="font-weight: 600; margin-right: 1rem;">$${itemTotal.toFixed(2)}</span>
                        <button onclick="removeFromCart('${item.id}')" style="background:none; border:none; color:var(--danger); cursor:pointer;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
                    </div>
                </div>
            `;
            cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
        });
    }

    if (cartSubtotalElement) cartSubtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    // Adding $2.00 fixed tax/fee for demonstration
    const total = subtotal > 0 ? subtotal + 2.00 : 0;
    if (cartTotalElement) cartTotalElement.textContent = `$${total.toFixed(2)}`;
    if (cartCountElement) cartCountElement.textContent = totalItems;
}

// Simple Toast Notification
function showNotification(message) {
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.backgroundColor = 'var(--success)';
    toast.style.color = 'white';
    toast.style.padding = '1rem 1.5rem';
    toast.style.borderRadius = 'var(--radius-md)';
    toast.style.boxShadow = 'var(--shadow-lg)';
    toast.style.zIndex = '1000';
    toast.style.fontWeight = '500';
    toast.style.animation = 'slideIn 0.3s ease-out';
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Initialize
document.addEventListener('DOMContentLoaded', updateCartUI);
