import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Generate OTP and display it on screen (for testing purposes)
  const sendOtp = () => {
    const user = users.find((user) => user.email === email);

    if (!user) {
      setMessage("Email not found. Please sign up.");
      return;
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOtp(otpCode);

    localStorage.setItem("resetOtp", otpCode);
    localStorage.setItem("resetEmail", email);

    setMessage(`Your OTP is: ${otpCode} (for testing purposes)`);
    setStep(2);
  };

  const verifyOtp = () => {
    const storedOtp = localStorage.getItem("resetOtp");
    if (otp === storedOtp) {
      setMessage("OTP verified. Set a new password.");
      setStep(3);
    } else {
      setMessage("Invalid OTP. Try again.");
    }
  };

  const resetPassword = () => {
    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const userIndex = users.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
      users[userIndex].password = newPassword;
      localStorage.setItem("users", JSON.stringify(users));

      localStorage.removeItem("resetOtp");
      localStorage.removeItem("resetEmail");

      alert("Password reset successful! Login with your new password.");
      navigate("/");
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>Forgot Password</h2>

        {step === 1 && (
          <>
            <div className="input-container">
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button className="forgot-btn" onClick={sendOtp}>Send OTP</button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button className="forgot-btn" onClick={verifyOtp}>Verify OTP</button>
          </>
        )}

        {step === 3 && (
          <>
            <div className="input-container">
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-container">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button className="forgot-btn" onClick={resetPassword}>Reset Password</button>
          </>
        )}

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
