import { Contact } from "../../index.props";

export interface ContactAddressProps {
    contact: Partial<Contact>;
    onCancel: () => void;
    handleUseAsDeliverAddressChange: () => void;
    handleContactAddressesChange: (fieldName: string, value: string) => void;
}

export interface ComponentProps {
    contact: Partial<Contact>
    onCancel: () => void;
    handleUseAsDeliverAddressChange: () => void;
    handleContactAddressesChange: (fieldName: string, value: string) => void;
}
