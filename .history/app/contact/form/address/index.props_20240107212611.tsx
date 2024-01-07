import { Contact } from "../../index.props";

export interface ContactAddressProps {
    contact: Partial<Contact>;
    onCancel: () => void;
}

export interface ComponentProps {
    contact: Partial<Contact>
    onCancel: () => void;
}
