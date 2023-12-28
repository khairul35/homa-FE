import axios from 'axios';
import AuthRepository from './auth';

const repository = axios.create({
    baseURL: 'http://localhost:3000',
});

// Request interceptor to add Bearer token to outgoing requests
repository.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

let isRefreshing = false;
let failedQueue: any = [];

// Function to refresh the session and retry failed requests
async function retryFailedRequests(error: any) {
    console.log(error);
    if (!isRefreshing) {
        isRefreshing = true;
        try {
            const { data } = await AuthRepository.refreshToken();
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            localStorage.setItem('isLogin', 'true');

            failedQueue.forEach((prom: any) => {
                prom.resolve(repository(prom.originalRequest));
            });
            failedQueue = [];
        } catch (error) {
            localStorage.setItem('isLogin', 'false');
            window.location.reload();
            failedQueue.forEach((prom: any) => {
                prom.reject(error);
            });
            failedQueue = [];
        } finally {
            isRefreshing = false;
        }
    }
}

// Response interceptor to handle failed requests due to expired tokens
repository.interceptors.response.use(
    (response) => response,
    async (error) => {
        const {
            config,
            response: { status },
        } = error;

        if (status === 401) {
            const originalRequest = config;
            if (!isRefreshing) {
                isRefreshing = true;
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject, originalRequest });
                    retryFailedRequests(error);
                }).then((res) => {
                    return res;
                }).catch((err) => {
                    return Promise.reject(err);
                });
            } else {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject, originalRequest });
                }).then((res) => {
                    return res;
                }).catch((err) => {
                    return Promise.reject(err);
                });
            }
        }
        return Promise.reject(error.response);
    }
);

export default repository;
