import axios from 'axios';

const API = axios.create({
    baseURL :  'https://url-shortner-sde-backend.onrender.com/api',
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