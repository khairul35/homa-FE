export interface CreateContactProps {
    contactName: string;
    accountNumber: string;
    youOwe: number;
    theyOwe: number;
    status: 'Archived' | 'Active' | 'Inactive';
    type: 'Customers' | 'Suppliers';
    website: string;
    registrationNumber: string;
    deletedDate?: Date | null;
    notes: string;
    isBillingSameAsDelivery: boolean;
    organizationId: number;
    contactPrimaryPerson: Partial<CreateContactPrimaryPersonProps>[];
    contactPhoneNumber: Partial<CreateContactPhoneNumber>[];
}
export interface UpdateContactProps {
    contactName: string;
    accountNumber: string;
    youOwe: number;
    theyOwe: number;
    status: 'Archived' | 'Active' | 'Inactive';
    type: 'Customers' | 'Suppliers';
    website: string;
    registrationNumber: string;
    deletedDate?: Date | null;
    notes: string;
    isBillingSameAsDelivery: boolean;
    organizationId: number;
    contactPrimaryPerson: Partial<CreateContactPrimaryPersonProps>[];
    contactPhoneNumber: Partial<CreateContactPhoneNumber>[];
}

export interface UpdateDeliveryAddressProps {
    attention: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

export interface UpdateBillingAddressProps {
    attention: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

export interface CreateContactPrimaryPersonProps {
    firstName: string;
    lastName: string;
    email: string;
}

export interface CreateContactPhoneNumber {
    countryCode: string;
    number: string;
}
