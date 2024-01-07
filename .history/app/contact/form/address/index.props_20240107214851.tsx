import { Contact } from "../../index.props";

export interface ContactAddressProps {
    contact: Partial<Contact>;
    onCancel: () => void;
    handleContactChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ComponentProps {
    contact: Partial<Contact>
    onCancel: () => void;
    handleContactChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
