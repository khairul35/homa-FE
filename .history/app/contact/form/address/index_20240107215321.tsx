'use client';

import Component from "./index.component";
import { ComponentProps, ContactAddressProps } from "./index.props";

const ContactAddress = (props: ContactAddressProps) => {
    const { contact, onCancel, handleUseAsDeliverAddressChange } = props;

    const componentProps: ComponentProps = {
        onCancel,
        handleUseAsDeliverAddressChange,
        contact,
    };

    return <Component {...componentProps} />
};

export default ContactAddress;
