import { Organization } from "../props";

export interface CompanyMenuProps {
    organizations: Organization[];
    organization: Partial<Organization>;
}