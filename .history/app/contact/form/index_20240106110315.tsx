'use client';

import Component from "./index.component";
import { ComponentProps, FormProps } from "./index.props";

const ContactForm = (props: FormProps) => {
    const { setShow } = props;

    const onBack = () => {
        setShow('list');
    };

    const componentProps: ComponentProps = {
        onBack,
    };

    return (<Component {...componentProps} />)
};

export default ContactForm;
