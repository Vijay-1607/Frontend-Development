import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useShop } from '../hooks/useShop';
import ProductCard from '../components/ProductCard';
import { Filter, SlidersHorizontal, ArrowUpDown, X } from 'lucide-react';
import './Products.css';

export const Products = () => {
  const { products, loadingProducts } = useShop();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // --- States ---
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(300); // Max in mock products is 250
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('default');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync category state with URL parameters (e.g., ?category=Electronics)
  useEffect(() => {
    const catParam = searchParams.get('category');
    if (catParam) {
      setSelectedCategories([catParam]);
    } else {
      setSelectedCategories([]);
    }
  }, [searchParams]);

  // Available unique categories
  const categoriesList = useMemo(() => {
    return ["Electronics", "Fashion", "Home & Kitchen", "Beauty", "Sports", "Books"];
  }, []);

  // Reset all filters
  const handleClearFilters = () => {
    setSelectedCategories([]);
    setPriceRange(300);
    setMinRating(0);
    setSearchParams({});
  };

  // Toggle category choice
  const handleCategoryToggle = (category) => {
    // If we have a URL param, clean it up since we are manually editing checkboxes
    if (searchParams.get('category')) {
      setSearchParams({});
    }

    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // --- Filtering & Sorting Logic ---
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Filter by Price
    result = result.filter((p) => p.price <= priceRange);

    // Filter by Rating
    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating);
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, selectedCategories, priceRange, minRating, sortBy]);

  if (loadingProducts) {
    return (
      <div className="spinner-container" style={{ minHeight: '60vh' }}>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="products-page container">
      {/* Page Header */}
      <div className="products-header">
        <div>
          <h1 className="products-title">Product Catalog</h1>
          <p className="products-subtitle">Showing {filteredProducts.length} premium products</p>
        </div>
        
        {/* Mobile controls & Desktop Sorting */}
        <div className="catalog-controls">
          <button 
            onClick={() => setMobileFiltersOpen(true)} 
            className="btn btn-outline mobile-filter-btn"
          >
            <Filter size={16} /> Filters
          </button>
          
          <div className="sort-wrapper">
            <ArrowUpDown size={16} className="sort-icon" />
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)} 
              className="sort-select"
            >
              <option value="default">Default Sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      <div className="catalog-layout">
        {/* Desktop Filter Sidebar */}
        <aside className="filters-sidebar glass-card desktop-filters">
          <div className="filters-heading">
            <h3 className="filters-title-main"><SlidersHorizontal size={18} /> Filters</h3>
            {(selectedCategories.length > 0 || priceRange < 300 || minRating > 0) && (
              <button onClick={handleClearFilters} className="clear-filters-btn">Clear All</button>
            )}
          </div>

          {/* Category Filter */}
          <div className="filter-section">
            <h4 className="filter-title">Category</h4>
            <div className="filter-options">
              {categoriesList.map((cat) => (
                <label key={cat} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryToggle(cat)}
                    className="filter-checkbox"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="filter-section">
            <h4 className="filter-title">Max Price: <span className="price-display">${priceRange}</span></h4>
            <input
              type="range"
              min="10"
              max="300"
              step="10"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="price-slider"
            />
            <div className="slider-labels">
              <span>$10</span>
              <span>$300</span>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="filter-section">
            <h4 className="filter-title">Minimum Rating</h4>
            <div className="filter-options">
              {[4.5, 4.0, 3.5].map((rating) => (
                <label key={rating} className="filter-radio-label">
                  <input
                    type="radio"
                    name="rating-filter"
                    checked={minRating === rating}
                    onChange={() => setMinRating(rating)}
                    className="filter-radio"
                  />
                  <span>{rating}★ & above</span>
                </label>
              ))}
              <label className="filter-radio-label">
                <input
                  type="radio"
                  name="rating-filter"
                  checked={minRating === 0}
                  onChange={() => setMinRating(0)}
                  className="filter-radio"
                />
                <span>All Ratings</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Product Grid Area */}
        <main className="catalog-grid-area">
          {filteredProducts.length === 0 ? (
            <div className="empty-catalog glass-card">
              <h3>No Products Match Your Filters</h3>
              <p>Try clearing your categories, raising the price range, or searching for other keywords.</p>
              <button onClick={handleClearFilters} className="btn btn-primary">Reset Filters</button>
            </div>
          ) : (
            <div className="grid-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileFiltersOpen && (
        <div className="mobile-filters-backdrop" onClick={() => setMobileFiltersOpen(false)}>
          <aside className="mobile-filters-drawer glass" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <h3>Filter Products</h3>
              <button 
                onClick={() => setMobileFiltersOpen(false)} 
                className="close-drawer-btn"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mobile-drawer-body">
              {/* Category */}
              <div className="filter-section">
                <h4 className="filter-title">Category</h4>
                <div className="filter-options">
                  {categoriesList.map((cat) => (
                    <label key={cat} className="filter-checkbox-label">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => handleCategoryToggle(cat)}
                        className="filter-checkbox"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="filter-section">
                <h4 className="filter-title">Max Price: <span className="price-display">${priceRange}</span></h4>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="10"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="price-slider"
                />
                <div className="slider-labels">
                  <span>$10</span>
                  <span>$300</span>
                </div>
              </div>

              {/* Rating */}
              <div className="filter-section">
                <h4 className="filter-title">Minimum Rating</h4>
                <div className="filter-options">
                  {[4.5, 4.0, 3.5].map((rating) => (
                    <label key={rating} className="filter-radio-label">
                      <input
                        type="radio"
                        name="mobile-rating-filter"
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className="filter-radio"
                      />
                      <span>{rating}★ & above</span>
                    </label>
                  ))}
                  <label className="filter-radio-label">
                    <input
                      type="radio"
                      name="mobile-rating-filter"
                      checked={minRating === 0}
                      onChange={() => setMinRating(0)}
                      className="filter-radio"
                    />
                    <span>All Ratings</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mobile-drawer-footer">
              <button 
                onClick={handleClearFilters} 
                className="btn btn-outline"
                style={{ flex: 1 }}
              >
                Reset
              </button>
              <button 
                onClick={() => setMobileFiltersOpen(false)} 
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                Apply Filters
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Products;
