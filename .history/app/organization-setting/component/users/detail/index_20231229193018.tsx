import React, { useState, useEffect } from 'react';
import { Props, UserDetailProps } from './props';
import Component from './component';

const UserDetail = (userDetailProps: UserDetailProps) => {
    const { onBack, onBackToMain, user, numberOfUser } = userDetailProps;

    const props: Props = {
        onBack,
        onBackToMain,
        user,
        numberOfUser
    };

    return (<Component {...props}></Component>);
};

export default UserDetail;
