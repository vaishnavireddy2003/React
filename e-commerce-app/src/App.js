import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Catalog from "./Pages/Catalog";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout"; // ✅ Import Checkout Page

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/catalog" />}
        />
        <Route path="/catalog" element={isAuthenticated ? <Catalog addToCart={addToCart} /> : <Navigate to="/" />} />
        <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={isAuthenticated ? <Checkout cartItems={cart} /> : <Navigate to="/" />} /> {/* ✅ Added */}
      </Routes>
    </Router>
  );
}

export default App;
