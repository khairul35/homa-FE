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
        return repository.get('');
    },
    findById(contactId: number) {
        return repository.get(`/${contactId}`);
    },
    createContact(body: CreateContactProps) {
        return repository.post('', body);
    },
    updateContact(contactId: number, body: UpdateContactProps) {
        return repository.put(`/${contactId}`, body);
    },
    updateBillingAddress(contactId: number, body: UpdateBillingAddressProps) {
        return repository.put(`/${contactId}/billing-address`, body);
    },
    updateDeliveryAddress(contactId: number, body: UpdateDeliveryAddressProps) {
        return repository.put(`/${contactId}/delivery-address`, body);
    },
    deleteContact(contactId: number) {
        return repository.delete(`/${contactId}`);
    },
};
