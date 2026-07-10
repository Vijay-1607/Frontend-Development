export const categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Sports",
  "Books"
];

export const products = [
  // --- Electronics ---
  {
    id: "elec-1",
    name: "AeroSound ANC Headphones",
    category: "Electronics",
    description: "Experience absolute audio purity. Equipped with hybrid Active Noise Cancellation, custom 40mm dynamic drivers, and a comfortable memory foam headband, the AeroSound ANC headphones deliver up to 40 hours of rich, immersive listening.",
    price: 189.99,
    rating: 4.8,
    reviewsCount: 124,
    stock: 15,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Battery Life": "Up to 40 Hours (ANC On)",
      "Connectivity": "Bluetooth 5.2 & 3.5mm Aux",
      "Noise Control": "Hybrid Active Noise Cancellation",
      "Charging": "USB-C Quick Charge (10 mins = 5 hrs)"
    },
    featured: true
  },
  {
    id: "elec-2",
    name: "Chronos Active Smartwatch",
    category: "Electronics",
    description: "Track your fitness, track your life. The Chronos Active features an always-on AMOLED display, comprehensive heart-rate and sleep tracking, built-in GPS, and seamless notification syncing with a sleek, water-resistant aluminum bezel.",
    price: 149.99,
    rating: 4.5,
    reviewsCount: 88,
    stock: 22,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Display": "1.43-inch AMOLED Always-On",
      "Water Resistance": "5 ATM (Up to 50m)",
      "Sensors": "Heart Rate, SpO2, Accelerometer, Gyro, GPS",
      "Battery Life": "Up to 7 Days typical usage"
    },
    featured: false
  },
  {
    id: "elec-3",
    name: "Tactile Pro Mechanical Keyboard",
    category: "Electronics",
    description: "Elevate your typing and gaming experience. Outfitted with hot-swappable brown tactile switches, customizable per-key RGB backlighting, and a premium double-shot PBT keycap set, all mounted in a robust aircraft-grade aluminum frame.",
    price: 109.99,
    rating: 4.7,
    reviewsCount: 56,
    stock: 8,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Form Factor": "Tenkeyless (80% layout)",
      "Switches": "Hot-swappable Tactile Brown",
      "Backlight": "Dynamic Per-Key RGB",
      "Interface": "Detachable Braided USB-C"
    },
    featured: true
  },

  // --- Fashion ---
  {
    id: "fash-1",
    name: "Classic Maverick Leather Jacket",
    category: "Fashion",
    description: "A timeless icon. Crafted from 100% genuine top-grain lambskin leather, this jacket features premium YKK zippers, a sleek polyester lining, and asymmetrical zip details that add a classic rugged edge to any modern wardrobe.",
    price: 249.99,
    rating: 4.9,
    reviewsCount: 142,
    stock: 12,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Material": "100% Top-Grain Lambskin Leather",
      "Lining": "100% Breathable Polyester",
      "Pockets": "3 Exterior Zip, 2 Interior Slip",
      "Care": "Professional Leather Clean Only"
    },
    featured: true
  },
  {
    id: "fash-2",
    name: "Urban Knit Sneakers",
    category: "Fashion",
    description: "Step into light, airy comfort. These sneakers feature a highly breathable, woven knit upper that conforms to your foot like a sock, combined with a responsive, high-rebound foam midsole for day-long urban exploration.",
    price: 79.99,
    rating: 4.6,
    reviewsCount: 94,
    stock: 25,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Upper": "Engineered Breathable Woven Knit",
      "Midsole": "High-Rebound Responsive Foam",
      "Weight": "7.8 oz (Size 9)",
      "Closure": "Elastic slip-on with functional laces"
    },
    featured: false
  },
  {
    id: "fash-3",
    name: "Minimalist Leather Backpack",
    category: "Fashion",
    description: "Sleek utility. A streamlined, weather-resistant leather backpack designed for the modern commuter. Features a padded 15-inch laptop sleeve, hidden security pocket, and padded mesh shoulder straps for absolute comfort.",
    price: 119.99,
    rating: 4.7,
    reviewsCount: 63,
    stock: 18,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Dimensions": "17.5\" x 12\" x 5.5\"",
      "Laptop Pocket": "Padded sleeve fits up to 15.6\"",
      "Material": "Water-Resistant Premium Vegan Leather",
      "Hardware": "Matte Black Reinforced Alloy"
    },
    featured: false
  },

  // --- Home & Kitchen ---
  {
    id: "home-1",
    name: "AeroVortex 5.8QT Air Fryer",
    category: "Home & Kitchen",
    description: "Crispy perfection, healthier cooking. The AeroVortex uses high-speed air circulation technology to cook food with up to 85% less oil than traditional deep frying. Features 8 one-touch cooking presets and a dishwasher-safe nonstick basket.",
    price: 99.99,
    rating: 4.8,
    reviewsCount: 210,
    stock: 14,
    image: "https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Capacity": "5.8 Quarts / 5.5 Liters",
      "Power": "1700 Watts",
      "Temperature Range": "100°F - 400°F",
      "Presets": "French Fries, Steak, Chicken, Seafood, Bacon, Toast, Bake, Dehydrate"
    },
    featured: true
  },
  {
    id: "home-2",
    name: "Artisan Ceramic Coffee Set",
    category: "Home & Kitchen",
    description: "Start your morning with visual art. Handcrafted by local artisans, this minimalist stoneware coffee set includes a premium drip pour-over cone, a 600ml glass carafe, and two matching double-walled cups with a speckled matte glaze.",
    price: 45.00,
    rating: 4.7,
    reviewsCount: 45,
    stock: 9,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Includes": "1 Drip Cone, 1 600ml Carafe, 2 Double-Wall Cups",
      "Material": "High-Fire Speckled Stoneware",
      "Dishwasher Safe": "Yes",
      "Microwave Safe": "Yes"
    },
    featured: false
  },
  {
    id: "home-3",
    name: "Minimalist Desktop Humidifier",
    category: "Home & Kitchen",
    description: "Breathe easier, sleep better. A whisper-quiet ultrasonic cool-mist humidifier with a compact design that fits perfectly on your nightstand or workspace. Includes an warm ambient night light and auto-shutoff safety feature.",
    price: 29.99,
    rating: 4.4,
    reviewsCount: 112,
    stock: 30,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Capacity": "500 ml",
      "Runtime": "Up to 10 Hours (Intermittent Mode)",
      "Mist Output": "30-50 ml/h",
      "Power Source": "USB-C Cable"
    },
    featured: false
  },

  // --- Beauty ---
  {
    id: "beau-1",
    name: "Organics Glow Face Oil",
    category: "Beauty",
    description: "Unlock your skin's natural radiance. A luxurious blend of cold-pressed rosehip, jojoba, and argan oils enriched with Vitamin E. Gently repairs skin cells, deeply hydrates, and leaves a silky, non-greasy dewy finish.",
    price: 34.99,
    rating: 4.6,
    reviewsCount: 78,
    stock: 20,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Skin Type": "All Skin Types (Sensitive Safe)",
      "Ingredients": "100% Organic Rosehip Seed, Jojoba, Argan Oils, Vitamin E",
      "Free From": "Parabens, Sulfates, Artificial Fragrances, Cruelty-free",
      "Size": "1.0 fl oz / 30 ml"
    },
    featured: false
  },
  {
    id: "beau-2",
    name: "Nocturnal Repair Night Cream",
    category: "Beauty",
    description: "Rejuvenating rest. This advanced peptide night cream works overnight to smooth the appearance of fine lines, restore moisture barrier, and plump skin with deep, long-lasting hydration using plant-derived squalane and ceramides.",
    price: 42.50,
    rating: 4.8,
    reviewsCount: 91,
    stock: 15,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Target Concern": "Anti-Aging, Dryness, Fine Lines",
      "Key Actives": "Multi-Peptide Complex, Squalane, 3 Essential Ceramides",
      "Usage": "Apply nightly on clean, dry skin",
      "Size": "1.7 oz / 50 ml"
    },
    featured: true
  },
  {
    id: "beau-3",
    name: "L'Elixir Amber Perfume Spray",
    category: "Beauty",
    description: "A warm, mysterious aura. L'Elixir blends notes of golden amber, warm vanilla bean, and rich sandalwood, accented with a subtle top note of fresh bergamot. A sophisticated fragrance that lingers beautifully all day.",
    price: 85.00,
    rating: 4.7,
    reviewsCount: 49,
    stock: 10,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Fragrance Family": "Warm & Spicy Wood",
      "Key Notes": "Bergamot, Amber, Vanilla, Sandalwood",
      "Concentration": "Eau de Parfum (EDP)",
      "Size": "3.4 fl oz / 100 ml"
    },
    featured: false
  },

  // --- Sports ---
  {
    id: "spor-1",
    name: "Balance 8mm Cork Yoga Mat",
    category: "Sports",
    description: "Natural grip, eco-friendly strength. Made from organic Mediterranean oak cork and backing with natural tree rubber, this 8mm thick mat provides exceptional non-slip performance and supportive cushioning for all yoga and hot workout sessions.",
    price: 59.99,
    rating: 4.9,
    reviewsCount: 65,
    stock: 13,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Material": "Natural Oak Cork & Sustainable Tree Rubber",
      "Dimensions": "72\" Long x 26\" Wide",
      "Thickness": "8 mm Extra Cushioning",
      "Weight": "5.5 lbs"
    },
    featured: false
  },
  {
    id: "spor-2",
    name: "HydroForge Vacuum Bottle",
    category: "Sports",
    description: "Ice-cold hydration. The HydroForge features double-wall vacuum insulation that keeps water ice-cold for up to 24 hours, or piping hot for 12. Built with durable 18/8 food-grade stainless steel and a sweat-proof matte finish.",
    price: 32.00,
    rating: 4.7,
    reviewsCount: 154,
    stock: 40,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Capacity": "32 oz / 950 ml",
      "Material": "18/8 Premium Pro-Grade Stainless Steel",
      "Insulation": "Double-Wall TempShield Vacuum",
      "Lid": "Leakproof straw lid + flex cap included"
    },
    featured: false
  },
  {
    id: "spor-3",
    name: "Viper Pro Speed Jump Rope",
    category: "Sports",
    description: "Master double-unders. Engineered for high-speed workouts, the Viper Pro features dual ball-bearings in anti-slip aluminum handles, paired with a custom-adjustable steel cable that cuts through the air with zero friction.",
    price: 19.99,
    rating: 4.6,
    reviewsCount: 72,
    stock: 50,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Cable Type": "Adjustable Coated Steel Cable",
      "Handle Length": "6.2 inches",
      "Bearing System": "360° Stainless Steel Ball Bearings",
      "Includes": "Premium jump rope, spare cable, carrying pouch"
    },
    featured: false
  },

  // --- Books ---
  {
    id: "book-1",
    name: "Starlight Voyage: Sci-Fi Epic",
    category: "Books",
    description: "A breathtaking space-opera adventure. Author Caleb Mercer weaves a rich tale of exploration, politics, and survival as a lone scout ship discovers an ancient artificial star capable of reshaping humanity's fate in the cosmos.",
    price: 14.99,
    rating: 4.5,
    reviewsCount: 42,
    stock: 15,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Format": "Paperback / Kindle / Audiobook",
      "Pages": "482 Pages",
      "Publisher": "Cosmic Press (2024)",
      "Language": "English"
    },
    featured: false
  },
  {
    id: "book-2",
    name: "Atomic Habitats: Peak Productivity",
    category: "Books",
    description: "Build tiny habits, achieve massive success. In this groundbreaking guide, performance psychologist Dr. Elena Vance reveals actionable, science-backed strategies for modifying environments to automate positive daily routines and break negative loops.",
    price: 18.99,
    rating: 4.8,
    reviewsCount: 320,
    stock: 20,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Format": "Hardcover",
      "Pages": "320 Pages",
      "Genre": "Self-Help / Psychology",
      "Best Seller List": "#1 Business & Productivity Guide"
    },
    featured: true
  },
  {
    id: "book-3",
    name: "The Forgotten Realm: Illustrated Fantasy",
    category: "Books",
    description: "Delve into the realm of magic. This deluxe hardbound collection includes 40 hand-drawn detailed maps and illustrations accompanying an epic narrative of a fallen king navigating deep forests and forgotten ruins to reclaim a lost legacy.",
    price: 28.50,
    rating: 4.9,
    reviewsCount: 55,
    stock: 6,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    specs: {
      "Format": "Hardcover (Collector's Edition)",
      "Pages": "380 Pages (Heavyweight Matte Paper)",
      "Artwork": "40 Original Pen-and-Ink Illustrations",
      "Extras": "Gold Foil Detailing on Spine & Cover"
    },
    featured: false
  }
];
