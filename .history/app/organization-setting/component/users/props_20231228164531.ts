import { UserDetailProps } from "./detail/props";

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
    role: string;
}

export interface Props {
    users: User[];
    show: string;
    detailProps: UserDetailProps;
    onBack: () => void;
    handleRowClick: () => void;
}
