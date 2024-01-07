import { Contact } from "../../index.props";

export interface ContactAddressProps {
    contact: Contact;
    onCancel: () => void;
}

export interface ComponentProps {
    contact: Contact
    onCancel: () => void;
}
