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

    const componentProps: ComponentProps = {
        menu,
        selectedContact,
        setMenu,
        onBack,
    };

    return (<Component {...componentProps} />)
};

export default ContactForm;
