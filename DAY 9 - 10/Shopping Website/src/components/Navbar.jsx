import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useShop } from '../hooks/useShop';
import { 
  ShoppingCart, 
  Heart, 
  User, 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X 
} from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
  const { cartItemCount, wishlist, user, theme, toggleTheme } = useShop();
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setMobileMenuOpen(false);
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <nav className="navbar glass">
      <div className="navbar-container container">
        {/* Brand Logo */}
        <Link to="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
          <span className="logo-gradient">Aura</span>Cart
        </Link>

        {/* Search Bar (Desktop) */}
        <form onSubmit={handleSearchSubmit} className="nav-search-form desktop-only">
          <input
            type="text"
            placeholder="Search products, brands, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn" aria-label="Search">
            <Search size={18} />
          </button>
        </form>

        {/* Navigation Links (Desktop) */}
        <div className="nav-links desktop-only">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/products" className={`nav-link ${isActive('/products')}`}>Products</Link>
          <Link to="/categories" className={`nav-link ${isActive('/categories')}`}>Categories</Link>
        </div>

        {/* Action Icons */}
        <div className="nav-actions">
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="action-btn theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Wishlist Icon */}
          <Link to="/wishlist" className="action-btn wishlist-icon" aria-label="Wishlist">
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span className="badge-count badge-danger-anim">{wishlist.length}</span>
            )}
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="action-btn cart-icon" aria-label="Shopping Cart">
            <ShoppingCart size={20} />
            {cartItemCount > 0 && (
              <span className="badge-count badge-primary-anim">{cartItemCount}</span>
            )}
          </Link>

          {/* User Profile / Login */}
          <Link to={user ? "/profile" : "/login"} className="action-btn profile-icon" aria-label="User Account">
            {user ? (
              <div className="user-avatar-small">
                <img src={user.avatar} alt={user.name} />
              </div>
            ) : (
              <User size={20} />
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="action-btn mobile-menu-toggle"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass">
          <form onSubmit={handleSearchSubmit} className="mobile-search-form">
            <input
              type="text"
              placeholder="Search store..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <Search size={18} />
            </button>
          </form>

          <div className="mobile-nav-links">
            <Link 
              to="/" 
              className={`mobile-nav-link ${isActive('/')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`mobile-nav-link ${isActive('/products')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/categories" 
              className={`mobile-nav-link ${isActive('/categories')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/wishlist" 
              className={`mobile-nav-link ${isActive('/wishlist')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Wishlist ({wishlist.length})
            </Link>
            <Link 
              to="/cart" 
              className={`mobile-nav-link ${isActive('/cart')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Cart ({cartItemCount})
            </Link>
            <Link 
              to={user ? "/profile" : "/login"} 
              className={`mobile-nav-link ${isActive('/profile') || isActive('/login')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {user ? `Profile (${user.name})` : "Login / Signup"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
