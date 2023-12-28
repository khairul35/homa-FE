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

repository.interceptors.response.use(
    (response) => response,
    async (error) => {
        const {
            config,
            response: { status, data },
        } = error;
        const originalRequest = config;
        if (status == 401) {
            await refreshSession();
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
        }
        return Promise.reject(data);
    }
);

async function refreshSession() {
    try {
        const { data } = await AuthRepository.refreshToken();
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('isLogin', 'true');
    } catch (error) {
        localStorage.setItem("isLogin", "false");
        window.location.reload();
    }
};

export default repository;
