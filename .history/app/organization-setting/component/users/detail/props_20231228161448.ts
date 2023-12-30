import { User } from "../props";

export interface UserDetailProps {
    onBack: () => void;
    onBackToMain: () => void;
    user: User;
}
