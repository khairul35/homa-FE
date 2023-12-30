import { User } from "../props";

export interface UserDetailProps {
    onBack: () => void;
    onBackToMain: () => void;
    updateUser: (updatedValues: Partial<User>) => void;
    user: User | null;
    numberOfUser: number;
    error: string | null;
}

export interface Props {
    onBack: () => void;
    onBackToMain: () => void;
    updateUser: (updatedValues: Partial<User>) => void;
    user: User | null;
    numberOfUser: number;
    error: string | null;
}