'use client';
import React, { useState, useEffect } from 'react';
import { OrganizationDetail, OrganizationDetailsProps, Props } from './props';


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

    const updateDetail = (updatedValues: Partial<OrganizationDetail>): void => {
        if (detail) {
            const updatedDetail: OrganizationDetail = {
                ...detail,
                ...updatedValues,
            };
            setDetail(updatedDetail);
        }
    };

    const onSave = () => {

    };

    const props: Props = {
        detail,
        onBack,
        updateDetail,
        onSave,
    }
    return (<></>);
};

export default OrganizationSetting
