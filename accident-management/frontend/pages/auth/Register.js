import React, { useState } from 'react';
import { registerUser } from '../../services/apiService';
import './Register.css'


const Register = () => {
    const [userData, setUserData] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await registerUser(userData);
        if (response) {
            alert('Registration successful!');
        } else {
            alert('Registration failed!');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='p-1 m-2'>
            <div className='my-3'>
            <input
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            </div>
            <div className='my-3'>
            <input
                type="password"
                placeholder="Password"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            />
            </div>
            <div className='my-3'>
            <button className='btn btn-warning' type="submit">Register</button>
            </div>
        </form>
    );
};

export default Register;
