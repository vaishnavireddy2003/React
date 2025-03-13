import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/apiService';
import './Login.css';

const Login = () => {
    const [userData, setUserData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await loginUser(userData);
            if (response && response.token) {
                localStorage.setItem('token', response.token); // Store token
                alert('Login successful!');
                navigate('/dashboard'); // Redirect to dashboard or home page
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            setError('Login failed! Please try again.');
        }
    };

    return (
        <div className='body' style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='my-3'>
                <input
                    type="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    required
                />
                </div>
                <div className='my-3'>
                <input
                    type="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    required
                />
                </div>
                <div className='my-3'>
                <button className='btn btn-success p-2 w-100' type="submit">Login</button>
                </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Login;
