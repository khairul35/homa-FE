'use client';

const BusinessMenu = () => {
    return (
        <>
            <ul className="p-2 bg-white" style={{ color: "#000", width: "250px" }}>
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 46 46" fill="none">
                            <path d="M3 3V43" stroke="#0E3265" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M43 43H3" stroke="#0E3265" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.8888 31.8889L23.5555 20.2222L31.3332 28L42.9999 16.3333" stroke="#0E3265" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Analytics
                    </a>
                </li>
                <li>
                    <a>Short-term cash flow</a>
                </li>
                <li>
                    <a>Business snapshot</a>
                </li>
                <div className="divider before:bg-black after:bg-black"></div>
                <li>
                    <a>Invoices</a>
                </li>
                <li>
                    <a>Quotes</a>
                </li>
                <li>
                    <a>Quotes</a>
                </li>
                <li>
                    <a>Sales overview</a>
                </li>
                <div className="divider before:bg-black after:bg-black"></div>
                <li>
                    <a>Bills to pay</a>
                </li>
                <li>
                    <a>Purchase orders</a>
                </li>
                <li>
                    <a>Purchase overview</a>
                </li>
                <div className="divider before:bg-black after:bg-black"></div>
                <li>
                    <a>Expense claims</a>
                </li>
                <li>
                    <a>Produts and services</a>
                </li>
                <li>
                    <a>Pay run</a>
                </li>
                <li>
                    <a>Cheques</a>
                </li>
            </ul>
        </>
    )
}

export default BusinessMenu;
