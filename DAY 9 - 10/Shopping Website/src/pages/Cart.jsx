import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../hooks/useShop';
import { Trash2, ShoppingBag, Plus, Minus, CreditCard, Sparkles, CheckCircle } from 'lucide-react';
import './Cart.css';

export const Cart = () => {
  const { 
    cart, 
    updateCartQuantity, 
    removeFromCart, 
    cartSubtotal, 
    checkout,
    user
  } = useShop();

  const navigate = useNavigate();

  // --- States ---
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [placedOrderId, setPlacedOrderId] = useState('');

  // --- Calculations ---
  // Shipping: free over $50, otherwise $9.99
  const shippingCost = cartSubtotal >= 50 || cartSubtotal === 0 ? 0 : 9.99;
  
  // Promo Discount
  const discountAmount = cartSubtotal * (discountPercent / 100);
  
  // Tax (8% of subtotal after discount)
  const taxAmount = (cartSubtotal - discountAmount) * 0.08;
  
  // Total
  const cartTotal = cartSubtotal - discountAmount + shippingCost + taxAmount;

  // Apply Coupon
  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    if (promoCode.trim().toUpperCase() === 'AURAFIRST15') {
      setDiscountPercent(15);
      setPromoApplied(true);
    } else {
      setPromoError('Invalid coupon code. Try "AURAFIRST15".');
    }
  };

  // Perform Checkout
  const handleCheckout = () => {
    if (!user) {
      // Redirect to login page, saving cart
      navigate('/login?redirect=cart');
      return;
    }

    const res = checkout();
    if (res.success) {
      setPlacedOrderId(res.orderId);
      setCheckoutSuccess(true);
      window.scrollTo(0, 0);
    }
  };

  // Success UI
  if (checkoutSuccess) {
    return (
      <div className="cart-page container">
        <div className="checkout-success-card glass-card">
          <CheckCircle size={64} className="success-icon" />
          <h1>Order Confirmed!</h1>
          <p className="success-tag">Thank you for your purchase, {user?.name}.</p>
          <div className="success-details glass">
            <p>Order ID: <strong>{placedOrderId}</strong></p>
            <p>Estimated Delivery: <strong>3-5 Business Days</strong></p>
            <p>Total Charged: <strong>${cartTotal.toFixed(2)}</strong></p>
          </div>
          <p className="success-check-profile">You can track your order status in your user profile.</p>
          <div className="success-actions">
            <Link to="/profile" className="btn btn-outline">View Order History</Link>
            <Link to="/products" className="btn btn-primary">Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      {/* Title */}
      <div className="cart-header text-left">
        <h1 className="cart-title">Your Cart</h1>
        <p className="cart-subtitle">Review items and checkout</p>
      </div>

      {cart.length === 0 ? (
        /* Empty Cart State */
        <div className="empty-cart-card glass-card">
          <ShoppingBag size={56} className="empty-cart-icon" />
          <h3>Your shopping cart is empty</h3>
          <p>Explore our premium collections and add items to your cart to begin shopping.</p>
          <Link to="/products" className="btn btn-primary btn-lg">Browse Products</Link>
        </div>
      ) : (
        /* Grid Layout */
        <div className="cart-layout-grid">
          {/* Left Column: Cart Items list */}
          <div className="cart-items-column">
            {cart.map((item, idx) => (
              <div key={`${item.product.id}-${idx}`} className="cart-item-row glass-card">
                {/* Product Image */}
                <div className="cart-item-img-container">
                  <img src={item.product.image} alt={item.product.name} />
                </div>

                {/* Details */}
                <div className="cart-item-details text-left">
                  <span className="cart-item-category">{item.product.category}</span>
                  <Link to={`/products/${item.product.id}`} className="cart-item-title-link">
                    <h3 className="cart-item-title">{item.product.name}</h3>
                  </Link>
                  <div className="cart-item-price-unit">${item.product.price.toFixed(2)}</div>
                </div>

                {/* Quantity Controls */}
                <div className="cart-item-qty">
                  <button 
                    onClick={() => updateCartQuantity(item.product.id, item.quantity - 1, item.options)}
                    className="qty-adjust-btn"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="qty-count">{item.quantity}</span>
                  <button 
                    onClick={() => updateCartQuantity(item.product.id, item.quantity + 1, item.options)}
                    disabled={item.quantity >= item.product.stock}
                    className="qty-adjust-btn"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                {/* Subtotal & Delete */}
                <div className="cart-item-subtotal-action">
                  <span className="item-total-price">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                  
                  <button 
                    onClick={() => removeFromCart(item.product.id, item.options)}
                    className="cart-item-remove-btn"
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Checkout Summary panel */}
          <div className="cart-summary-column">
            {/* Promo Code Card */}
            <div className="cart-summary-panel glass-card promo-panel">
              <h4 className="summary-title"><Sparkles size={16} /> Apply Coupon</h4>
              <form onSubmit={handleApplyPromo} className="promo-form">
                <input
                  type="text"
                  placeholder="e.g. AURAFIRST15"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  disabled={promoApplied}
                  className="form-input promo-input"
                />
                <button 
                  type="submit" 
                  disabled={promoApplied || !promoCode.trim()} 
                  className="btn btn-outline promo-btn"
                >
                  Apply
                </button>
              </form>
              {promoApplied && (
                <p className="promo-applied-success">Code applied: 15% discount unlocked!</p>
              )}
              {promoError && (
                <p className="promo-applied-error">{promoError}</p>
              )}
            </div>

            {/* Calculations Card */}
            <div className="cart-summary-panel glass-card totals-panel text-left">
              <h4 className="summary-title"><CreditCard size={16} /> Summary</h4>
              
              <div className="summary-rows">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${cartSubtotal.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="summary-row promo-discount-row">
                    <span>Discount (15%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="summary-row">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? "FREE" : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="summary-row">
                  <span>Estimated Tax (8%)</span>
                  <span>${taxAmount.toFixed(2)}</span>
                </div>
                <div className="summary-divider"></div>
                <div className="summary-row total-row">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Shipping indicator message */}
              {shippingCost > 0 && (
                <div className="shipping-upsell-msg">
                  Add <strong>${(50 - cartSubtotal).toFixed(2)}</strong> more to unlock <strong>FREE Shipping</strong>!
                </div>
              )}

              {/* Checkout Button */}
              <button 
                onClick={handleCheckout} 
                className="btn btn-primary w-full checkout-action-btn"
              >
                {user ? "Place Order (Checkout)" : "Log In to Checkout"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
