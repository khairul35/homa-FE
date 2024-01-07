'use client';
import { useState } from 'react';
import { ComponentProps } from './index.props';
import Component from './index.component';

const Contact = () => {
    const [currentTab, setCurrentTab] = useState('all');
    const [show, setShow] = useState<'list'|'form'>('list');
    const selectedStyle = {
        backgroundColor: '#ECECEC',
        borderBottom: '3px solid #158BB8',
    };

    const onClickAddContact = () => {

    }

    const componentProps: ComponentProps = {
        currentTab,
        selectedStyle,
        setCurrentTab,
        onClickAddContact
    };

    return (<Component {...componentProps} />)
};

export default Contact;
