import { ComponentProps } from "./index.props"
import styles from './index.module.css';
import ContactDetails from "./contact-details";
import { ContactDetailProps } from "./contact-details/index.props";
import { ContactAddressProps } from "./address/index.props";
import ContactAddress from "./address";

const Component = (props: ComponentProps) => {
    const {
        menu,
        selectedContact,
        addAnotherPerson,
        addPhoneNumber,
        setMenu,
        onBack, 
        handleContactChange,
        handlePrimaryPersonChange,
        handlePhoneNumberChange,
        onSaveDetail,
        onCancel,
    } = props;

    const contactDetailProps: ContactDetailProps = {
        contact: selectedContact,
        addAnotherPerson,
        addPhoneNumber,
        handleContactChange,
        handlePrimaryPersonChange,
        handlePhoneNumberChange,
        onSaveDetail,
        onCancel,
    };

    const contactAddressProps: ContactAddressProps = {
        onCancel,
    };

    const DetailComponent = () => {
        if (menu == 'details') {
            return (
                <>
                    <ContactDetails { ...contactDetailProps } />
                </>
            );
        }
        if (menu == 'address') {
            return (
                <>
                    <ContactAddress { ...contactAddressProps } />
                </>
            );
        }
        return (<></>)
    }
    
    return (
        <div className="bg-bg-color min-h-screen overflow-auto pb-5">
            <div className="bg-white border-b-2 border-black">
                <h1 className="pl-20 pt-5 pb-5 text-l font-bold">
                    <a
                        className="text-blue-600 cursor-pointer"
                        onClick={() => onBack()}
                    >
                        Contact
                    </a>
                    &nbsp;&gt; {selectedContact?.id ? selectedContact.name : 'Add Contact'}
                </h1>
            </div>
            <div
                className="flex
                    flex-col
                    md:flex-row
                    bg-white
                    m-10
                    pt-2
                    border-gray-500
                    border-solid
                    border"
                >
                <div className="md:w-1/4 md:order-1">
                    <div
                        className={`p-2 font-semibold cursor-pointer
                            ${styles.menu}
                            ${menu == 'details' ? styles.selectedMenu : ''}`
                        }
                        onClick={() => setMenu('details')}
                    >
                        Contact Details
                    </div>
                    <div
                        className={`p-2 font-semibold cursor-pointer
                            ${styles.menu}
                            ${menu == 'address' ? styles.selectedMenu : ''}`
                        }
                        onClick={() => setMenu('address')}
                    >
                        Addresses
                    </div>
                    <div
                        className={`p-2 font-semibold cursor-pointer
                            ${styles.menu}
                            ${menu == 'financial' ? styles.selectedMenu : ''}`
                        }
                        onClick={() => setMenu('financial')}
                    >
                        Financial Details
                    </div>
                    <div className="divider before:bg--gray-500 after:bg--gray-500"></div>
                    <div
                        className={`p-2 font-semibold cursor-pointer
                            ${styles.menu}
                            ${menu == 'setting' ? styles.selectedMenu : ''}`
                        }
                        onClick={() => setMenu('setting')}
                    >
                        Default Settings
                    </div>
                    <div
                        className={`p-2 font-semibold cursor-pointer
                            ${styles.menu}
                            ${menu == 'sales' ? styles.selectedMenu : ''}`
                        }
                        onClick={() => setMenu('sales')}
                    >
                        Sales default
                    </div>
                    <div
                        className={`p-2 font-semibold cursor-pointer
                            ${styles.menu}
                            ${menu == 'purchase' ? styles.selectedMenu : ''}`
                        }
                        onClick={() => setMenu('purchase')}
                    >
                        Purchase Default
                    </div>
                </div>
                <div className={`md:w-3/4 md:order-2 ${styles.leftDivider}`}>
                    <DetailComponent />
                </div>
            </div>
        </div>
    );
};

export default Component;
