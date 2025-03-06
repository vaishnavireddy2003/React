import React from "react";
import "../styles/Catalog.css";
import backpack from "../assets/images/1.jpeg";
import oil from "../assets/images/2.jpeg";
import speaker from "../assets/images/3.jpeg";
import glasses from "../assets/images/4.jpeg";
import corkscrew from "../assets/images/5.jpeg";
import shelf from "../assets/images/6.jpeg";
import chair from "../assets/images/7.jpeg";
import stand from "../assets/images/8.jpeg";
import candle from "../assets/images/9.jpeg";
import bag from "../assets/images/10.jpeg";
import clock from "../assets/images/11.jpeg";
import mat from "../assets/images/12.jpeg";
import { useNavigate } from "react-router-dom";

const products = [
  { id: 1, name: "Stylish Backpack", price: 29.99, img: backpack },
  { id: 2, name: "Organic Oil", price: 15.99, img: oil },
  { id: 3, name: "Wireless Speaker", price: 49.99, img: speaker },
  { id: 4, name: "Sunglasses", price: 19.99, img: glasses },
  { id: 5, name: "Corkscrew", price: 9.99, img: corkscrew },
  { id: 6, name: "Wooden Shelf", price: 39.99, img: shelf },
  { id: 7, name: "Fabric Chair", price: 79.99, img: chair },
  { id: 8, name: "Glass Stand", price: 25.99, img: stand },
  { id: 9, name: "Candle", price: 12.99, img: candle },
  { id: 10, name: "Leather Bag", price: 49.99, img: bag },
  { id: 11, name: "Wall Clock", price: 34.99, img: clock },
  { id: 12, name: "Small Rug", price: 19.99, img: mat }
];

const Catalog = ({ addToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="catalog-container">
      <h2 className="catalog-title">Shop Page</h2>
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

export default Catalog;
