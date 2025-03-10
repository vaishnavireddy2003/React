import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

    // Generate random 6-digit OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOtp(otpCode);

    // Store OTP temporarily
    localStorage.setItem("resetOtp", otpCode);
    localStorage.setItem("resetEmail", email);

    setMessage(`Your OTP is: ${otpCode} (for testing purposes)`);
    setStep(2);
  };

  // Verify OTP
  const verifyOtp = () => {
    const storedOtp = localStorage.getItem("resetOtp");
    if (otp === storedOtp) {
      setMessage("OTP verified. Set a new password.");
      setStep(3);
    } else {
      setMessage("Invalid OTP. Try again.");
    }
  };

  // Reset Password
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
    <div>
      <h2>Forgot Password</h2>

      {step === 1 && (
        <>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      )}

      {step === 2 && (
        <>
          <label>Enter OTP</label>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}

      {step === 3 && (
        <>
          <label>New Password</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />

          <label>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

          <button onClick={resetPassword}>Reset Password</button>
        </>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
