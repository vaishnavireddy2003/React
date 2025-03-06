import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Our Website</h1>
      <p>Explore more about our services and get in touch with us.</p>

      <Link to="/about" style={{ textDecoration: "none", color: "blue", marginRight: "10px" }}>
        👉 Go to About Page
      </Link>

      <Link to="/contact" style={{ textDecoration: "none", color: "blue" }}>
        📞 Contact Us
      </Link>
    </div>
  );
}

export default Home;
