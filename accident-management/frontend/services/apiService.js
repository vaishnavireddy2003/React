import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// ✅ Login User
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
        return response.data;
    } catch (error) {
        console.error('Login error:', error.response?.data || error.message);
        return null;
    }
};

// ✅ Register User
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Registration error:', error.response?.data || error.message);
        return null;
    }
};

// ✅ Get All Accidents
export const getAccidents = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/accidents`);
        return response.data;
    } catch (error) {
        console.error('Error fetching accidents:', error.response?.data || error.message);
        return [];
    }
};

// ✅ Report an Accident
export const reportAccident = async (accidentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/accidents`, accidentData);
        return response.data;
    } catch (error) {
        console.error('Error reporting accident:', error.response?.data || error.message);
        return null;
    }
};

// ✅ Delete an Accident
export const deleteAccident = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/accidents/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting accident:', error.response?.data || error.message);
        return null;
    }
};
