import { Organization } from "../props";

export interface Props {
    selectedOrganization: Partial<Organization> | null;
    error: string | null;
    numberOfOrganizations: number;
    notification: { message: string; type: 'success' | 'error' | 'loading' } | null;
    backToList: () => void;
    backToMainSetting: () => void;
    onSave: () => void;
}
