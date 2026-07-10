import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useShop } from '../hooks/useShop';
import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  
  const favorited = isInWishlist(product.id);

  const handleWishlistToggle = (e) => {
    e.preventDefault(); // Stop navigation to details page
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // Stop navigation to details page
    e.stopPropagation();
    addToCart(product, 1);
  };

  // Helper to render rating stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} size={14} className="star-icon filled" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<Star key={i} size={14} className="star-icon half-filled" />);
      } else {
        stars.push(<Star key={i} size={14} className="star-icon" />);
      }
    }
    return stars;
  };

  return (
    <div className="product-card glass-card">
      {/* Product Image and Badges */}
      <Link to={`/products/${product.id}`} className="card-image-wrapper">
        <img src={product.image} alt={product.name} className="product-card-img" loading="lazy" />
        
        {/* Floating Category Tag */}
        <span className="card-category-badge">{product.category}</span>

        {/* Stock status indicator */}
        {product.stock <= 5 && (
          <span className="card-stock-warning">
            {product.stock === 0 ? "Out of Stock" : `Only ${product.stock} left`}
          </span>
        )}

        {/* Floating Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={`card-wishlist-btn ${favorited ? 'active' : ''}`}
          aria-label={favorited ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <Heart size={16} fill={favorited ? "currentColor" : "none"} />
        </button>
      </Link>

      {/* Product Info */}
      <div className="card-info">
        <Link to={`/products/${product.id}`} className="card-title-link">
          <h3 className="card-title">{product.name}</h3>
        </Link>

        {/* Ratings block */}
        <div className="card-rating">
          <div className="stars-container">{renderStars(product.rating)}</div>
          <span className="rating-score">({product.reviewsCount})</span>
        </div>

        {/* Bottom Price & Add Actions */}
        <div className="card-footer-action">
          <div className="card-price-container">
            <span className="card-price">${product.price.toFixed(2)}</span>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="card-add-btn"
            aria-label="Add to Cart"
          >
            <ShoppingCart size={16} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
