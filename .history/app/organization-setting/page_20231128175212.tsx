'use client';
import { useState } from 'react';
import OrganizationDetails from "./component/organization-detail/OrganizationDetails";

const OrganisationSetting = () => {
    const [show, setShow] = useState<string>("setting");

    const onClickOrganizationDetails = () => {
        setShow("OrganizationDetail");
    };

    /** Clickable Element to choose box functions */
    const ClickableMenu = (title: string, description: string, fx: (() => void) | null) => {
        return (
            <div
                className="border-2 border-black pl-10 p-4 cursor-pointer hover:bg-blue-100"
                onClick={fx ? fx : undefined}
            >
                <a className="cursor-pointer text-blue-600 font-semibold">
                    {title}
                </a>
                <p>{description}</p>
            </div>
        )
    }

    return (
        <main className="flex min-h-screen flex-col justify-between bg-white">
            {
                show === 'setting' ? (
                    <div>
                        <h1 className="pl-20 pt-5 text-l font-bold">Organization Setting</h1>
                        <div className="divider before:bg-black after:bg-black" />
                        <div className="pl-20 pr-20 pt-5 flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 p-5">
                                <p className="mb-5">General</p>
                                {ClickableMenu('Organization details', 'Address, logo and basic financial information', () => onClickOrganizationDetails())}
                                {ClickableMenu('Users', 'Add, remove or modify users of this organisation', null)}
                                {ClickableMenu('Connected Apps', 'Add and manage third party connections', null)}
                            </div>
                            <div className="w-full md:w-1/2 p-5">
                                <p className="mb-5">General</p>
                                {ClickableMenu('Invoice settings', 'Create branding themes for documents, add payment services and auto reminders for invoices', null)}
                                {ClickableMenu('Payment services', 'Add and manage online payment options for your sales invoices', null)}
                                {ClickableMenu('Email settings', 'Set a reply-to email address and email template content', null)}
                                {ClickableMenu('Pay runs', 'Manage your pay run settings', null)}
                                {ClickableMenu('Expenses', 'Manage your expense settings', null)}
                                {ClickableMenu('Cheque styles', 'Edit the appearance and content of the checks you generate', null)}
                                {ClickableMenu('Custom contact links', 'Create shortcuts for your favourite Xero contact and other tools', null)}
                            </div>
                        </div>
                    </div>
                ) : null
            }
            {
                show === 'OrganizationDetail' ? (
                    <><OrganizationDetails onBack={() => setShow('setting')} /></>
                ) : null
            }
        </main>
    )
};

export default OrganisationSetting;
