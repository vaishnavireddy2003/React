import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Cart.css";

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate(); // Initialize navigation

  // ✅ Fix: Ensure price is converted to a number before calculation
  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc +
      (typeof item.price === "string" ? parseFloat(item.price.replace("$", "")) : item.price) *
        (item.quantity || 1),
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="cart-product">
                    <img src={item.img} alt={item.name} className="cart-image" />
                    <span>{item.name}</span>
                  </td>
                  <td>${(typeof item.price === "string" ? parseFloat(item.price.replace("$", "")) : item.price).toFixed(2)}</td>
                  <td>{item.quantity || 1}</td>
                  <td>${((typeof item.price === "string" ? parseFloat(item.price.replace("$", "")) : item.price) * (item.quantity || 1)).toFixed(2)}</td>
                  <td>
                    <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            {/* ✅ Fix: Navigate to catalog when clicked */}
            <button className="continue-shopping" onClick={() => navigate("/catalog")}>
              Continue Shopping
            </button>
            <button 
            className="checkout-button" 
            onClick={() => navigate("/checkout", { state: { total: totalPrice } })}>
            Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
