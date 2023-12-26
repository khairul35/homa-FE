import repository from "./repository";

const resource = "/api/auth";

const api = {
    login(username: string, password: string) {
        return repository.post(
            `${resource}/login`,
            { username, password },
        );
    },
    refreshToken() {
        return repository.post(
            `${resource}/refreshToken`,
            { refreshToken: localStorage.getItem('refreshToken') },
        );
    },
    logout() {
        return repository.post(`${resource}/logout`);
    },
    logoutAllDevice() {
        return repository.post(`${resource}/logout/all-device`);
    },
};

export default api;
