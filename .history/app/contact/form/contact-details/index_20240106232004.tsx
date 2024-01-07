'use client';
import Component from "./index.component";
import { ComponentProps, ContactDetailProps } from "./index.props";

const ContactDetails = (props: ContactDetailProps) => {
    const {
        contact,
        addAnotherPerson,
        addPhoneNumber
    } = props;

    const componentProps: ComponentProps = {
        contact,
        addAnotherPerson,
        addPhoneNumber,
    };

    return (<Component {...componentProps} />)
};

export default ContactDetails;
