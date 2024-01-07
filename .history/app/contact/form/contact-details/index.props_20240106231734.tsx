import { Contact } from "../../index.props";

export interface ContactDetailProps {
    contact: Contact;
    addAnotherPerson: () => void;
    addPhoneNumber: () => void;
}

export interface ComponentProps {
    contact: Contact;
    addAnotherPerson: () => void;
    addPhoneNumber: () => void;
}

