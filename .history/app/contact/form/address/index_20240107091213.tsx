'use client';

import Component from "./index.component";
import { ComponentProps, ContactAddress } from "./index.props";

const ContactAddress = (props: ContactAddress) => {
    const { onCancel } = props;

    const componentProps: ComponentProps = {
        onCancel,
    };

    return <Component {...componentProps} />
};

export default ContactAddress;
