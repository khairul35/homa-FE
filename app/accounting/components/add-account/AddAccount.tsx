'use client';
import styles from './index.module.css';

import React, { useEffect, useState } from "react";

interface AddAccountProps {
    showModal: boolean;
    onClose: () => void;
}

const AddAccount: React.FC<AddAccountProps> = ({ showModal, onClose }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsOpen(showModal);
    }, [showModal]);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <>
            {/* Modal component */}
            {isOpen && (
                <dialog id="new-account-form" className="modal" open={isOpen}>
                <div className="modal-box w-full max-w-7xl bg-white p-0 border-2 rounded-md">
                    <div className={styles.modalTitle}>
                        <p className="text-lg font-medium">Add New Account</p>
                    </div>
                    <div className="p-4 flex flex-col lg:flex-row">
                        <div className="flex-1 h-48 lg:h-auto lg:min-h-0 lg:border-r-2 lg:border-black p-2">
                            {/* Left side content */}
                            <form method="dialog">
                                {/* Account Type */}
                                <label className="label">Account Type</label>
                                <select className="select-sm select select-bordered bg-white border-gray-400 w-3/4">
                                    <option disabled selected>Select Account Type</option>
                                </select>
                                {/* Code */}
                                <label className="label">Code</label>
                                <p className={styles.sublabel}>
                                    A unique code/number for this account (limited to 10 characters)
                                </p>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input-sm input input-bordered max-w-xs bg-white border-gray-400 w-3/4"
                                />
                                {/* Name */}
                                <p className="label">Name</p>
                                <p className={styles.sublabel}>
                                    A short title for this account (limited to 150 characters)
                                </p>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input-sm input input-bordered max-w-xs bg-white border-gray-400 w-full"
                                />
                                {/* Description */}
                                <p className="label">Description(optional)</p>
                                <p className={styles.sublabel}>
                                    A description of how this account should be used
                                </p>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input-sm input input-bordered max-w-xs bg-white border-gray-400 w-full"
                                />
                                {/* Tax */}
                                <p className="label">Tax</p>
                                <p className={styles.sublabel}>
                                    The default tax setting for this account
                                </p>
                                <select className="select-sm select select-bordered bg-white border-gray-400 w-3/4">
                                    <option disabled selected>Select Tax</option>
                                </select>
                                <div className='mt-4'>
                                    <input type="checkbox" checked="checked" className="checkbox" />
                                    <label className="ml-3">Show on Dashboard Watchlist</label>
                                </div>
                                <div className='mt-2'>
                                    <input type="checkbox" checked="checked" className="checkbox" />
                                    <label className="ml-3">Show in Expense Claims</label>
                                </div>
                                <div className='mt-2'>
                                    <input type="checkbox" checked="checked" className="checkbox" />
                                    <label className="ml-3">Enable payments to this account</label>
                                </div>
                                <div className="mb-4 mt-10">
                                    <button className="btn btn-primary btn-sm m-1 ml-4 w-28">
                                        Save
                                    </button>
                                    <button className="btn btn-sm m-1 w-28" onClick={closeModal}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="flex-1 h-48 lg:h-auto lg:min-h-0 p-2">
                            {/* Right side content */}
                            <div className='p-3 font-semibold'>How account types affect your reports</div>
                            <div className='flex flex-col md:flex-row'>
                                <div className={`${styles.waveBackground1} md:w-1/2 h-32 md:h-auto`}>
                                    <div className="font-medium text-center">Profit & Loss</div>
                                    <div className="divider before:bg-black after:bg-black m-0 p-0" />
                                    <p className={styles.waveLabel}>Income</p>
                                    <p className={styles.waveItem}>Revenue</p>
                                    <p className={styles.waveItem}>Sales</p>
                                    <p className={styles.waveLabel}>Less Cost of Sales</p>
                                    <p className={styles.waveItem}>Direct Costs</p>
                                    <div className="divider before:bg-black after:bg-black m-0 p-0" />
                                    <h1 className="font-semibold">GROSS PROFIT</h1>
                                    <div className="divider before:bg-black after:bg-black m-0 p-0" />
                                    <p className={styles.waveLabel}>Plus Other Income</p>
                                    <p className={styles.waveItem}>Other Income</p>
                                    <p className={styles.waveLabel}>Less Expenses</p>
                                    <p className={styles.waveItem}>Expenses</p>
                                    <p className={styles.waveItem}>Depreciation</p>
                                    <p className={styles.waveItem}>Overheads</p>
                                    <div className="divider before:bg-black after:bg-black m-0 p-0" />
                                    <h1 className="font-semibold">NET PROFIT</h1>
                                    <div className="divider before:bg-black after:bg-black m-0 p-0" />
                                </div>
                                <div className={`${styles.waveBackground2} md:w-1/2 h-32 md:h-auto`}>
                                    <div className="font-medium text-center">Balance Sheet</div>
                                    <div className="divider before:bg-black after:bg-black m-0 p-0" />
                                    <p className={styles.waveLabel}>Current Assets</p>
                                    <p className={styles.waveItem}>Current Assets</p>
                                    <p className={styles.waveItem}>Inventory</p>
                                    <p className={styles.waveItem}>Prepayments</p>
                                    <p className={styles.waveLabel}>Plus Bank</p>
                                    <p className={styles.waveItem}>Bank Accounts</p>
                                    <p className={styles.waveLabel}>Plus Fixed Assets</p>
                                    <p className={styles.waveItem}>Fixed Assets</p>
                                    <p className={styles.waveLabel}>Plus Non-current Assets</p>
                                    <p className={styles.waveItem}>Non-current Assets</p>
                                    <div className="divider before:bg-black after:bg-black m-0 p-0" />
                                    <h1 className="font-semibold">TOTAL ASSETS</h1>
                                    <div className="divider before:bg-black after:bg-black m-0 p-0" />
                                    <p className={styles.waveLabel}>Less Current Liabilities</p>
                                    <p className={styles.waveItem}>Current Liabilities</p>
                                    <p className={styles.waveLabel}>Less Non-current Liabilities</p>
                                    <p className={styles.waveItem}>Liabilities</p>
                                    <p className={styles.waveItem}>Non-current Liabilities</p>
                                    <div className="divider before:bg-black after:bg-black m-0 p-0" />
                                    <h1 className="font-semibold">NET ASSETS</h1>
                                    <div className="divider before:bg-black after:bg-black m-0 p-0" />
                                    <p className={styles.waveLabel}>Equity</p>
                                    <p className={styles.waveItem}>Equity</p>
                                    <p className={styles.waveLabel}>Plus Non-current Assets</p>
                                    <div className="divider before:bg-black after:bg-black m-0 p-0" />
                                    <h1 className="font-semibold">TOTAL EQUITY</h1>
                                    <div className="divider before:bg-black after:bg-black m-0 p-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="modal-action">
                        </div>
                    </div>
                </div>
                </dialog>
            )}
        </>
    );
};

export default AddAccount;
