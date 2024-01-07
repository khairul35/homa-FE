'use client';
import { ComponentProps, ContactDetailProps } from "./index.props";

const ContactDetails = (props: ContactDetailProps) => {
    const { contact } = props;
    const componentProps: ComponentProps = {
        contact,
    };
};

export default ContactDetails;
