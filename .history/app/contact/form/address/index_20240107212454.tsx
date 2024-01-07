'use client';

import Component from "./index.component";
import { ComponentProps, ContactAddressProps } from "./index.props";

const ContactAddress = (props: ContactAddressProps) => {
    const { contact, onCancel } = props;

    const componentProps: ComponentProps = {
        onCancel,
        contact,
    };

    return <Component {...componentProps} />
};

export default ContactAddress;
