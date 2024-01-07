'use client';

import { ComponentProps, ContactAddress } from "./index.props";

const ContactAddress = (props: ContactAddress) => {
    const { onCancel } = props;

    const componentProps: ComponentProps = {
        onCancel,
    };
};

export default ContactAddress;
