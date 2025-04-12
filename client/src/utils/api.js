import axios from 'axios';
const isProduction = import.meta.env.MODE === 'production';

const API = axios.create({
  baseURL: isProduction
    ? import.meta.env.VITE_API_URL_PROD
    : import.meta.env.VITE_API_URL_DEV,
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