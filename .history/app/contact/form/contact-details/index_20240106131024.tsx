'use client';
import Component from "./index.component";
import { ComponentProps, ContactDetailProps } from "./index.props";

const ContactDetails = (props: ContactDetailProps) => {
    const { contact } = props;
    const componentProps: ComponentProps = {
        contact,
    };

    return (<Component {...componentProps} />)
};

export default ContactDetails;
