export interface ComponentProps {
    currentTab: string;
    selectedStyle: any;
    onClickAddContact: () => void;
    setCurrentTab: (tab: string) => void;
}

export interface Contact {
    id: number | null;
    accountNumber: string | null;
    name: string | null;
    youOwe: number | null;
    theyOwe: number | null;
    status: 'Archived' | 'Active' | 'Inactive';
    type: 'Customers' | 'Suppliers';
    website: string | null;
    registrationNumber: string | null;
    deletedDate?: Date | null;
    notes: string | null;
    isBillingSameAsDelivery: boolean;
    organizationId: number | null;
    contactPhoneNumber?: ContactPhoneNumber[];
    contactPrimaryPerson?: ContactPrimaryPerson[];
    contactBillingAddress: contactBillingAddress;
    contactDeliveryAddress: contactDeliveryAddress;
}

export interface contactBillingAddress {
    id: number;
    attention: string | null;
    addressLine1: string | null;
    addressLine2: string | null;
    city: string | null;
    state: string | null;
    postalCode: string | null;
    country: string | null;
    [key: string]: string | number | null;
}

export interface contactDeliveryAddress {
    id: number;
    attention: string | null;
    addressLine1: string | null;
    addressLine2: string | null;
    city: string | null;
    state: string | null;
    postalCode: string | null;
    country: string | null;
    [key: string]: string | number | null;
}

export interface ContactPhoneNumber {
    countryCode: string | null;
    number: string;
}

export interface ContactPrimaryPerson {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
}
