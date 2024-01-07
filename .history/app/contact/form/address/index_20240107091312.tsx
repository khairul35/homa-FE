'use client';

import Component from "./index.component";
import { ComponentProps, ContactAddressProps } from "./index.props";

const ContactAddress = (props: ContactAddressProps) => {
    const { onCancel } = props;

    const componentProps: ComponentProps = {
        onCancel,
    };

    return <Component {...componentProps} />
};

export default ContactAddress;
