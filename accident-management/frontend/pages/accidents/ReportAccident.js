import React, { useState } from 'react';
import { reportAccident } from '../../services/apiService';
import './ReportAccident.css';

const ReportAccident = () => {
    const [formData, setFormData] = useState({ description: '', location: '' });
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await reportAccident(formData);
            if (response && response.success) {
                setMessage('Accident reported successfully!');
                setFormData({ description: '', location: '' });
            } else {
                setMessage('Failed to report accident.');
            }
        } catch (error) {
            setMessage('Error reporting accident. Please try again.');
        }
    };

    return (
        <div className="report-container">
            <h2 className='text-white'>Report an Accident</h2>
            <form onSubmit={handleSubmit}>
                <div className='my-3'>
                <input
                    type="text"
                    placeholder="Accident Description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                />
                </div>
                <div className='my-3'>
                <input
                    type="text"
                    placeholder="Location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                />
                </div>
                <div className='my-3'>
                <button className='btn btn-success' type="submit">Report Accident</button>
                </div>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default ReportAccident;
