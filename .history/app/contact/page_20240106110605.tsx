'use client';
import { useState } from 'react';
import { ComponentProps } from './index.props';
import Component from './index.component';
import ContactForm from './form';
import { FormProps } from './form/index.props';

const Contact = () => {
    const [currentTab, setCurrentTab] = useState('all');
    const [show, setShow] = useState<'list'|'form'>('list');
    const selectedStyle = {
        backgroundColor: '#ECECEC',
        borderBottom: '3px solid #158BB8',
    };

    const onClickAddContact = () => {
        setShow('form');
    };

    const componentProps: ComponentProps = {
        currentTab,
        selectedStyle,
        setCurrentTab,
        onClickAddContact
    };

    const contactFormProps: FormProps = {
        setShow,
    };

    if (show == 'list') {
        return (<Component {...componentProps} />);
    }
    if (show == 'form') {
        return (<ContactForm {...contactFormProps} />)
    }
    return(<></>);
};

export default Contact;
