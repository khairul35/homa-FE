import { Contact } from "../index.props";

export interface ComponentProps {
    menu: string;
    setMenu: (menu: string) => void;
    onBack: () => void;
}

export interface FormProps {
    selectedContact: Contact
    setShow: (show: 'list' | 'form') => void;
}
