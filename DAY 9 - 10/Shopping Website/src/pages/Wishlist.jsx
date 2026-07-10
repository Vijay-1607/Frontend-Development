import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../hooks/useShop';
import ProductCard from '../components/ProductCard';
import { Heart, Trash2, ArrowRight } from 'lucide-react';
import './Wishlist.css';

export const Wishlist = () => {
  const { wishlist, clearWishlist, toggleWishlist } = useShop();

  // Custom action to clear all items in wishlist
  const handleClearAll = () => {
    // Custom context clear is not directly in standard context, we can just map and toggle
    wishlist.forEach((item) => {
      toggleWishlist(item);
    });
  };

  return (
    <div className="wishlist-page container">
      {/* Header */}
      <div className="wishlist-header">
        <div className="text-left">
          <h1 className="wishlist-title">My Wishlist</h1>
          <p className="wishlist-subtitle">Your favorited products saved for later</p>
        </div>
        
        {wishlist.length > 0 && (
          <button onClick={handleClearAll} className="btn btn-outline btn-sm clear-wishlist-action">
            <Trash2 size={14} /> Clear All
          </button>
        )}
      </div>

      {wishlist.length === 0 ? (
        /* Empty State */
        <div className="empty-wishlist-card glass-card">
          <Heart size={56} className="empty-wishlist-icon" />
          <h3>Your wishlist is empty</h3>
          <p>Tap the heart icon on any product card while browsing to save it here for later.</p>
          <Link to="/products" className="btn btn-primary btn-lg">
            Find Products <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        /* Product Grid */
        <div className="grid-4">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
