import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; 

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple authentication check (Replace this with actual authentication logic)
    if (email === "admin@abc.com" && password === "admin") {
      setIsAuthenticated(true);
      navigate("/catalog"); // Redirect to the catalog page
    } else {
      alert("Invalid email or password!"); // Show an error message
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Log in to your account</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
