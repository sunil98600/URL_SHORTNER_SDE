import axios from 'axios';
const isProduction = import.meta.env.MODE === 'production';

const API = axios.create({
  baseURL: isProduction
    ? "https://url-shortner-sde-backend.onrender.com/api"
    : 'http://localhost:5000/api',
});

API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  });

export default API;