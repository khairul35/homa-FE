'use client';

import React, { useState, useEffect } from 'react';
import OrganizationRepository from '@/api/organization';
import { Organization, OrganizationsProps, TableProps } from './props';

const Organizations = ({ onBack }: OrganizationsProps) => {
    const [organizations, setOrganizations] = useState<Organization[]>([]);

    const findMyOrganizations = async () => {
        setOrganizations([]);
        const { data } = await OrganizationRepository.findMyOrganizations();
        setOrganizations(data);
    };

    useEffect(() => {
        findMyOrganizations();
    }, []);

    const tableProps: TableProps = {
        organizations,
        onBack,
    }
};

export default Organizations;
