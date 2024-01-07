'use client';
import { useState } from 'react';
import { ComponentProps, Contact } from './index.props';
import Component from './index.component';
import ContactForm from './form';
import { FormProps } from './form/index.props';

const emptySelectedContact: Contact = {
    id: null,
    name: '',
    accountNumber: null,
    youOwe: null,
    theyOwe: null,
    status: 'Active',
    type: 'Customers',
    website: null,
    registrationNumber: null,
    notes: null,
    isBillingSameAsDelivery: false,
    organizationId: null,
};

const Contact = () => {
    const [currentTab, setCurrentTab] = useState('all');
    const [show, setShow] = useState<'list'|'form'>('list');
    const [selectedContact, setSelectedContact] = useState<Contact>(emptySelectedContact)
    const selectedStyle = {
        backgroundColor: '#ECECEC',
        borderBottom: '3px solid #158BB8',
    };

    const onClickAddContact = () => {
        setSelectedContact(emptySelectedContact)
        setShow('form');
    };

    const componentProps: ComponentProps = {
        currentTab,
        selectedStyle,
        setCurrentTab,
        onClickAddContact
    };

    const contactFormProps: FormProps = {
        selectedContact,
        setShow,
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
