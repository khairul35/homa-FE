import { User } from "../props";

export interface UserDetailProps {
    onBack: () => void;
    onSave: () => void;
    onBackToMain: () => void;
    updateUser: (updatedValues: Partial<User>) => void;
    closeMessage: () => void;
    createNewUser: () => void;
    notification: { message: string; type: 'success' | 'error' | 'loading' } | null;
    user: Partial<User> | null;
    numberOfUser: number;
    error: string | null;
}

export interface Props {
    onBack: () => void;
    onBackToMain: () => void;
    onSave: () => void;
    createNewUser: () => void;
    updateUser: (updatedValues: Partial<User>) => void;
    closeMessage: () => void;
    notification: { message: string; type: 'success' | 'error' | 'loading' } | null;
    user: Partial<User> | null;
    numberOfUser: number;
    error: string | null;
}
