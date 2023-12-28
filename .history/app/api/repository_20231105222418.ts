import axios from 'axios';

const repository = axios.create({
    baseURL: 'http://localhost:3000',
});

repository.interceptors.response.use(
    (response) => response,
    async (error) => {
        const {
            config,
            response: { status, data },
        } = error;
        const originalRequest = config;
        return Promise.reject(data);
    }
);

export default repository;
