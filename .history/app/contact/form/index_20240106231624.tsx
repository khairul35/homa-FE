'use client';

import { useState } from "react";
import Component from "./index.component";
import { ComponentProps, FormProps } from "./index.props";

const ContactForm = (props: FormProps) => {
    const { selectedContact, setShow } = props;

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
        selectedContact.contactPrimaryPerson = arr;
    };

    const addPhoneNumber = () => {
        const arr = selectedContact?.contactPhoneNumber || [];
        arr.push({
            countryCode: '+60',
            number: '',
        });
        selectedContact.contactPhoneNumber = arr;
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
