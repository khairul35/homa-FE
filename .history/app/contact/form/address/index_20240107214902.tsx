'use client';

import Component from "./index.component";
import { ComponentProps, ContactAddressProps } from "./index.props";

const ContactAddress = (props: ContactAddressProps) => {
    const { contact, onCancel, handleContactChange } = props;

    const componentProps: ComponentProps = {
        onCancel,
        handleContactChange,
        contact,
    };

    return <Component {...componentProps} />
};

export default ContactAddress;
