'use client';
import React, { useState, useEffect } from 'react';
import { OrganizationDetail, OrganizationDetailsProps, Props } from './props';
import Component from './component';
import OrganizationRepository from '@/api/organization';
import { CreateOrganizationProps } from '@/api/organization/props';

const OrganizationSetting = ({ onBack }: OrganizationDetailsProps) => {
    const [detail, setDetail] = useState<OrganizationDetail>({
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
    });
    const [error, setError] = useState<string>('');
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' | 'loading' } | null>(null);

    const findMyOrganization = async () => {
        const { data } = await OrganizationRepository.findMyOrganization();
        setDetail(data);
    };

    const closeMessage = () => {
        setNotification(null);
    };

    const updateDetail = (updatedValues: Partial<OrganizationDetail>): void => {
        if (detail) {
            const updatedDetail: OrganizationDetail = {
                ...detail,
                ...updatedValues,
            };
            setDetail(updatedDetail);
        }
    };

    const validateRequiredField = () => {
        const requiredKeys: { key: keyof OrganizationDetail; label: string }[] = [
            { key: 'name', label: 'Name' },
            { key: 'tradingName', label: 'Trading Name' },
            { key: 'organizationType', label: 'Organization Type'},
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

    const validateEmail = () => {
        if (!detail?.email) return true;
        if (detail?.email == '') return true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(detail?.email);

        if (!isValid) {
            setError('Invalid email format!');
            return false;
        }
        return true;
    };

    const validateWebsite = () => {
        if (!detail?.website) return true;
        if (detail?.website == '') return true;

        // Regular expression for basic URL format validation
        const websiteRegex = /^(https?:\/\/)?([\w\d]+\.)+[\w\d]{2,}(\/[\w\d]*)*\/?$/i;
        const isValid = websiteRegex.test(detail?.website);

        if (!isValid) {
            setError('Invalid website format!');
            return false;
        }
        return true;
    }

    const onSave = async () => {
        setError('');
        const isRequiredValid = validateRequiredField();
        const isValidEmail = validateEmail();
        const isValidWebsite = validateWebsite();

        if (!isRequiredValid || !isValidEmail || !isValidWebsite) {
            return;
        }

        const body: CreateOrganizationProps = {
            name: detail?.name || '',
            tradingName: detail?.tradingName || '',
            industry: detail?.industry || '',
            organizationType: detail?.organizationType || '',
            registrationNumber: detail?.registrationNumber || '',
            organizationDescription: detail?.organizationDescription || '',
            postalAddress: {
                addressLine1: detail?.postalAddress.addressLine1 || '',
                addressLine2: detail?.postalAddress.addressLine2 || '',
                city: detail?.postalAddress?.city || '',
                state: detail?.postalAddress?.state || '',
                postalCode: detail?.postalAddress?.postalCode || '',
            },
            physicalAddress: {
                addressLine1: detail?.physicalAddress.addressLine1 || '',
                addressLine2: detail?.physicalAddress.addressLine2 || '',
                city: detail?.physicalAddress?.city || '',
                state: detail?.physicalAddress?.state || '',
                postalCode: detail?.physicalAddress?.postalCode || '',
            },
            physicalIsPostal: detail?.physicalIsPostal || false,
            email: detail?.email || '',
            website: detail?.website || '',
            telephone: {
                countryCode: detail?.telephone?.countryCode || '',
                number: detail?.telephone?.number || '',
            },
            mobile: {
                countryCode: detail?.mobile?.countryCode || '',
                number: detail?.mobile?.number || '',
            },
            fax: {
                countryCode: detail?.fax?.countryCode || '',
                number: detail?.fax?.number || '',
            },
            facebook: detail?.facebook || '',
            twitter: detail?.twitter || '',
            linkedin: detail?.linkedin || '',
        }
        await OrganizationRepository.updateOrganization(body)
            .then(() => {
                findMyOrganization();
                setNotification({ message: 'Successfully Update Organization Detail', type: 'success'});
            })
            .catch((err: any) => {
                setNotification({ message: 'Oopss.. Failed to Update Organization', type: 'error' });
                console.log(err);
            })
    };

    useEffect(() => {
        findMyOrganization();
    }, []);

    const props: Props = {
        detail,
        error,
        notification,
        onBack,
        updateDetail,
        onSave,
        closeMessage,
        
    }
    return (<Component {...props}></Component>);
};

export default OrganizationSetting;
