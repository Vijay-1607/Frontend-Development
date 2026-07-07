import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useShop } from '../hooks/useShop';
import { api } from '../services/api';
import ProductCard from '../components/ProductCard';
import { Heart, ShoppingCart, Star, ArrowLeft, ShieldCheck, Truck, ShieldAlert } from 'lucide-react';
import './ProductDetails.css';

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  // --- States ---
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImageTab, setActiveImageTab] = useState(0);

  // Fetch product on mounting or ID change
  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const prodData = await api.getProductById(id);
        setProduct(prodData);
        
        // Fetch related products
        const related = await api.getRelatedProducts(prodData.category, prodData.id);
        setRelatedProducts(related);
      } catch (err) {
        setError(err.message || "Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
    setQuantity(1); // Reset quantity counter
    setActiveImageTab(0);
    window.scrollTo(0, 0); // Scroll to top
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  const handleWishlistToggle = () => {
    if (product) {
      toggleWishlist(product);
    }
  };

  const incrementQty = () => {
    if (product && quantity < product.stock) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrementQty = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Render stars helper
  const renderStars = (rating = 0) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} size={16} className="star-icon-detail filled" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<Star key={i} size={16} className="star-icon-detail half-filled" />);
      } else {
        stars.push(<Star key={i} size={16} className="star-icon-detail" />);
      }
    }
    return stars;
  };

  if (loading) {
    return (
      <div className="spinner-container" style={{ minHeight: '60vh' }}>
        <div className="spinner"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="detail-error-container container">
        <div className="error-card glass-card">
          <ShieldAlert size={48} className="error-icon" />
          <h2>Product Not Found</h2>
          <p>{error || "We couldn't find the product you're looking for."}</p>
          <Link to="/products" className="btn btn-primary">Back to Catalog</Link>
        </div>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.id);

  // Generate fake image variations for display gallery
  const galleryImages = [
    product.image,
    // Add slightly adjusted photo variations using Unsplash features, or reuse same photo
    product.image + "&blur=1",
    product.image + "&sat=-100" // Black and white variation
  ];

  return (
    <div className="product-details-page container">
      {/* Back navigation */}
      <button onClick={() => navigate(-1)} className="back-link">
        <ArrowLeft size={16} /> Back to previous page
      </button>

      {/* Main product presentation grid */}
      <div className="details-layout-grid">
        {/* Left Column: Interactive Image Gallery */}
        <div className="details-gallery-column">
          <div className="details-main-img-card glass-card">
            <img src={galleryImages[activeImageTab]} alt={product.name} className="details-main-img" />
          </div>
          <div className="details-thumbnails-row">
            {galleryImages.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageTab(idx)}
                className={`details-thumb-btn glass-card ${activeImageTab === idx ? 'active' : ''}`}
              >
                <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Information & Actions */}
        <div className="details-info-column text-left">
          <span className="details-category-tag">{product.category}</span>
          <h1 className="details-title">{product.name}</h1>

          {/* Rating */}
          <div className="details-rating-block">
            <div className="stars-wrapper">{renderStars(product.rating)}</div>
            <span className="details-rating-val">{product.rating}</span>
            <span className="details-reviews-count">({product.reviewsCount} customer reviews)</span>
          </div>

          <div className="details-price">${product.price.toFixed(2)}</div>

          <p className="details-desc">{product.description}</p>

          {/* Inventory and actions */}
          <div className="details-actions-panel">
            <div className="stock-info-row">
              <span className="stock-label">Availability:</span>
              <span className={`stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                {product.stock > 0 ? `In Stock (${product.stock} items remaining)` : "Out of Stock"}
              </span>
            </div>

            {product.stock > 0 && (
              <div className="quantity-adjuster-row">
                <span className="quantity-label">Quantity:</span>
                <div className="qty-control-box">
                  <button onClick={decrementQty} className="qty-btn" disabled={quantity <= 1}>-</button>
                  <span className="qty-val">{quantity}</span>
                  <button onClick={incrementQty} className="qty-btn" disabled={quantity >= product.stock}>+</button>
                </div>
              </div>
            )}

            <div className="buttons-action-row">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="btn btn-primary buy-now-btn"
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>

              <button
                onClick={handleWishlistToggle}
                className={`btn btn-outline detail-wishlist-btn ${isFavorited ? 'active' : ''}`}
                aria-label="Add to Wishlist"
              >
                <Heart size={18} fill={isFavorited ? "currentColor" : "none"} />
                <span>{isFavorited ? "In Wishlist" : "Wishlist"}</span>
              </button>
            </div>
          </div>

          {/* Shipping / Trust Badges */}
          <div className="details-trust-badges">
            <div className="trust-badge-item">
              <Truck size={18} />
              <div>
                <h5>Free Standard Shipping</h5>
                <p>Delivery in 3-5 business days</p>
              </div>
            </div>
            <div className="trust-badge-item">
              <ShieldCheck size={18} />
              <div>
                <h5>Secure 2-Year Warranty</h5>
                <p>Authentic products with active support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications Section */}
      <section className="details-specs-section">
        <h3 className="specs-section-title">Technical Specifications</h3>
        <div className="specs-table-card glass-card">
          <table className="specs-table">
            <tbody>
              {Object.entries(product.specs).map(([key, value]) => (
                <tr key={key}>
                  <td className="spec-name">{key}</td>
                  <td className="spec-value">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related Products Recommendation */}
      {relatedProducts.length > 0 && (
        <section className="details-related-section">
          <h3 className="related-section-title">You May Also Like</h3>
          <div className="grid-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
