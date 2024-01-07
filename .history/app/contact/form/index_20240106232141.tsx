'use client';

import { useState } from "react";
import Component from "./index.component";
import { ComponentProps, FormProps } from "./index.props";

const ContactForm = (props: FormProps) => {
    const { selectedContact, setShow, setSelectedContact } = props;

    const [menu, setMenu] = useState<string>('details');

    const onBack = () => {
        setShow('list');
    };

    const addAnotherPerson = () => {
        const arr = selectedContact?.contactPrimaryPerson || [];
        arr.push({
            firstName: '',
            lastName: '',
            email: '',
        });
        const updatedDetail = {
            ...selectedContact,
            ...arr
        };
        setSelectedContact(updatedDetail);
    };

    const addPhoneNumber = () => {
        const arr = selectedContact?.contactPhoneNumber || [];
        arr.push({
            countryCode: '+60',
            number: '',
        });
        const updatedDetail = {
            ...selectedContact,
            ...arr
        };
        setSelectedContact(updatedDetail);
    };
    const componentProps: ComponentProps = {
        menu,
        selectedContact,
        addAnotherPerson,
        addPhoneNumber,
        setMenu,
        onBack,
    };

    return (<Component {...componentProps} />)
};

export default ContactForm;
