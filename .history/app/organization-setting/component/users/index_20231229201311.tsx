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
    const [error, setError] = useState<string | null>(null);

    const findAllUsers = async () => {
        setUsers([]);
        const { data } = await UserRepository.findAllUsers();
        setUsers(data);
    };

    const validateRequiredField = () => {
        const requiredKeys: { key: keyof User; label: string }[] = [
            { key: 'firstName', label: 'Name' },
            { key: 'username', label: 'Trading Name' },
        ];

        const firstMissingKey = requiredKeys.find(({ key }) => {
            const value = detail[key];
            return value === undefined || value === null || value === '';
        });

        if (firstMissingKey) {
            setError(`${firstMissingKey.label} is required!`);
            return false;
        }
        return true;
    }

    const updateUser = (updatedValues: Partial<User>): void => {
        if (selectedUser) {
            const updatedDetail: User = {
                ...selectedUser,
                ...updatedValues
            };
            setSelectedUser(updatedDetail);
        }
    };

    const showUserList = () => {
        setShow('list');
    };

    const handleRowClick = (user: User) => {
        setSelectedUser(user);
        setShow('detail');
    }

    const onSave = () => {
        console.log('save');
    };

    useEffect(() => {
        findAllUsers();
    }, []);

    const detailProps: UserDetailProps = {
        user: selectedUser,
        numberOfUser: users.length,
        error,
        onBackToMain: onBack,
        onBack: showUserList,
        updateUser,
        onSave,
    };

    const props: Props = {
        users,
        show,
        detailProps,
        onBack,
        handleRowClick,
    };
    
    return (<Component {...props}></Component>);
};

export default Users;
