import repository from "../repository";
import { CreateOrganizationProps, UpdateOrganizationProps } from "./props";

const resource = '/api/organization';

const api = {
    findMyOrganization() {
        return repository.get(`${resource}/me`);
    },
    findMyOrganizations() {
        return repository.get(`${resource}/me/all`);
    },
    createOrganization(body: CreateOrganizationProps) {
        return repository.post(`${resource}`, body);
    },
    updateOrganization(body: UpdateOrganizationProps) {
        return repository.put(`${resource}`, body);
    },
    updateCurrentOrganization(organizationId: number) {
        return repository.put(`${resource}/current-organization/${organizationId}`);
    },
};

export default api;