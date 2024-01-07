import { Contact } from "../../index.props";

export interface ContactAddressProps {
    contact: Partial<Contact>;
    onCancel: () => void;
    handleUseAsDeliverAddressChange: () => void;
    handleContactAddressesChange: (value: Partial<Contact>) => void;
}

export interface ComponentProps {
    contact: Partial<Contact>
    onCancel: () => void;
    handleUseAsDeliverAddressChange: () => void;
    handleContactAddressesChange: (value: Partial<Contact>) => void;
}
