import { Contact } from "../../index.props";

export interface ContactAddressProps {
    onCancel: () => void;
}

export interface ComponentProps {
    contact: Contact
    onCancel: () => void;
}
