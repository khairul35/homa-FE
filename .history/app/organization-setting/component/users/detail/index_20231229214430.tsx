import React, { useState, useEffect } from 'react';
import { Props, UserDetailProps } from './props';
import Component from './component';

const UserDetail = (userDetailProps: UserDetailProps) => {
    const {
        onBack,
        onBackToMain,
        createNewUser,
        user,
        numberOfUser,
        updateUser,
        onSave,
        closeMessage,
        error,
        notification
    } = userDetailProps;

    const props: Props = {
        onBack,
        onBackToMain,
        updateUser,
        onSave,
        closeMessage,
        createNewUser,
        user,
        numberOfUser,
        error,
        notification,
    };

    return (<Component {...props}></Component>);
};

export default UserDetail;
