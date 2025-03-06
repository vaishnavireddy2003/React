import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const totalAmount = location.state?.total || 0; // Get total amount from Cart page

  const [paymentMethod, setPaymentMethod] = useState("card");

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
  };

  const handleConfirmPayment = () => {
    alert("Payment Successful! Thank you for your purchase.");
    navigate("/"); // Redirect to home page or order confirmation
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      <div className="payment-methods">
        <label className={paymentMethod === "card" ? "selected" : ""}>
          <input
            type="radio"
            name="payment"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => handlePaymentChange("card")}
          />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.svg/800px-Mastercard-logo.svg.png" alt="Mastercard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
        </label>

        <label className={paymentMethod === "paypal" ? "selected" : ""}>
          <input
            type="radio"
            name="payment"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => handlePaymentChange("paypal")}
          />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
        </label>

        <label className={paymentMethod === "cod" ? "selected" : ""}>
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={() => handlePaymentChange("cod")}
          />
          <span>Cash on Delivery</span>
        </label>
      </div>

      {paymentMethod === "card" && (
        <div className="card-details">
          <input type="text" placeholder="Card Number" maxLength="16" required />
          <input type="text" placeholder="Cardholder Name" required />
          <div className="expiry-cvc">
            <input type="text" placeholder="MM/YY" maxLength="5" required />
            <input type="text" placeholder="CVC" maxLength="3" required />
          </div>
        </div>
      )}

      <div className="checkout-summary">
        <p>Subtotal: ${(totalAmount - 5).toFixed(2)}</p>
        <p>Home Delivery: $5.00</p>
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>

      <button className="confirm-payment" onClick={handleConfirmPayment}>
        Confirm Payment
      </button>
    </div>
  );
};

export default Checkout;
