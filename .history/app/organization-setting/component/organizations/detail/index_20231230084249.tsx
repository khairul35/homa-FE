import React from 'react';
import { DetailProps } from '../props';

const OrganizationDetail = (detailProps: DetailProps) => {
    const {
        selectedOrganization,
        error,
        notification, backToList,
        backToMainSetting,
        onSave
    } = detailProps;

    const props = {
        selectedOrganization,
        error,
        notification, backToList,
        backToMainSetting,
        onSave
    };
}
