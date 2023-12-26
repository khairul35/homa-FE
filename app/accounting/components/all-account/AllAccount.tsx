import React, { useState } from 'react';
import SearchInput from '../../../components/SearchInput';
import styles from './index.module.css';
import AddAccount from '../add-account/AddAccount';

interface Account {
    id: number;
    code: number | string;
    description: string | null;
    name: string;
    type: string;
    tax: string;
    ytd: number | string;
    transactions: Transaction[];
};

interface Transaction {
    id: number;
    createdDate: string;
    transaction: string;
    debit: string | number;
    credit: string | number;
};

const AllAccount = () => {

    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const [sortedField, setSortedField] = useState<keyof Account | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [showForm, setShowForm] = useState<boolean>(false);
    const [expandedRow, setExpandedRow] = useState<number | null>(null);

    const handleRowClick = (accountId: number) => {
        setExpandedRow(expandedRow === accountId ? null : accountId);
    };

    const openFormModal = () => {
        setShowForm(true);
    };

    const closeFormModal = () => {
        setShowForm(false);
    };

    const handleSort = (field: keyof Account) => {
        if (sortedField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortedField(field);
            setSortDirection('asc');
        }
    };


    // Function to handle checkbox changes in rows
    const handleCheckboxChange = (id: number) => {
        if (selectedItems.includes(id)) {
        setSelectedItems(selectedItems.filter((item) => item !== id));
        setSelectAll(false); // If a single item is deselected, uncheck "select all"
        } else {
        setSelectedItems([...selectedItems, id]);
        }
    };

    // Function to handle checkbox change in the header
    const handleSelectAll = () => {
        if (!selectAll) {
        const allIds = accounts.map((item) => item.id);
        setSelectedItems(allIds);
        } else {
        setSelectedItems([]);
        }
        setSelectAll(!selectAll);
    };

    /** Dummy Data since Back End not ready */
    const accounts: Account[] = [
        {
            id: 1,
            code: 3212,
            name: 'Business Bank Account',
            description: null,
            type: 'Bank',
            tax: 'Tax Examption (0%)',
            ytd: 123003.23,
            transactions: [
                {
                    id: 1,
                    createdDate: '2023-10-10',
                    transaction: 'Bank May',
                    debit: 123003.23,
                    credit: 0,
                },
                {
                    id: 2,
                    createdDate: '2023-10-12',
                    transaction: 'City Agency',
                    debit: 12403.23,
                    credit: 0,
                },
                {
                    id: 5,
                    createdDate: '2023-10-12',
                    transaction: 'Red Media Group',
                    debit: 0,
                    credit: 6000,
                },
            ],
        },
        {
            id: 2,
            code: 3232,
            name: 'Business Bank Account 2',
            description: null,
            type: 'Bank',
            tax: 'Tax Examption (0%)',
            ytd: 123003.23,
            transactions: [
                {
                    id: 3,
                    createdDate: '2023-10-10',
                    transaction: 'City Agency',
                    debit: 123003.23,
                    credit: 0,
                },
            ],
        },
        {
            id: 3,
            code: 3222,
            name: 'Business Bank Account 3',
            description: 'Goods purchased with intention of selling these to customers',
            type: 'Bank',
            tax: 'Tax Examption (0%)',
            ytd: 123003.23,
            transactions: [
                {
                    id: 4,
                    createdDate: '2023-10-10',
                    transaction: 'City Agency',
                    debit: 123003.23,
                    credit: 0,
                },
            ],
        },
    ];

    const sortedAccounts = [...accounts].sort((a, b) => {
        if (sortedField) {
            const aValue = a[sortedField] as string | number;
            const bValue = b[sortedField] as string | number;

            const comparison = aValue.toString().localeCompare(bValue.toString());

            return sortDirection === 'asc' ? comparison : -comparison;
        }
        return 0;
    });

    return (
        <>
            <div className="p-20 pt-4">
                <div className="flex flex-wrap gap-4 sm:gap-0">
                    <button className="flex items-center gap-2 btn btn-primary mr-2" onClick={openFormModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                            <path d="M11.3506 21.5113L11.3492 21.0331L11.3506 21.5113Z" stroke="#158BB8"/>
                            <path d="M22.0986 11C22.0986 16.9371 17.2857 21.75 11.3486 21.75C5.41157 21.75 0.598633 16.9371 0.598633 11C0.598633 5.06297 5.41157 0.250031 11.3486 0.250031C17.2857 0.250031 22.0986 5.06297 22.0986 11Z" fill="#158BB8" stroke="white" strokeWidth="0.5"/>
                            <path d="M17.5581 10.2963L5.11304 10.3003C4.73186 10.3004 4.42275 10.6095 4.42263 10.9907C4.42251 11.3719 4.73142 11.6808 5.1126 11.6807L17.5576 11.6767C17.9388 11.6765 18.2479 11.3674 18.248 10.9863C18.2481 10.6051 17.9392 10.2962 17.5581 10.2963Z" fill="white"/>
                            <path d="M12.0178 16.9969L12.0218 4.76763C12.0219 4.38645 11.713 4.07754 11.3318 4.07766C10.9506 4.07778 10.6415 4.38689 10.6414 4.76807L10.6375 16.9974C10.6373 17.3786 10.9462 17.6875 11.3274 17.6874C11.7086 17.6872 12.0177 17.3781 12.0178 16.9969Z" fill="white"/>
                        </svg>
                        Add Account
                    </button>
                    <button className="flex items-center gap-2 btn btn-primary mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                            <path d="M11.3506 21.5113L11.3492 21.0331L11.3506 21.5113Z" stroke="#158BB8"/>
                            <path d="M22.0986 11C22.0986 16.9371 17.2857 21.75 11.3486 21.75C5.41157 21.75 0.598633 16.9371 0.598633 11C0.598633 5.06297 5.41157 0.250031 11.3486 0.250031C17.2857 0.250031 22.0986 5.06297 22.0986 11Z" fill="#158BB8" stroke="white" strokeWidth="0.5"/>
                            <path d="M17.5581 10.2963L5.11304 10.3003C4.73186 10.3004 4.42275 10.6095 4.42263 10.9907C4.42251 11.3719 4.73142 11.6808 5.1126 11.6807L17.5576 11.6767C17.9388 11.6765 18.2479 11.3674 18.248 10.9863C18.2481 10.6051 17.9392 10.2962 17.5581 10.2963Z" fill="white"/>
                            <path d="M12.0178 16.9969L12.0218 4.76763C12.0219 4.38645 11.713 4.07754 11.3318 4.07766C10.9506 4.07778 10.6415 4.38689 10.6414 4.76807L10.6375 16.9974C10.6373 17.3786 10.9462 17.6875 11.3274 17.6874C11.7086 17.6872 12.0177 17.3781 12.0178 16.9969Z" fill="white"/>
                        </svg>
                        Add Bank Account
                    </button>
                    <button className="flex items-center gap-2 btn btn-primary mr-2">
                        Print PDF
                    </button>
                    <button className="flex items-center gap-2 btn btn-primary mr-2">
                        Import
                    </button>
                    <button className="flex items-center gap-2 btn btn-primary mr-2">
                        Export
                    </button>
                </div>
                <div className="bg-white border-gray-100 p-2 min-h-[70vh]">
                    <div className="m-2 flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 border-b border-black pb-2">
                        <div className="w-90 sm:w-2/3">
                            <SearchInput placeholder="Search" />
                        </div>
                        <div className="w-10 sm:w-1/3 text-right pt-2">
                            <span>Last 30 Days</span>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-10 gap-4 pl-10 pr-10">
                            <div className="col-span-1">
                                <button className={styles.greyButton}>Decline</button>
                            </div>
                            <div className="col-span-1">
                                <button className={styles.greyButton}>Archive</button>
                            </div>
                            <div className="col-span-2">
                                <button className={styles.greyButton}>Change Tax Rate</button>
                            </div>
                            <div className="col-span-6 pt-1">
                                No Account Selected
                            </div>
                        </div>
                        <div>
                            <div className="overflow-x-auto">
                                <table className="table mt-2 border-b border-black">
                                    {/* head */}
                                    <thead>
                                    <tr style={{ backgroundColor: '#8ABCDE', color: "#000" }}>
                                        <th>
                                            <input
                                                type="checkbox"
                                                onChange={handleSelectAll}
                                                checked={selectAll}
                                            />
                                        </th>
                                        <th onClick={() => handleSort('code')} className="cursor-pointer flex items-center">
                                            <span className="mr-1">Code</span>
                                            {sortedField === 'code' && (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 13 12" fill="none">
                                                {sortDirection === 'asc' ? (
                                                    <path d="M6.5 0L12.9952 11.25H0.00480938L6.5 0Z" fill="#D9D9D9"/>
                                                ) : (
                                                    <path d="M6.5 12L0.00480843 0.75H12.9952L6.5 12Z" fill="#D9D9D9"/>
                                                )}
                                                </svg>
                                            )}
                                        </th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Tax Rate</th>
                                        <th>YTD</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            sortedAccounts.map(
                                                (account: Account) => (
                                                    <React.Fragment key={account.id}>
                                                        <tr
                                                            key={account.id} 
                                                            onClick={(e) => {
                                                                // Check if the click target is the checkbox; if so, prevent row click
                                                                if (e.target.type !== 'checkbox') {
                                                                    handleRowClick(account.id);
                                                                }
                                                            }}
                                                            className="cursor-pointer"
                                                        >
                                                            <td>
                                                                <input
                                                                    type="checkbox"
                                                                    onChange={() => handleCheckboxChange(account.id)}
                                                                    checked={selectedItems.includes(account.id)}
                                                                />
                                                            </td>
                                                            <td>{account.code}</td>
                                                            <td>
                                                                <p className="text-blue-600">
                                                                    <b>{account.name}</b>
                                                                </p>
                                                                {account.description}
                                                            </td>
                                                            <td>{account.type}</td>
                                                            <td>{account.tax}</td>
                                                            <td>{account.ytd}</td>
                                                        </tr>
                                                        {expandedRow === account.id && (
                                                            <tr>
                                                                <td colSpan={6}> {/* Set the colspan to the total number of columns in your table */}
                                                                    {/* Your sub-table content here */}
                                                                    <div style={{ backgroundColor: '#8ABCDE' }} className="flex justify-end items-center p-3">
                                                                        <button className="btn btn-primary btn-sm">
                                                                            Edit Account
                                                                        </button>
                                                                        <button className="btn btn-primary btn-sm ml-2 bg-black text-white">
                                                                            Archive
                                                                        </button>
                                                                        <button className="btn btn-sm btn-primary ml-2 bg-white">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 21 27" fill="none">
                                                                                <path d="M20.4968 8.75949L13.4702 1.00949C13.3494 0.875683 13.202 0.768632 13.0374 0.695222C12.8728 0.621811 12.6946 0.583666 12.5143 0.58324H3.47268C3.04352 0.578121 2.61756 0.657589 2.21912 0.817105C1.82068 0.976621 1.45756 1.21306 1.1505 1.51292C0.843442 1.81278 0.598458 2.17019 0.429539 2.56474C0.26062 2.95929 0.171074 3.38325 0.166016 3.81241V23.1874C0.171074 23.6166 0.26062 24.0405 0.429539 24.4351C0.598458 24.8296 0.843442 25.187 1.1505 25.4869C1.45756 25.7868 1.82068 26.0232 2.21912 26.1827C2.61756 26.3422 3.04352 26.4217 3.47268 26.4166H17.526C17.9552 26.4217 18.3811 26.3422 18.7796 26.1827C19.178 26.0232 19.5411 25.7868 19.8482 25.4869C20.1553 25.187 20.4002 24.8296 20.5692 24.4351C20.7381 24.0405 20.8276 23.6166 20.8327 23.1874V9.62491C20.8318 9.30478 20.7122 8.99638 20.4968 8.75949ZM17.7973 9.62491H12.7081C12.4418 9.59868 12.1965 9.46892 12.0249 9.26356C11.8534 9.0582 11.7694 8.79369 11.791 8.52699V3.16657H11.9331L17.7973 9.62491ZM17.526 23.8332H3.47268C3.38275 23.8385 3.29267 23.8259 3.2076 23.7963C3.12253 23.7666 3.04415 23.7205 2.97696 23.6605C2.90976 23.6005 2.85506 23.5278 2.816 23.4466C2.77695 23.3654 2.7543 23.2774 2.74935 23.1874V3.81241C2.7543 3.72246 2.77695 3.63437 2.816 3.55319C2.85506 3.47201 2.90976 3.39934 2.97696 3.33934C3.04415 3.27935 3.12253 3.2332 3.2076 3.20355C3.29267 3.17391 3.38275 3.16134 3.47268 3.16657H9.20768V8.52699C9.18683 9.47846 9.54319 10.3996 10.199 11.0892C10.8548 11.7789 11.7568 12.1812 12.7081 12.2082H18.2493V23.1874C18.2444 23.2774 18.2217 23.3654 18.1827 23.4466C18.1436 23.5278 18.0889 23.6005 18.0217 23.6605C17.9545 23.7205 17.8762 23.7666 17.7911 23.7963C17.706 23.8259 17.6159 23.8385 17.526 23.8332Z" fill="#231F20"/>
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                    <div className="pt-8 border-b-2 border-black mb-4">
                                                                        <b>Transactions</b>
                                                                    </div>
                                                                    <table className="table mt-2 border-b border-black">
                                                                        <thead>
                                                                            <tr style={{ backgroundColor: '#8ABCDE', color: "#000" }}>
                                                                                <th>Date</th>
                                                                                <th>Transaction</th>
                                                                                <th>Debit</th>
                                                                                <th>Credit</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {
                                                                                account.transactions.map((transaction: Transaction) => (
                                                                                    <tr key={transaction.id}>
                                                                                        <td>
                                                                                            {transaction.createdDate}
                                                                                        </td>
                                                                                        <td>
                                                                                            <p className="text-blue-600">
                                                                                                <b>
                                                                                                    {transaction.transaction}
                                                                                                </b>
                                                                                            </p>
                                                                                            
                                                                                        </td>
                                                                                        <td>
                                                                                            {transaction.debit}
                                                                                        </td>
                                                                                        <td>
                                                                                            {transaction.credit}
                                                                                        </td>
                                                                                    </tr>
                                                                                ))
                                                                            }
                                                                        </tbody>
                                                                    </table>
                                                                    <div className="divider"></div>
                                                                </td>
                                                            </tr>
                                                        )}
                                                </React.Fragment>
                                                )
                                            )
                                        }
                                    </tbody>
                                </table>
                                <div className="pt-4">
                                    <span className="text-gray-500 text-xs p-5">
                                        Select
                                        &nbsp;
                                        {selectedItems.length}
                                        &nbsp;
                                        of
                                        &nbsp;
                                        {accounts.length}
                                        &nbsp;
                                        items
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <AddAccount showModal={showForm} onClose={closeFormModal} />
            </div>
        </>
    )
};

export default AllAccount;
