import { ComponentProps } from "./index.props";

const Component = (props: ComponentProps) => {
    const {
        currentTab,
        selectedStyle,
        onClickAddContact,
        setCurrentTab,
    } = props;

    return (
        (
            <main className="flex min-h-screen flex-col justify-between bg-bg-color">
                <div>
                    <div className="bg-white">
                        <div className="flex items-center justify-between px-4 sm:px-6 md:px-8">
                            <div className="flex items-center space-x-2">
                                <span
                                    className="hidden sm:inline font-semibold p-5 cursor-pointer"
                                    style={currentTab == 'all' ? selectedStyle : undefined }
                                    onClick={() => setCurrentTab('all')}
                                >
                                    All
                                </span>
                                <span
                                    className="hidden sm:inline font-semibold p-5 cursor-pointer"
                                    style={currentTab == 'customers' ? selectedStyle : undefined }
                                    onClick={() => setCurrentTab('customers')}
                                >
                                    Customers
                                </span>
                                <span
                                    className="hidden sm:inline font-semibold p-5 cursor-pointer"
                                    style={currentTab == 'suppliers' ? selectedStyle : undefined }
                                    onClick={() => setCurrentTab('suppliers')}
                                >
                                    Suppliers
                                </span>
                                <span
                                    className="hidden sm:inline font-semibold p-5 cursor-pointer"
                                    style={currentTab == 'archieved' ? selectedStyle : undefined }
                                    onClick={() => setCurrentTab('archieved')}
                                >
                                    Archieved
                                </span>
                                <span
                                    className="hidden sm:inline font-semibold p-5 cursor-pointer"
                                    style={currentTab == 'groups' ? selectedStyle : undefined }
                                    onClick={() => setCurrentTab('groups')}
                                >
                                    Groups
                                </span>
                            </div>
                            <div className="flex items-center">
                                <h2 className="hidden sm:block text-xl font-semibold">
                                    Contacts
                                </h2>
                                <div className="flex items-center ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 45 45" fill="none">
                                        <rect width="45" height="45" rx="2" fill="#8ACA2C"/>
                                        <path d="M37.25 19.75H34.25V16.75C34.25 16.3375 33.9125 16 33.5 16H32C31.5875 16 31.25 16.3375 31.25 16.75V19.75H28.25C27.8375 19.75 27.5 20.0875 27.5 20.5V22C27.5 22.4125 27.8375 22.75 28.25 22.75H31.25V25.75C31.25 26.1625 31.5875 26.5 32 26.5H33.5C33.9125 26.5 34.25 26.1625 34.25 25.75V22.75H37.25C37.6625 22.75 38 22.4125 38 22V20.5C38 20.0875 37.6625 19.75 37.25 19.75ZM18.5 22C21.8141 22 24.5 19.3141 24.5 16C24.5 12.6859 21.8141 10 18.5 10C15.1859 10 12.5 12.6859 12.5 16C12.5 19.3141 15.1859 22 18.5 22ZM22.7 23.5H21.9172C20.8766 23.9781 19.7188 24.25 18.5 24.25C17.2812 24.25 16.1281 23.9781 15.0828 23.5H14.3C10.8219 23.5 8 26.3219 8 29.8V31.75C8 32.9922 9.00781 34 10.25 34H26.75C27.9922 34 29 32.9922 29 31.75V29.8C29 26.3219 26.1781 23.5 22.7 23.5Z" fill="white"/>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="20" viewBox="0 0 6 27" fill="none">
                                        <circle cx="2.75704" cy="2.75704" r="2.75704" fill="#494949"/>
                                        <circle cx="2.75704" cy="13.5002" r="2.75704" fill="#494949"/>
                                        <circle cx="2.75704" cy="24.2429" r="2.75704" fill="#494949"/>
                                    </svg>
                                </div>
</div>

                        </div>
                    </div>
                    <div>
                        data
                    </div>
                </div>
            </main>
        )
    )
};

export default Component;
