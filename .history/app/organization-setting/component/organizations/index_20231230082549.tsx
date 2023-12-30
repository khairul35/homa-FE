'use client';

import React, { useState, useEffect } from 'react';
import OrganizationRepository from '@/api/organization';
import { DetailProps, Organization, OrganizationsProps, TableProps } from './props';
import Component from './component';
import { UpdateOrganizationProps } from '@/api/organization/props';

const Organizations = ({ onBack }: OrganizationsProps) => {
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [show, setShow] = useState<string>('list');
    const [selectedOrganization, setSelectedOrganization] = useState<Partial<Organization> | null>(null);
    const [error, setError] = useState<string | null>(null);
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
        setError(null);
        setNotification(null);
        setSelectedOrganization(null);
        setShow('list');
    };

    const validateRequiredField = () => {
        if (!selectedOrganization) {
            return true;
        }
        const requiredKeys: { key: keyof Organization; label: string }[] = [
            { key: 'name', label: 'Name' },
            { key: 'tradingName', label: 'Trading Name' },
            { key: 'organizationType', label: 'Organization Type'},
        ];

        const firstMissingKey = requiredKeys.find(({ key }) => {
            const value = selectedOrganization[key];
            return value === undefined || value === null || value === '';
        });

        if (firstMissingKey) {
            setError(`${firstMissingKey.label} is required!`);
            return false;
        }
        return true;
    };

    const validateEmail = () => {
        if (!selectedOrganization?.email) return true;
        if (selectedOrganization?.email == '') return true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(selectedOrganization?.email);

        if (!isValid) {
            setError('Invalid email format!');
            return false;
        }
        return true;
    };

    const validateWebsite = () => {
        if (!selectedOrganization?.website) return true;
        if (selectedOrganization?.website == '') return true;

        // Regular expression for basic URL format validation
        const websiteRegex = /^(https?:\/\/)?([\w\d]+\.)+[\w\d]{2,}(\/[\w\d]*)*\/?$/i;
        const isValid = websiteRegex.test(selectedOrganization?.website);

        if (!isValid) {
            setError('Invalid website format!');
            return false;
        }
        return true;
    };

    const onSave = async () => {
        setError('');
        const isRequiredValid = validateRequiredField();
        const isValidEmail = validateEmail();
        const isValidWebsite = validateWebsite();

        if (!isRequiredValid || !isValidEmail || !isValidWebsite) {
            return;
        }

        const body: UpdateOrganizationProps = {
            name: selectedOrganization?.name || '',
            tradingName: selectedOrganization?.tradingName || '',
            industry: selectedOrganization?.industry || '',
            organizationType: selectedOrganization?.organizationType || '',
            registrationNumber: selectedOrganization?.registrationNumber || '',
            organizationDescription: selectedOrganization?.organizationDescription || '',
            postalAddress: {
                addressLine1: selectedOrganization?.postalAddress?.addressLine1 || '',
                addressLine2: selectedOrganization?.postalAddress?.addressLine2 || '',
                city: selectedOrganization?.postalAddress?.city || '',
                state: selectedOrganization?.postalAddress?.state || '',
                postalCode: selectedOrganization?.postalAddress?.postalCode || '',
            },
            physicalAddress: {
                addressLine1: selectedOrganization?.physicalAddress?.addressLine1 || '',
                addressLine2: selectedOrganization?.physicalAddress?.addressLine2 || '',
                city: selectedOrganization?.physicalAddress?.city || '',
                state: selectedOrganization?.physicalAddress?.state || '',
                postalCode: selectedOrganization?.physicalAddress?.postalCode || '',
            },
            physicalIsPostal: selectedOrganization?.physicalIsPostal || false,
            email: selectedOrganization?.email || '',
            website: selectedOrganization?.website || '',
            telephone: {
                countryCode: selectedOrganization?.telephone?.countryCode || '',
                number: selectedOrganization?.telephone?.number || '',
            },
            mobile: {
                countryCode: selectedOrganization?.mobile?.countryCode || '',
                number: selectedOrganization?.mobile?.number || '',
            },
            fax: {
                countryCode: selectedOrganization?.fax?.countryCode || '',
                number: selectedOrganization?.fax?.number || '',
            },
            facebook: selectedOrganization?.facebook || '',
            twitter: selectedOrganization?.twitter || '',
            linkedin: selectedOrganization?.linkedin || '',
        }
        await OrganizationRepository.createOrganization(body)
            .then(() => {
                findMyOrganizations();
                setNotification({ message: 'Successfully Create Organization Detail', type: 'success'});
            })
            .catch((err: any) => {
                setNotification({ message: 'Oopss.. Failed to Create Organization', type: 'error' });
                console.log(err);
            })
    };

    const tableProps: TableProps = {
        organizations,
        show,
        detailProps,
        onBack,
        createOrganization,
    }

    const detailProps: DetailProps = {
        selectedOrganization,
        error,
        notification,
        backToList,
        backToMainSetting: onBack,
        onSave,
    }

    useEffect(() => {
        findMyOrganizations();
    }, []);

    return (<Component {...tableProps}></Component>)
};

export default Organizations;
