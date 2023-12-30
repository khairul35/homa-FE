import repository from "../repository";
import { CreateUserProps, UpdateUserProps } from "./props";

const resource = '/api/user';

const api = {
    findAllUsers() {
        return repository.get(`${resource}`);
    },
    findUserById(id: number) {
        return repository.get(`${resource}/${id}`);
    },
    createUser(body: Partial<CreateUserProps>) {
        return repository.post(`${resource}`, body);
    },
    updateUser(id: number, body: Partial<UpdateUserProps>) {
        return repository.put(`${resource}/${id}`, body);
    },
    deleteUser(id: number) {
        return repository.put(`${resource}/${id}`);
    },
}

export default api;
