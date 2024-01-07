import { Contact } from "../../index.props";

export interface ContactDetailProps {
    contact: Partial<Contact>;
    addAnotherPerson: () => void;
    addPhoneNumber: () => void;
    handleContactChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePrimaryPersonChange: (index: number, field: string, value: string) => void;
    handlePhoneNumberChange: (index: number, field: string, value: string) => void;
    onSaveDetail: () => void;
    onCancel: () => void;
}

export interface ComponentProps {
    contact: Partial<Contact>;
    addAnotherPerson: () => void;
    addPhoneNumber: () => void;
    handleContactChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePrimaryPersonChange: (index: number, field: string, value: string) => void;
    handlePhoneNumberChange: (index: number, field: string, value: string) => void;
    onSaveDetail: () => void;
    onCancel: () => void;
}

