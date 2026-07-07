import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, RefreshCw, Headphones } from 'lucide-react';
import { useShop } from '../hooks/useShop';
import ProductCard from '../components/ProductCard';
import './Home.css';

export const Home = () => {
  const { products, loadingProducts } = useShop();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setFeaturedProducts(products.filter(p => p.featured));
    }
  }, [products]);

  // Category list with icons/illustrations
  const homeCategories = [
    { name: "Electronics", desc: "Premium gadgets & audio gear", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" },
    { name: "Fashion", desc: "Timeless clothing & styles", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=400&q=80" },
    { name: "Home & Kitchen", desc: "Modern living essentials", image: "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?auto=format&fit=crop&w=400&q=80" },
    { name: "Beauty", desc: "Organic skin care products", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80" },
    { name: "Sports", desc: "Active wear & equipment", image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=400&q=80" },
    { name: "Books", desc: "Best sellers & epic stories", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=400&q=80" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container container">
          <div className="hero-content">
            <span className="hero-tagline">Exclusive Spring Release</span>
            <h1 className="hero-title">Experience the Next Gen of <span className="text-gradient">Aura</span> Shopping</h1>
            <p className="hero-description">
              Discover curated tech gadgets, premium leatherwear, organic skin routines, and design essentials crafted to elevate your lifestyle.
            </p>
            <div className="hero-ctas">
              <Link to="/products" className="btn btn-primary btn-lg">
                Shop Collection <ArrowRight size={18} />
              </Link>
              <Link to="/categories" className="btn btn-outline btn-lg">
                Explore Categories
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-circle-backdrop"></div>
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" 
              alt="Featured Sneaker" 
              className="hero-floating-img"
            />
          </div>
        </div>
      </section>

      {/* Benefits / Features Section */}
      <section className="benefits-section container">
        <div className="grid-4">
          <div className="benefit-card glass-card">
            <div className="benefit-icon-wrapper p-col">
              <Truck size={24} />
            </div>
            <h3 className="benefit-title">Free Express Shipping</h3>
            <p className="benefit-desc">Complimentary shipping on orders over $50 with trackable delivery.</p>
          </div>

          <div className="benefit-card glass-card">
            <div className="benefit-icon-wrapper s-col">
              <ShieldCheck size={24} />
            </div>
            <h3 className="benefit-title">Secure Checkouts</h3>
            <p className="benefit-desc">100% encrypted checkout systems protecting credentials.</p>
          </div>

          <div className="benefit-card glass-card">
            <div className="benefit-icon-wrapper r-col">
              <RefreshCw size={24} />
            </div>
            <h3 className="benefit-title">30-Day Returns</h3>
            <p className="benefit-desc">Not happy? Exchange or return items with pre-paid return labels.</p>
          </div>

          <div className="benefit-card glass-card">
            <div className="benefit-icon-wrapper h-col">
              <Headphones size={24} />
            </div>
            <h3 className="benefit-title">24/7 Premium Support</h3>
            <p className="benefit-desc">Live concierge services standing by to solve orders anytime.</p>
          </div>
        </div>
      </section>

      {/* Category Showcase Section */}
      <section className="home-categories-section container">
        <div className="section-header">
          <h2 className="section-title">Shop by Category</h2>
          <Link to="/categories" className="section-link-btn">
            View All Categories <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid-3">
          {homeCategories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={`/products?category=${encodeURIComponent(cat.name)}`} 
              className="home-category-card glass-card"
            >
              <div className="cat-card-img-wrapper">
                <img src={cat.image} alt={cat.name} className="cat-card-img" />
                <div className="cat-card-overlay"></div>
              </div>
              <div className="cat-card-details">
                <h3 className="cat-card-title">{cat.name}</h3>
                <p className="cat-card-desc">{cat.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section container">
        <div className="section-header">
          <h2 className="section-title">Featured Highlights</h2>
          <Link to="/products" className="section-link-btn">
            View All Products <ArrowRight size={16} />
          </Link>
        </div>

        {loadingProducts ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="grid-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Promotional Banner */}
      <section className="promo-banner container">
        <div className="promo-banner-inner glass">
          <div className="promo-content">
            <span className="promo-badge">Limited Time Offer</span>
            <h2 className="promo-title">Take 15% Off Your First Purchase</h2>
            <p className="promo-desc">Use code <strong>AURAFIRST15</strong> at checkout to unlock savings. Expires soon.</p>
          </div>
          <Link to="/products" className="btn btn-primary btn-lg">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
