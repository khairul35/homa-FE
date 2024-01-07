'use client';
import { useState } from 'react';
import { ComponentProps, Contact } from './index.props';
import Component from './index.component';
import ContactForm from './form';
import { FormProps } from './form/index.props';

const emptySelectedContact: Contact = {
    id: null,
    name: '',
    accountNumber: '',
    youOwe: null,
    theyOwe: null,
    status: 'Active',
    type: 'Customers',
    website: null,
    registrationNumber: null,
    notes: null,
    isBillingSameAsDelivery: false,
    organizationId: null,
    contactPhoneNumber: [
        {
            countryCode: '+60',
            number: '',
        },
    ],
    contactPrimaryPerson: [
        {
            firstName: '',
            lastName: '',
            email: '',
        },
    ],
    contactBillingAddress: {
        id: 0,
        attention: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
        country:'',
    },
    contactDeliveryAddress: {
        id: 0,
        attention: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
        country:'',
    }
};

const Contact = () => {
    const [currentTab, setCurrentTab] = useState('all');
    const [show, setShow] = useState<'list'|'form'>('form');
    const [selectedContact, setSelectedContact] = useState<Partial<Contact>>(emptySelectedContact)
    const selectedStyle = {
        backgroundColor: '#ECECEC',
        borderBottom: '3px solid #158BB8',
    };

    const onClickAddContact = () => {
        setSelectedContact(emptySelectedContact)
        setShow('form');
    };

    // Function to handle changes in contact name or account number
    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSelectedContact({
            ...selectedContact,
            [name]: value,
        });
    };

    const handleContactAddressesChange = (updatedValues: Partial<Contact>) => {
        if (selectedContact) {
                const updatedDetail: Partial<Contact> = {
                    ...selectedContact,
                    ...updatedValues
                };
                setSelectedContact(updatedDetail);
            }
        };


    // Function to handle changes in contact name or account number
    const handleUseAsDeliverAddressChange = () => {
        setSelectedContact({
            ...selectedContact,
            isBillingSameAsDelivery: !selectedContact?.isBillingSameAsDelivery,
        });
    };
    // Function to handle changes in primary person's details
    const handlePrimaryPersonChange = (index: number, field: string, value: string) => {
        const updatedPrimaryPersons = [...(selectedContact?.contactPrimaryPerson || [])];
        updatedPrimaryPersons[index] = {
            ...updatedPrimaryPersons[index],
            [field]: value,
        };
        setSelectedContact({
            ...selectedContact,
            contactPrimaryPerson: updatedPrimaryPersons,
        });
    };

    // Function to handle changes in phone number details
    const handlePhoneNumberChange = (index: number, field: string, value: string) => {
        const updatedPhoneNumbers = [...(selectedContact?.contactPhoneNumber || [])];
        updatedPhoneNumbers[index] = {
            ...updatedPhoneNumbers[index],
            [field]: value,
        };
        setSelectedContact({
            ...selectedContact,
            contactPhoneNumber: updatedPhoneNumbers,
        });
    };

    const onSaveDetail = () => {
        console.log(selectedContact);
    };

    const onCancel = () => {
        setShow('list');
    };

    const componentProps: ComponentProps = {
        currentTab,
        selectedStyle,
        setCurrentTab,
        onClickAddContact
    };

    const contactFormProps: FormProps = {
        selectedContact,
        setSelectedContact,
        setShow,
        handleContactChange,
        handleUseAsDeliverAddressChange,
        handlePrimaryPersonChange,
        handlePhoneNumberChange,
        onSaveDetail,
        onCancel,
        handleContactAddressesChange,
    };

    if (show == 'list') {
        return (<Component {...componentProps} />);
    }
    if (show == 'form') {
        return (<ContactForm {...contactFormProps} />);
    }
    return(<></>);
};

export default Contact;
