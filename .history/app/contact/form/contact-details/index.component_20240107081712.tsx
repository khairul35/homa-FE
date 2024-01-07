import { ComponentProps } from "./index.props";
import styles from './index.module.css';
import countries from '@/constant/Country.json';
import { ContactPhoneNumber, ContactPrimaryPerson } from "../../index.props";

const Component = (props: ComponentProps) => {
    const {
        contact,
        addAnotherPerson,
        addPhoneNumber,
        handleContactChange,
        handlePrimaryPersonChange,
        handlePhoneNumberChange,
    } = props;

    const labelClass = "input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"

    return (
        <div>
            <h2 className="p-4 pl-10 font-semibold">Contact Details</h2>
            <div className={styles.divider}></div>
            <div className="p-5 lg:pl-20 lg:pr-20">
                <form method="dialog">
                    <label className="label mt-5">Contact Name (required)</label>
                    <input
                        placeholder="A bussiness or persons name"
                        className={labelClass}
                        value={contact?.name || ''}
                        onChange={handleContactChange}

                    />
                    <label className="label mt-5">Account number</label>
                    <input
                        placeholder=""
                        className={labelClass}
                        value={contact?.accountNumber || ''}
                        onChange={handleContactChange}
                    />
                    <p className="text-xs font-light pt-2">
                        Add a unique account number to identity, reference and search for the contact
                    </p>
                    <h2 className="pt-10 font-semibold">Primary person</h2>
                    {(contact?.contactPrimaryPerson || []).map((primaryPerson: ContactPrimaryPerson, index: number) => {
                        return (<>
                            <div className="flex flex-wrap justify-center md:justify-start gap-5">
                                {/* First Name */}
                                <div className="w-full md:w-[calc(50%-10px)]">
                                    <label className="label mt-2">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="input-sm input input-bordered bg-white border-gray-400 w-full"
                                        value={primaryPerson?.firstName || ''}
                                onChange={(e) => handlePrimaryPersonChange(index, 'firstName', e.target.value)}
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="w-full md:w-[calc(50%-10px)]">
                                    <label className="label mt-2">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="input-sm input input-bordered bg-white border-gray-400 w-full"
                                        value={primaryPerson?.lastName || ''}
                                onChange={(e) => handlePrimaryPersonChange(index, 'lastName', e.target.value)}
                                    />
                                </div>
                            </div>
                            <label className="label mt-5">Email</label>
                            <input
                                placeholder="name@email.com"
                                className={labelClass}
                                value={primaryPerson?.lastName || ''}
                                onChange={(e) => handlePrimaryPersonChange(index, 'email', e.target.value)}
                            />
                        </>)
                    })}
                    <div className="p-10">
                        <a className={styles.addAnotherPersonAnchor} onClick={addAnotherPerson}>
                            + Add another person
                        </a>
                    </div>
                    <h2 className="pt-10 font-semibold">Business information</h2>
                    {
                        (contact?.contactPhoneNumber || []).map((phoneNumber: ContactPhoneNumber, index: number) => {
                            return (<>
                                <label className="label mt-5">Phone number</label>
                                <select
                                    placeholder="Country Code"
                                    className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[200px]"
                                    value={phoneNumber?.countryCode || ''}
                                    onChange={(e) => handlePhoneNumberChange(index, 'countryCode', e.target.value)}

                                >
                                    <option disabled value="">Country Code</option>
                                    {
                                        countries.map((e) =>(
                                            <option key={e.isoCode} value={e.dialling_code}>
                                                {e.dialling_code} ({e.name})
                                            </option>
                                        ))
                                    }
                                </select>
                                <input
                                    type="text"
                                    placeholder="Phone number"
                                    className="input-sm input input-bordered bg-white border-gray-400 w-full md:w-[290px] ml-2"
                                    value={phoneNumber?.number}
                                    onChange={(e) => handlePhoneNumberChange(index, 'number', e.target.value)}

                                />
                            </>)
                        })
                    }
                    <div className="p-10">
                        <a className={styles.addAnotherPersonAnchor} onClick={addPhoneNumber}>
                            + Add phone number
                        </a>
                    </div>
                    <label className="label mt-5">Website</label>
                    <input
                        placeholder=""
                        className={labelClass}
                        onChange={handleContactChange}
                    />
                    <label className="label mt-5">Business registration</label>
                    <input
                        placeholder=""
                        className={labelClass}
                        onChange={handleContactChange}
                    />
                    <label className="label mt-5">Notes</label>
                    <input
                        placeholder=""
                        className={labelClass}
                        onChange={handleContactChange}
                    />
                    <p className="text-xs font-light pt-2">
                        Notes can only be viewed by people in your organisaton
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Component;
