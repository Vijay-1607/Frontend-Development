import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useShop } from '../hooks/useShop';
import ProductCard from '../components/ProductCard';
import { Search as SearchIcon, ArrowRight, ShieldAlert } from 'lucide-react';
import './Search.css';

export const Search = () => {
  const { products, loadingProducts } = useShop();
  const [searchParams] = useSearchParams();
  
  const query = searchParams.get('q') || '';

  // Filter products by query term
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    
    const term = query.toLowerCase().trim();
    return products.filter(
      (p) => 
        p.name.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
  }, [products, query]);

  // Fallback featured items if no results
  const fallbackSuggestions = useMemo(() => {
    return products.filter(p => p.featured).slice(0, 4);
  }, [products]);

  if (loadingProducts) {
    return (
      <div className="spinner-container" style={{ minHeight: '60vh' }}>
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="search-page container">
      {/* Search Header */}
      <div className="search-header text-left">
        <h1 className="search-title">
          <SearchIcon size={28} className="search-title-icon" /> Search Results
        </h1>
        {query ? (
          <p className="search-subtitle">
            Showing {searchResults.length} results for "<strong>{query}</strong>"
          </p>
        ) : (
          <p className="search-subtitle">Type a keyword in the navigation bar to search the store.</p>
        )}
      </div>

      {/* Results Grid */}
      {query.trim() && searchResults.length > 0 ? (
        <div className="grid-4">
          {searchResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State with recommendations */
        <div className="search-empty-flow">
          <div className="empty-search-card glass-card">
            <ShieldAlert size={48} className="empty-search-icon" />
            {query.trim() ? (
              <>
                <h3>No results found for "{query}"</h3>
                <p>Double check spelling or try terms like "headphones", "jacket", "cork", or "habitats".</p>
              </>
            ) : (
              <>
                <h3>Start Your Search</h3>
                <p>Enter any keyword in the search bar above to look for products in our collection.</p>
              </>
            )}
            <Link to="/products" className="btn btn-primary">Browse Full Catalog</Link>
          </div>

          {/* Recommendations block */}
          {fallbackSuggestions.length > 0 && (
            <div className="search-recommendations">
              <div className="rec-header">
                <h3>Recommended for You</h3>
                <Link to="/products" className="section-link-btn">
                  View All <ArrowRight size={16} />
                </Link>
              </div>
              <div className="grid-4">
                {fallbackSuggestions.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
