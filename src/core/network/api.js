import axios from "axios";

// const baseUrl = window.location.protocol + '//' + window.location.host;
const baseUrl = "http://127.0.0.1:8000";

const instance = axios.create({
    baseURL: baseUrl + '/api',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config;
})

instance.interceptors.response.use(function (response) {
    response.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return response;
}, function (error) {
    const originalRequest = error.config
    if (error.response && error.response.status === 401 && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const refreshToken = localStorage.getItem("refresh_token");
            const response = axios.get < { jwtToken, refreshToken } > ('/Users/RefreshAuthorization', {
                headers: {
                    Authorization: `Bearer ${refreshToken}`
                }
            });
            localStorage.setItem("jwtToken", response.data.jwtToken);
            localStorage.setItem("refresh_token", response.data.refreshToken);
            return instance.request(originalRequest)
        } catch (refreshError) {
            return Promise.reject(refreshError);
        }
    }
    throw error;
});

export const baseInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH',
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
    },
})

export default instance;