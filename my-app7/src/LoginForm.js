import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Please fill out both fields.');
      return;
    }

    // Simulate login logic
    if (email === 'user@example.com' && password === 'password') {
      setErrorMessage('');
      alert('Login successful!');
    } else {
      setErrorMessage('Invalid credentials.');
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', margin: '10px auto', padding: '8px', width: '100%' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', margin: '10px auto', padding: '8px', width: '100%' }}
      />
      <button onClick={handleLogin} style={{ padding: '10px', width: '100%', background: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}>
        Login
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default LoginForm;
