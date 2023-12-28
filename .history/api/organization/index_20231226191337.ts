import repository from "../repository";
import { CreateOrganizationProps } from "./props";

const resource = '/api/auth';

const api = {
    findMyOrganization() {
        return repository.get(`${resource}/me`);
    },
    findMyOrganizations() {
        return repository.get(`${resource}/me/all`);
    },
    createOrganization(body: CreateOrganizationProps) {
        return repository.post(`${resource}`, body);
    }
};

export default api;