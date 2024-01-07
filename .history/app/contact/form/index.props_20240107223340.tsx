import { Contact } from "../index.props";

export interface ComponentProps {
    menu: string;
    selectedContact: Partial<Contact>;
    setMenu: (menu: string) => void;
    onBack: () => void;
    addAnotherPerson: () => void;
    addPhoneNumber: () => void;
    handleContactChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleUseAsDeliverAddressChange: () => void;
    handlePrimaryPersonChange: (index: number, field: string, value: string) => void;
    handlePhoneNumberChange: (index: number, field: string, value: string) => void;
    onSaveDetail: () => void;
    onCancel: () => void;
    handleContactAddressesChange: (fieldName: string, value: string) => void;
}

export interface FormProps {
    selectedContact: Partial<Contact>;
    setShow: (show: 'list' | 'form') => void;
    setSelectedContact: (contact: Partial<Contact>) => void;
    handleContactChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleUseAsDeliverAddressChange: () => void;
    handlePrimaryPersonChange: (index: number, field: string, value: string) => void;
    handlePhoneNumberChange: (index: number, field: string, value: string) => void;
    onSaveDetail: () => void;
    onCancel: () => void;
    handleContactAddressesChange: (fieldName: string, value: string) => void;
}
