export interface UsersProps {
    onBack: () => void;
}

export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    roleId: number;
}

export interface Props {
    users: User[];
    onBack: () => void;
}
