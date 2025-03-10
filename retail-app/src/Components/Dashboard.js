// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import speaker from "../assets/images/3.jpeg";
import glasses from "../assets/images/4.jpeg";
import chair from "../assets/images/7.jpeg";
import stand from "../assets/images/8.jpeg";
import clock from "../assets/images/11.jpeg";

const products = [
  { id: 3, name: "Wireless Speaker", price: 49.99, img: speaker },
  { id: 4, name: "Sunglasses", price: 19.99, img: glasses },
  { id: 7, name: "Fabric Chair", price: 79.99, img: chair },
  { id: 8, name: "Glass Stand", price: 25.99, img: stand },
  { id: 11, name: "Wall Clock", price: 34.99, img: clock }
];

const Dashboard = ({ addToCart }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("rememberedUser");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <h2 className="dashboard-title">Welcome to the Shopping Cart!</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <button className="cart-button" onClick={() => navigate("/cart")}>
        View Cart
      </button>
    </div>
  );
};

export default Dashboard;
