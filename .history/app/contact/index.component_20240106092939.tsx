import { ComponentProps } from "./index.props";

const Component = (props: ComponentProps) => {
    const {
        show,
        currentTab,
        selectedStyle,
        onClickAddContact,
    } = props;

    if (show == 'list') {
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
                                All Accounts
                            </span>
                            <span
                                className="hidden sm:inline font-semibold p-5 cursor-pointer"
                                style={currentTab == 'asset' ? selectedStyle : undefined }
                                onClick={() => setCurrentTab('asset')}
                            >
                                Assets
                            </span>
                            <span
                                className="hidden sm:inline font-semibold p-5 cursor-pointer"
                                style={currentTab == 'liabilities' ? selectedStyle : undefined }
                                onClick={() => setCurrentTab('liabilities')}
                            >
                                Liabilities
                            </span>
                            <span
                                className="hidden sm:inline font-semibold p-5 cursor-pointer"
                                style={currentTab == 'equity' ? selectedStyle : undefined }
                                onClick={() => setCurrentTab('equity')}
                            >
                                Equity
                            </span>
                            <span
                                className="hidden sm:inline font-semibold p-5 cursor-pointer"
                                style={currentTab == 'expenses' ? selectedStyle : undefined }
                                onClick={() => setCurrentTab('expenses')}
                            >
                                Expenses
                            </span>
                            <span
                                className="hidden sm:inline font-semibold p-5 cursor-pointer"
                                style={currentTab == 'revenue' ? selectedStyle : undefined }
                                onClick={() => setCurrentTab('revenue')}
                            >
                                Revenue
                            </span>
                            <span
                                className="hidden sm:inline font-semibold p-5 cursor-pointer"
                                style={currentTab == 'archive' ? selectedStyle : undefined }
                                onClick={() => setCurrentTab('archive')}
                            >
                                Archive
                            </span>
                        </div>
                        <div className="w-0 flex-1 sm:w-1/2"></div>
                        <h2 className="hidden sm:block text-xl font-semibold">Chart of Account</h2>
                    </div>
                </div>
                    </div>
                </main>
            )
        )
    }
    return (<> </>)
}