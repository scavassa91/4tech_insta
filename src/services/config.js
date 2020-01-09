import axios from 'axios';

export const axios4Tech = axios.create({
    baseURL: 'http://172.25.40.72:3000/',
    timeout: 10000
});

axios4Tech.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
        config.headers["Authorization"] = `Bearer ${getToken()}`;
    }

    return config;
});

axios4Tech.interceptors.response.use(null, (error) => {
    console.log(error.response);
    return Promise.reject(error);
});

export const setToken = (token) => {
    localStorage.setItem("token", token);
};

const getToken = () => {
    return localStorage.getItem("token");
}