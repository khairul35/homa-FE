'use client';

import React, { useState, useEffect } from 'react';
import { UsersProps, User } from './props';
import UserRepository from '@/api/user';

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
};

export default Users;
