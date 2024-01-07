import { Contact } from "../../index.props";

export interface ContactDetailProps {
    contact: Partial<Contact>;
    addAnotherPerson: () => void;
    addPhoneNumber: () => void;
}

export interface ComponentProps {
    contact: Partial<Contact>;
    addAnotherPerson: () => void;
    addPhoneNumber: () => void;
}

