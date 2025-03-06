import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>About Us</h1>
      <p>We are a dedicated team committed to delivering high-quality services.</p>

      <Link to="/" style={{ textDecoration: "none", color: "blue", marginRight: "10px" }}>
        👈 Back to Home
      </Link>

      <Link to="/contact" style={{ textDecoration: "none", color: "blue" }}>
        📞 Contact Us
      </Link>
    </div>
  );
}

export default About;
