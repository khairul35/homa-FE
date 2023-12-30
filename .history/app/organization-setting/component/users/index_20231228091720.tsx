'use client';

import React, { useState, useEffect } from 'react';
import { UsersProps, User, Props } from './props';
import UserRepository from '@/api/user';
import Component from './component';

const Users = ({ onBack }: UsersProps) => {
    const [users, setUsers] = useState<User[]>([]);

    const findAllUsers = async () => {
        setUsers([]);
        const { data } = await UserRepository.findAllUsers();
        setUsers(data);
    };

    useEffect(() => {
        findAllUsers();
    }, []);

    const props: Props = {
        users,
        onBack,
    };
    
    return (<Component {...props}></Component>);
};

export default Users;
