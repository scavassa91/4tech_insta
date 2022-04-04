import axios from 'axios';

export const axios4Tech = axios.create({
    baseURL: 'http://172.25.40.72:3000/',
    timeout: 10000
});

axios4Tech.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axios4Tech.interceptors.response.use(null, (error) => {
    return Promise.reject(error);
});