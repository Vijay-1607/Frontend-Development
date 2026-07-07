import { products, categories } from '../data/products';

// Helper to simulate network latency (500ms delay)
const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  // Get all products, optionally filtered or sorted
  async getProducts() {
    await delay(400);
    return [...products];
  },

  // Get product by id
  async getProductById(id) {
    await delay(300);
    const product = products.find((p) => p.id === id);
    if (!product) {
      throw new Error("Product not found");
    }
    return { ...product };
  },

  // Get all categories
  async getCategories() {
    await delay(200);
    return [...categories];
  },

  // Get related products (same category, excluding current product)
  async getRelatedProducts(category, excludeId) {
    await delay(300);
    return products.filter((p) => p.category === category && p.id !== excludeId).slice(0, 4);
  },

  // Simulate User Login
  async login(email, password) {
    await delay(600);
    
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    // Default mock user credentials (or register a custom one in local storage)
    const storedUsers = JSON.parse(localStorage.getItem('aura_users') || '[]');
    let user = storedUsers.find(u => u.email === email);

    if (!user) {
      // Create a default test user if email is user@example.com
      if (email === "user@example.com" && password === "password123") {
        user = {
          name: "Alex Carter",
          email: "user@example.com",
          joined: "July 2026",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
          phone: "+1 (555) 019-2834",
          address: "100 Aura Boulevard, San Francisco, CA"
        };
      } else {
        throw new Error("Invalid email or password");
      }
    } else {
      if (user.password !== password) {
        throw new Error("Invalid email or password");
      }
    }

    // Generate token
    const token = `mock-jwt-token-${Math.random().toString(36).substring(2)}`;
    return { user, token };
  },

  // Simulate User Signup
  async signup(name, email, password) {
    await delay(600);

    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }

    const storedUsers = JSON.parse(localStorage.getItem('aura_users') || '[]');
    const emailExists = storedUsers.some(u => u.email === email) || email === "user@example.com";

    if (emailExists) {
      throw new Error("Email already in use");
    }

    const newUser = {
      name,
      email,
      password, // In real life, we hash this!
      joined: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
      phone: "+1 (555) 000-0000",
      address: "Update your address in profile settings"
    };

    storedUsers.push(newUser);
    localStorage.setItem('aura_users', JSON.stringify(storedUsers));

    // Return without password
    const { password: _, ...userWithoutPassword } = newUser;
    const token = `mock-jwt-token-${Math.random().toString(36).substring(2)}`;
    return { user: userWithoutPassword, token };
  }
};
