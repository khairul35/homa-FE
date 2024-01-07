'use client';
import Component from "./index.component";
import { ComponentProps, ContactDetailProps } from "./index.props";

const ContactDetails = (props: ContactDetailProps) => {
    const {
        contact,
        addAnotherPerson,
        addPhoneNumber,
        handleContactChange,
        handlePrimaryPersonChange,
        handlePhoneNumberChange,
        onSaveDetail,
        onCancel,
    } = props;

    const componentProps: ComponentProps = {
        contact,
        addAnotherPerson,
        addPhoneNumber,
        handleContactChange,
        handlePrimaryPersonChange,
        handlePhoneNumberChange,
        onSaveDetail,
        onCancel,
    };

    return (<Component {...componentProps} />)
};

export default ContactDetails;
