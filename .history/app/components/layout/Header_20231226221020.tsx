'use client';

import Link from "next/link";
import BusinessMenu from "./header/BusinessMenu";
import CompanyMenu from "./header/CompanyMenu";
import OrganizationRepository from '@/api/organization';
import { useState, useEffect } from "react";
import { Organization } from "./props";

const Header = () => {
    const [organization, setOrganization] = useState<Partial<Organization>>({});
    const [organizations, setOrganizations] = useState<Organization[]>([]);

    const findMyOrganization = async () => {
        const { data } = await OrganizationRepository.findMyOrganization();
        setOrganization(data);
    };

    const findMyOrganizations = async () => {
        const { data } = await OrganizationRepository.findMyOrganizations();
        setOrganizations(data);
    };

    useEffect(() => {
        if (localStorage.getItem('isLogin') == 'true') {
            findMyOrganization();
            findMyOrganizations();
        }
    }, []);

    return (
        localStorage.getItem('isLogin') == 'true' ?
        <div
            className="navbar border-b shadow-black-200"
            style={{ backgroundColor: "#158BB8", color: "#fff" }}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn -btn-ghost lg:hidden">
                        <svg
                            xmlns="http:www.w3.org/2000/svg"
                            className="h-5 2-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li tabIndex={0} style={{ zIndex: 2 }}>
                            <details>
                                <summary>Business</summary>
                                <BusinessMenu />
                            </details>
                        </li>
                        <li>
                            <Link href="/accounting">Accounting</Link>
                        </li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <a className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 33 34" fill="none">
                        <path d="M16.497 14.3524C15.7961 14.3524 15.2148 13.8266 15.2148 13.1925V8.04214C15.2148 7.40801 15.7961 6.88214 16.497 6.88214C17.1978 6.88214 17.7791 7.40801 17.7791 8.04214V13.1925C17.7791 13.8421 17.1978 14.3524 16.497 14.3524Z" fill="white"/>
                        <path d="M16.5295 29.5566C12.119 29.5566 7.72562 28.9225 3.53739 27.6542C1.98177 27.1902 0.802227 26.1849 0.289383 24.9167C-0.223461 23.6484 -0.0525134 22.1945 0.785132 20.9263L2.95617 17.6473C3.43483 16.9204 3.86219 15.5594 3.86219 14.7087V11.4608C3.86219 5.13491 9.53767 0 16.5295 0C23.5213 0 29.1967 5.13491 29.1967 11.4608V14.7087C29.1967 15.5439 29.6241 16.9204 30.1028 17.6473L32.2738 20.9263C33.0773 22.1327 33.214 23.5711 32.6841 24.8857C32.1541 26.2004 30.9917 27.2057 29.5215 27.6542C25.3333 28.938 20.9399 29.5566 16.5295 29.5566ZM16.5295 2.33546C10.9565 2.33546 6.42641 6.43411 6.42641 11.4762V14.7242C6.42641 15.977 5.87938 17.7865 5.1614 18.8537L2.99036 22.1481C2.5459 22.8132 2.44333 23.5247 2.69975 24.1433C2.95617 24.762 3.53739 25.226 4.35794 25.4734C12.2215 27.8398 20.8716 27.8398 28.7352 25.4734C29.4703 25.2569 30.0344 24.762 30.2908 24.1124C30.5643 23.4628 30.4788 22.7513 30.0857 22.1481L27.9146 18.8692C27.1966 17.802 26.6496 15.9924 26.6496 14.7396V11.4917C26.6325 6.43411 22.1024 2.33546 16.5295 2.33546Z" fill="white"/>
                        <path d="M16.4942 33.5C14.665 33.5 12.8701 32.8195 11.5709 31.644C10.2717 30.4686 9.51953 28.8446 9.51953 27.1896H12.0838C12.0838 28.2414 12.5624 29.2622 13.3829 30.0046C14.2035 30.747 15.3317 31.18 16.4942 31.18C18.9216 31.18 20.9046 29.3859 20.9046 27.1896H23.4689C23.4689 30.6696 20.3405 33.5 16.4942 33.5Z" fill="white"/>
                    </svg>
                </a>
                <a className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 34 36" fill="none">
                        <path d="M2 16.9625C2 8.69375 8.375 2 16.25 2" stroke="white" strokeWidth="3.17336" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M30.502 16.9625C30.502 25.2312 24.127 31.925 16.252 31.925C10.642 31.925 5.78203 28.523 3.45703 23.5617" stroke="white" strokeWidth="3.17336" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 6.72504H29" stroke="white" strokeWidth="3.17336" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 11.45H24.5" stroke="white" strokeWidth="3.17336" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M32 33.5L29 30.35" stroke="white" strokeWidth="3.17336" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
                <a className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 34 34" fill="none">
                        <path d="M24.135 0H9.88192C3.69084 0 0 3.689 0 9.877V24.106C0 30.311 3.69084 34 9.88192 34H24.118C30.3091 34 33.9999 30.311 33.9999 24.123V9.877C34.0169 3.689 30.3261 0 24.135 0ZM27.2136 18.275H18.2841V27.2C18.2841 27.897 17.7058 28.475 17.0085 28.475C16.3111 28.475 15.7328 27.897 15.7328 27.2V18.275H6.80339C6.10604 18.275 5.52775 17.697 5.52775 17C5.52775 16.303 6.10604 15.725 6.80339 15.725H15.7328V6.8C15.7328 6.103 16.3111 5.525 17.0085 5.525C17.7058 5.525 18.2841 6.103 18.2841 6.8V15.725H27.2136C27.9109 15.725 28.4892 16.303 28.4892 17C28.4892 17.697 27.9109 18.275 27.2136 18.275Z" fill="white"/>
                    </svg>
                </a>
                <a className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 49 50" fill="none">
                        <path d="M31.1171 15.8919C31.6121 16.9039 31.9046 18.0539 31.9046 19.2729C31.8821 23.3439 28.7546 26.6789 24.7946 26.7939C24.6371 26.7709 24.4346 26.7709 24.2546 26.7939C20.2946 26.6559 17.1445 23.3439 17.1445 19.2729C17.1445 15.1099 20.4296 11.7289 24.5246 11.7289" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M39.666 41.974C35.661 45.7229 30.351 47.9999 24.501 47.9999C18.6509 47.9999 13.3409 45.7229 9.33594 41.974C9.56094 39.812 10.9109 37.696 13.3184 36.04C19.4834 31.854 29.5635 31.854 35.6835 36.04C38.091 37.696 39.441 39.812 39.666 41.974Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.5 11.2C3.6875 15.0409 2 19.8249 2 24.9999C2 37.6958 12.08 47.9998 24.5 47.9998C36.92 47.9998 47 37.6958 47 24.9999C47 12.3039 36.92 2 24.5 2C21.2825 2 18.2 2.69 15.4325 3.95499" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </a>
                    <ul className="menu menu-horizontal px-1">
                        <li tabIndex={0} style={{ borderRadius: '5px', background: '#0E3265', zIndex: 2 }}>
                            <details>
                                <summary>
                                    {organization.name}
                                </summary>
                                <CompanyMenu />
                            </details>
                        </li>
                    </ul>
            </div>
        </div>
        :
        <div
            className="navbar border-b shadow-black-200"
            style={{ backgroundColor: "#158BB8", color: "#fff" }}
        >
            <h2 className="text-xl">HOMA DESIGN</h2>
        </div>
    )
};

export default Header;
