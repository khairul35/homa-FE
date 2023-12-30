'use client';

import React, { useState, useEffect } from 'react';
import { UsersProps, User, Props } from './props';
import { UserDetailProps } from './detail/props';
import UserRepository from '@/api/user';
import Component from './component';

const Users = ({ onBack }: UsersProps) => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [show, setShow] = useState<string>('list');

    const findAllUsers = async () => {
        setUsers([]);
        const { data } = await UserRepository.findAllUsers();
        setUsers(data);
    };

    const showUserList = () => {
        setShow('list');
    };

    const showDetail = () => {
        setShow('detail');
    }

    useEffect(() => {
        findAllUsers();
    }, []);

    const detailProps: UserDetailProps = {
        onBackToMain: onBack,
        onBack: showUserList,
        user: selectedUser,
    };

    const props: Props = {
        users,
        show,
        detailProps,
        onBack,
    };
    
    return (<Component {...props}></Component>);
};

export default Users;
