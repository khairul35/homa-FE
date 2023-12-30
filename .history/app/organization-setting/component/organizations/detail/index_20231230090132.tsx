import React from 'react';
import { DetailProps } from '../props';
import { Props } from './props';

const OrganizationDetail = (detailProps: DetailProps) => {
    const {
        selectedOrganization,
        error,
        numberOfOrganizations,
        notification, backToList,
        backToMainSetting,
        onSave
    } = detailProps;

    const props: Props = {
        selectedOrganization,
        numberOfOrganizations,
        error,
        notification, backToList,
        backToMainSetting,
        onSave
    };
};

export default OrganizationDetail;
