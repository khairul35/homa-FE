import repository from "../repository";
import {
    CreateContactProps,
    UpdateBillingAddressProps,
    UpdateContactProps,
    UpdateDeliveryAddressProps,
} from "./props";

const resource = "/api/contact";

const api = {
    findAllContact() {
        return repository.get(`${resource}`);
    },
    findById(contactId: number) {
        return repository.get(`${resource}/${contactId}`);
    },
    createContact(body: CreateContactProps) {
        return repository.post(`${resource}`, body);
    },
    updateContact(contactId: number, body: UpdateContactProps) {
        return repository.put(`${resource}${resource}/${contactId}/billing-address`, body);
    },
    updateDeliveryAddress(contactId: number, body: UpdateDeliveryAddressProps) {
        return repository.put(`${resource}/${contactId}/delivery-address`, body);
    },
    deleteContact(contactId: number) {
        return repository.delete(`${resource}/${contactId}`);
    },
};
