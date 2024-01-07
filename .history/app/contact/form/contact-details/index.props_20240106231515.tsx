import { Contact } from "../../index.props";

export interface ContactDetailProps {
    contact: Contact;
}

export interface ComponentProps {
    contact: Contact;
    addAnotherPerson: () => void;
    addPhoneNumber: () => void;
}

