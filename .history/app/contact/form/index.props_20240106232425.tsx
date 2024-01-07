import { Contact } from "../index.props";

export interface ComponentProps {
    menu: string;
    selectedContact: Partial<Contact>;
    setMenu: (menu: string) => void;
    onBack: () => void;
    addAnotherPerson: () => void;
    addPhoneNumber: () => void;
}

export interface FormProps {
    selectedContact: Partial<Contact>;
    setShow: (show: 'list' | 'form') => void;
    setSelectedContact: (contact: Partial<Contact>) => void;
}
