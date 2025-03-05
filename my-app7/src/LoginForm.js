import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!email || !password) {
      setErrorMessage("⚠ Please fill out both fields.");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("⚠ Enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("⚠ Password must be at least 6 characters.");
      return;
    }

    if (email === "user@example.com" && password === "password") {
      setSuccessMessage("✅ Login successful!");
      setEmail("");
      setPassword("");
    } else {
      setErrorMessage("❌ Invalid email or password.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f4f4f4",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "30px",
          textAlign: "center",
          border: "1px solid #ccc",
          borderRadius: "10px",
          boxShadow: "3px 3px 15px rgba(0,0,0,0.1)",
          background: "white",
        }}
      >
        <h2 style={{ marginBottom: "20px", fontSize: "24px" }}>Login</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorMessage("");
            }}
            style={{
              padding: "14px",
              width: "calc(100% - 2px)",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorMessage("");
            }}
            style={{
              padding: "14px",
              width: "calc(100% - 2px)",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />
          <button
            onClick={handleLogin}
            style={{
              padding: "14px",
              width: "100%",
              background: "#007BFF",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#0056b3")}
            onMouseOut={(e) => (e.target.style.background = "#007BFF")}
          >
            Login
          </button>
        </div>
        {errorMessage && <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>{errorMessage}</p>}
        {successMessage && <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>{successMessage}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
