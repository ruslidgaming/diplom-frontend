import axios from "axios";

const baseUrl = window.location.protocol + '//' + window.location.host;

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
    return response;
}, async function (error) {
    const originalRequest = error.config
    if (error.response && error.response.status === 401 && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const refreshToken = localStorage.getItem("refresh_token");
            const response = await axios.get<{ jwtToken: string, refreshToken: string }>('/Users/RefreshAuthorization', {
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
    console.log(error);
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
