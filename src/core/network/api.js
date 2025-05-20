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

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
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