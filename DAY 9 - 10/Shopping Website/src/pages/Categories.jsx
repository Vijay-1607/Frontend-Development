import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../hooks/useShop';
import { ArrowRight, Laptop, Shirt, Home, Sparkles, Trophy, BookOpen } from 'lucide-react';
import './Categories.css';

export const Categories = () => {
  const { products } = useShop();

  // Dynamic category mapping with metadata & custom icons
  const categoryMetadata = useMemo(() => {
    const categories = [
      {
        name: "Electronics",
        desc: "Laptops, high-fidelity headphones, wearable smart devices, and hardware mechanical keyboards.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        icon: <Laptop size={24} />
      },
      {
        name: "Fashion",
        desc: "Top-grain leather wear, breathable knit sneakers, and commuter utility backpacks.",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
        icon: <Shirt size={24} />
      },
      {
        name: "Home & Kitchen",
        desc: "Advanced convection air fryers, artisan ceramic brewers, and space desktop humidifiers.",
        image: "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?auto=format&fit=crop&w=600&q=80",
        icon: <Home size={24} />
      },
      {
        name: "Beauty",
        desc: "Cold-pressed organic glow oils, premium peptide night moisturizers, and warm amber perfumes.",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
        icon: <Sparkles size={24} />
      },
      {
        name: "Sports",
        desc: "Eco-friendly oak cork mats, vacuum-insulated thermal bottles, and high-speed steel jump ropes.",
        image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=600&q=80",
        icon: <Trophy size={24} />
      },
      {
        name: "Books",
        desc: "Hardcover fantasy guides with gold foil, space sci-fi epics, and productivity guidebooks.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
        icon: <BookOpen size={24} />
      }
    ];

    // Compute counts dynamically
    return categories.map((cat) => {
      const count = products.filter((p) => p.category === cat.name).length;
      return { ...cat, count };
    });
  }, [products]);

  return (
    <div className="categories-page container">
      {/* Title */}
      <div className="categories-header text-left">
        <h1 className="categories-title">Shop by Category</h1>
        <p className="categories-subtitle">Discover premium items handpicked to match your lifestyle needs.</p>
      </div>

      {/* Grid List */}
      <div className="categories-grid">
        {categoryMetadata.map((cat) => (
          <div key={cat.name} className="category-panel glass-card">
            <div className="category-image-pane">
              <img src={cat.image} alt={cat.name} className="cat-pane-img" loading="lazy" />
              <div className="cat-pane-overlay"></div>
            </div>
            
            <div className="category-text-pane text-left">
              <div className="cat-icon-row">
                <div className="cat-icon-container">{cat.icon}</div>
                <span className="cat-items-badge">{cat.count} Items</span>
              </div>
              
              <h3 className="cat-pane-title">{cat.name}</h3>
              <p className="cat-pane-desc">{cat.desc}</p>
              
              <Link 
                to={`/products?category=${encodeURIComponent(cat.name)}`} 
                className="btn btn-secondary cat-browse-btn"
              >
                Browse Collection <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
