'use client';

import React, { useState, useEffect } from 'react';
import { UsersProps, User, Props } from './props';
import { UserDetailProps } from './detail/props';
import UserRepository from '@/api/user';
import Component from './component';
import { CreateUserProps, UpdateUserProps } from '@/api/user/props';

const Users = ({ onBack }: UsersProps) => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<Partial<User> | null>(null);
    const [show, setShow] = useState<string>('list');
    const [error, setError] = useState<string | null>(null);
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'loading' } | null>(null);

    const findAllUsers = async () => {
        setUsers([]);
        const { data } = await UserRepository.findAllUsers();
        setUsers(data);
    };

    const validateRequiredField = () => {
        if (!selectedUser) return true;
        const requiredKeys: { key: keyof User; label: string }[] = [
            { key: 'firstName', label: 'Name' },
            { key: 'username', label: 'Trading Name' },
        ];
        if (!selectedUser.id) {
            requiredKeys.push({ key: 'password', label: 'Password' });
        }

        const firstMissingKey = requiredKeys.find(({ key }) => {
            const value = selectedUser[key];
            return value === undefined || value === null || value === '';
        });

        if (firstMissingKey) {
            setError(`${firstMissingKey.label} is required!`);
            return false;
        }
        return true;
    }

    const onSave = () => {
        setError(null);
        const isRequiredValid = validateRequiredField();

        if (!isRequiredValid) {
            return;
        }

        if (selectedUser && selectedUser?.id) {
            updateUserRequest(selectedUser?.id, selectedUser);
        } else {
            createUserRequest(selectedUser);
        }
    };

    const updateUserRequest = async (id: number, user: Partial<User | null>) => {
        const body: Partial<UpdateUserProps> = {
            username: user?.username,
            email: user?.email,
            firstName: user?.firstName || '',
            lastName: user?.lastName,
            phoneNumber: user?.phoneNumber,
        };
        await UserRepository.updateUser(id, body)
            .then(() => {
                findAllUsers();
                setNotification({ message: 'Successfully Update User', type: 'success' });
            })
            .catch((err: any) => {
                setNotification({ message: 'Oopss.. Failed to Update User', type: 'error' });
                console.log(err);
            });
    };

    const createUserRequest  = async (user: Partial<User | null>) => {
        const body: Partial<CreateUserProps> = {
            username: user?.username,
            email: user?.email,
            firstName: user?.firstName || '',
            lastName: user?.lastName,
            phoneNumber: user?.phoneNumber,
            password: user?.password,
        };
        await UserRepository.createUser(body)
            .then(() => {
                findAllUsers();
                setNotification({ message: 'Successfully Create User', type: 'success' });
            })
            .catch((err: any) => {
                setNotification({ message: 'Oopss.. Failed to Create User', type: 'error' });
                console.log(err);
            });
    };

    const updateUser = (updatedValues: Partial<User>): void => {
        if (selectedUser) {
            const updatedDetail: Partial<User> = {
                ...selectedUser,
                ...updatedValues
            };
            setSelectedUser(updatedDetail);
        }
    };

    const showUserList = () => {
        setShow('list');
    };

    const createNewUser = () => {
        setSelectedUser({
            username: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
        });
        setShow('detail');
    }

    const handleRowClick = (user: User) => {
        setSelectedUser(user);
        setShow('detail');
    }

    const closeMessage = () => {
        setNotification(null);
    };

    useEffect(() => {
        findAllUsers();
    }, []);

    const detailProps: UserDetailProps = {
        user: selectedUser,
        numberOfUser: users.length,
        error,
        notification,
        onBackToMain: onBack,
        onBack: showUserList,
        updateUser,
        onSave,
        closeMessage,
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
