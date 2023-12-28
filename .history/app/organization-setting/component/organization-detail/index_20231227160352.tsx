'use client';
import React, { useState, useEffect } from 'react';
import { OrganizationDetail, OrganizationDetailsProps, Props } from './props';
import Component from './component';


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

        setError('');
        return true;

    }

    const onSave = () => {
        const isRequiredValid = validateRequiredField();

        if (!isRequiredValid) {
            return;
        }

        console.log(detail);
    };

    const props: Props = {
        detail,
        onBack,
        updateDetail,
        onSave,
    }
    return (<Component {...props}></Component>);
};

export default OrganizationSetting
