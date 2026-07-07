import React, { createContext, useState, useEffect } from 'react';
import { api } from '../services/api';

export const ShopContext = createContext(null);

export const ShopProvider = ({ children }) => {
  // --- States ---
  const [productsList, setProductsList] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  
  // Load initial states from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('aura_cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('aura_wishlist');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('aura_user');
    return saved ? JSON.parse(saved) : null;
  });
  
  const [token, setToken] = useState(() => {
    return localStorage.getItem('aura_token') || null;
  });

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('aura_orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('aura_theme');
    return saved || 'light';
  });

  // --- Effects ---
  // Load products list on startup
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await api.getProducts();
        setProductsList(data);
      } catch (err) {
        console.error("Error loading products:", err);
      } finally {
        setLoadingProducts(false);
      }
    };
    loadProducts();
  }, []);

  // Write changes to LocalStorage
  useEffect(() => {
    localStorage.setItem('aura_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('aura_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('aura_orders', JSON.stringify(orders));
  }, [orders]);

  // Synchronize CSS Theme Attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aura_theme', theme);
  }, [theme]);


  // --- Actions ---

  // Cart Operations
  const addToCart = (product, quantity = 1, options = {}) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && JSON.stringify(item.options) === JSON.stringify(options)
      );

      if (existingItemIndex > -1) {
        const updated = [...prevCart];
        updated[existingItemIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { product, quantity, options }];
      }
    });
  };

  const removeFromCart = (productId, options = {}) => {
    setCart((prevCart) => 
      prevCart.filter(
        (item) => !(item.product.id === productId && JSON.stringify(item.options) === JSON.stringify(options))
      )
    );
  };

  const updateCartQuantity = (productId, quantity, options = {}) => {
    if (quantity <= 0) {
      removeFromCart(productId, options);
      return;
    }
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.product.id === productId && JSON.stringify(item.options) === JSON.stringify(options)) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  };

  const clearCart = () => setCart([]);

  // Wishlist Operations
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      if (exists) {
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Auth Operations
  const loginAction = async (email, password) => {
    const response = await api.login(email, password);
    setUser(response.user);
    setToken(response.token);
    localStorage.setItem('aura_user', JSON.stringify(response.user));
    localStorage.setItem('aura_token', response.token);
    return response.user;
  };

  const signupAction = async (name, email, password) => {
    const response = await api.signup(name, email, password);
    setUser(response.user);
    setToken(response.token);
    localStorage.setItem('aura_user', JSON.stringify(response.user));
    localStorage.setItem('aura_token', response.token);
    return response.user;
  };

  const logoutAction = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('aura_user');
    localStorage.removeItem('aura_token');
  };

  const updateProfile = (updatedDetails) => {
    setUser((prevUser) => {
      const newUser = { ...prevUser, ...updatedDetails };
      localStorage.setItem('aura_user', JSON.stringify(newUser));
      
      // Also update stored users array so changes persist across logins
      const storedUsers = JSON.parse(localStorage.getItem('aura_users') || '[]');
      const userIndex = storedUsers.findIndex(u => u.email === prevUser.email);
      if (userIndex > -1) {
        storedUsers[userIndex] = { ...storedUsers[userIndex], ...updatedDetails };
        localStorage.setItem('aura_users', JSON.stringify(storedUsers));
      }
      
      return newUser;
    });
  };

  // Simulated Checkout
  const checkout = () => {
    if (cart.length === 0) return { success: false, message: "Cart is empty" };

    const newOrder = {
      id: `order-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      items: [...cart],
      total: cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
      status: "Processing"
    };

    // Update product list stock in state (optional simulation)
    setProductsList((prevProducts) => {
      return prevProducts.map((p) => {
        const cartItem = cart.find((item) => item.product.id === p.id);
        if (cartItem) {
          return { ...p, stock: Math.max(0, p.stock - cartItem.quantity) };
        }
        return p;
      });
    });

    setOrders((prevOrders) => [newOrder, ...prevOrders]);
    clearCart();
    return { success: true, orderId: newOrder.id };
  };

  // Theme Toggle
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Helper values
  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        products: productsList,
        loadingProducts,
        cart,
        wishlist,
        user,
        token,
        orders,
        theme,
        cartSubtotal,
        cartItemCount,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        login: loginAction,
        signup: signupAction,
        logout: logoutAction,
        updateProfile,
        checkout,
        toggleTheme
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
