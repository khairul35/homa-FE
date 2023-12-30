import React from 'react';
import { DetailProps } from '../props';
import { Props } from './props';
import Component from './component';

const OrganizationDetail = (detailProps: DetailProps) => {
    const {
        selectedOrganization,
        error,
        numberOfOrganizations,
        notification, backToList,
        backToMainSetting,
        onSave,
        closeMessage,
        updateDetail,
    } = detailProps;

    const props: Props = {
        selectedOrganization,
        numberOfOrganizations,
        error,
        notification, backToList,
        backToMainSetting,
        closeMessage,
        onSave,
        updateDetail,
    };
    return (<Component {...props}></Component>);
};

export default OrganizationDetail;
