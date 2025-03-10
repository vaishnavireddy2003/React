import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const rememberedUser = JSON.parse(localStorage.getItem("rememberedUser"));
    if (rememberedUser) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find((user) => user.email === email && user.password === password);

    if (validUser) {
      localStorage.setItem("loggedInUser", JSON.stringify(validUser));

      if (rememberMe) {
        localStorage.setItem("rememberedUser", JSON.stringify(validUser));
      }

      navigate("/dashboard");
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <div>
          <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
          <label>Remember Me</label>
        </div>

        <button type="submit">Login</button>

        {message && <p>{message}</p>}

        <p>
          New User? <button onClick={() => navigate("/signup")}>Sign Up</button>
        </p>
        <p>
          Forgot Password? <button onClick={() => navigate("/forgot-password")}>Reset</button>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
