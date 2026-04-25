import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();
export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  
  // 1. PAGE LOAD HOTE HI PURANA DATA BROWSER SE NIKALNA
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("llmShop_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("llmShop_wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // 2. JAB BHI CART MEIN KUCH ADD/REMOVE HO, USE BROWSER MEIN PERMANENT SAVE KARNA
  useEffect(() => {
    localStorage.setItem("llmShop_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("llmShop_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // --- BAAKI LOGIC EKDUM SAME HAI ---

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1, size: "Free Size" }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, qty: newQty } : item));
  };

  const updateSize = (id, newSize) => {
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, size: newSize } : item));
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev.filter((item) => item.id !== product.id);
      return [...prev, product];
    });
  };

  return (
    <ShopContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, updateSize, wishlist, toggleWishlist }}>
      {children}
    </ShopContext.Provider>
  );
};