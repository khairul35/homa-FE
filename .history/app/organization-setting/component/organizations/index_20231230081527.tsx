'use client';

import React, { useState, useEffect } from 'react';
import OrganizationRepository from '@/api/organization';
import { Organization, OrganizationsProps, TableProps } from './props';
import Component from './component';

const Organizations = ({ onBack }: OrganizationsProps) => {
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [show, setShow] = useState<string>('list');
    const [selectedOrganization, setSelectedOrganization] = useState<Partial<Organization> | null>(null);
    const [error, setError] = useState<string>('');
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'loading' } | null>(null);

    const findMyOrganizations = async () => {
        setOrganizations([]);
        const { data } = await OrganizationRepository.findMyOrganizations();
        setOrganizations(data);
    };

    const createOrganization = () => {
        setSelectedOrganization({
            name: '',
            tradingName: '',
            industry: '',
            organizationType: '',
            registrationNumber: null,
            organizationDescription: null,
            postalAddress: {
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                postalCode: '',
            },
            physicalAddress: {
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                postalCode: '',
            },
            physicalIsPostal: false,
            email: null,
            website: null,
            telephone: {
                countryCode: null,
                number: null,
            },
            mobile: {
                countryCode: null,
                number: null,
            },
            fax: {
                countryCode: null,
                number: null,
            },
            facebook: null,
            twitter: null,
            linkedin: null,
        })
        setShow('detail');
    }

    const backToList = () => {
        setShow('list');
    }

    useEffect(() => {
        findMyOrganizations();
    }, []);

    const tableProps: TableProps = {
        organizations,
        show,
        onBack,
        createOrganization,
    }

    const detailProps = {
        selectedOrganization,
        backToList,
        backToMainSetting: onBack,
    }

    return (<Component {...tableProps}></Component>)
};

export default Organizations;
