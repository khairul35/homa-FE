'use client';
import Component from "./index.component";
import { ComponentProps, ContactDetailProps } from "./index.props";

const ContactDetails = (props: ContactDetailProps) => {
    const { contact } = props;

    const addAnotherPerson = () => {
        const arr = contact?.contactPrimaryPerson || [];
        arr.push({
            firstName: '',
            lastName: '',
            email: '',
        });
        contact.contactPrimaryPerson = arr;
    };

    const addPhoneNumber = () => {
        const arr = contact?.contactPhoneNumber || [];
        arr.push({
            countryCode: '+60',
            number: '',
        });
        contact.contactPhoneNumber = arr;
    };

    const componentProps: ComponentProps = {
        contact,
        addAnotherPerson,
        addPhoneNumber,
    };

    return (<Component {...componentProps} />)
};

export default ContactDetails;
