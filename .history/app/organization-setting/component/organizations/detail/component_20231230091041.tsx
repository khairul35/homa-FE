import { Props } from "./props";
import styles from './index.module.css';
import Notification from "@/app/components/notification";
import countries from '@/constant/Country.json';

const Component = (props: Props) => {
    const {
        selectedOrganization: organization,
        error,
        notification,
        numberOfOrganizations,
        backToList,
        closeMessage,
        backToMainSetting,
        onSave,
        updateDetail,
    } = props;

    const RenderError = () => {
        return error ? (
            <span className="text-red-600 pr-10 font-semibold">{error}</span>
        ) : (
            <></>
        );
    };

    const RenderNotification = () => {
        return notification ? (
                <span>
                    <Notification message={notification.message} type={notification.type} closeMessage={closeMessage} />
                </span>
            )
            : (<></>)
    };

    return (

        <div className="bg-bg-color min-h-screen overflow-auto pb-5">
            <div className="bg-white border-b-2 border-black">
                <h1 className="pl-20 pt-5 pb-5 text-l font-bold">
                    <a
                        className="text-blue-600 cursor-pointer"
                        onClick={() => backToMainSetting()}
                    >
                        Organization Setting
                    </a>
                    &nbsp;&gt;&nbsp;
                    <a
                        className="text-blue-600 cursor-pointer"
                        onClick={() => backToList()}
                    >
                        Organizations ({numberOfOrganizations})
                    </a>
                    &nbsp;&gt; {organization?.name}
                </h1>
            </div>
            <div className="mt-0 p-10 pl-20 pr-20">
                <div className={styles.card}>
                    <h2 className="text-xl font-semibold p-5 pl-20  border-b border-gray-300">
                        Basic Information
                    </h2>
                    <div className="p-5 flex justify-center">
                        <form method="dialog">
                            <label className="label mt-2">Display Name (required)</label>
                            <input
                                value={organization?.name}
                                onChange={(e) => updateDetail({ name: e.target.value })}
                                type="text"
                                placeholder="Display Name"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5">Legal / Trading name (required)</label>
                            <input
                                value={organization?.tradingName}
                                onChange={(e) => updateDetail({ tradingName: e.target.value })}
                                type="text"
                                placeholder="Legal / Trading name"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5">Industry</label>
                            <input
                                value={organization?.industry || ''}
                                onChange={(e) => updateDetail({ industry: e.target.value })}
                                type="text"
                                placeholder="Industry"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5">Organization Type (required)</label>
                            <select
                                value={organization?.organizationType}
                                onChange={(e) => updateDetail({ organizationType: e.target.value })}
                                className="select-sm select select-bordered bg-white border-gray-400 md:w-[500px]">
                                <option disabled value="">Select Organization Type</option>
                                <option value="Charity">Charity</option>
                                <option value="Club or Society">Club or Society</option>
                                <option value="Company">Company</option>
                                <option value="Partnership">Partnership</option>
                                <option value="Person">Person</option>
                                <option value="Sole Trader">Sole Trader</option>
                                <option value="Trust">Trust</option>
                            </select>
                            <label className="label mt-5">Business Registration Number</label>
                            <input
                                value={organization?.registrationNumber || ''}
                                onChange={(e) => updateDetail({ registrationNumber: e.target.value })}
                                type="text"
                                placeholder="Business Registration Number"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5">Organisation Description</label>
                            <textarea
                                value={organization?.organizationDescription || ''}
                                onChange={(e) => updateDetail({ organizationDescription: e.target.value })}
                                placeholder="Organisation Description"
                                className="textarea textarea-bordered bg-white border-gray-400 w-full md:w-[500px]"
                            />
                        </form>
                    </div>
                </div>
                <div className={styles.card}>
                    <h2 className="text-xl font-semibold p-5 pl-20  border-b border-gray-300">
                        Contact Information
                    </h2>
                    <div className="p-5 flex justify-center">
                        <form method="dialog">
                            <label className="label mt-5">Postal Address</label>
                            <input
                                value={organization?.postalAddress?.addressLine1 || ''}
                                onChange={(e) => updateDetail({ postalAddress: {
                                    addressLine1: e.target.value || '',
                                    addressLine2: organization?.postalAddress?.addressLine2 || '',
                                    city: organization?.postalAddress?.city || '',
                                    state: organization?.postalAddress?.state || '',
                                    postalCode: organization?.postalAddress?.postalCode || '',
                                }})}
                                type="text"
                                placeholder="Address line 1"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5"></label>
                            <input
                                value={organization?.postalAddress?.addressLine2 || ''}
                                onChange={(e) => updateDetail({ postalAddress: {
                                    addressLine1: organization?.postalAddress?.addressLine1 || '',
                                    addressLine2: e.target.value || '',
                                    city: organization?.postalAddress?.city || '',
                                    state: organization?.postalAddress?.state || '',
                                    postalCode: organization?.postalAddress?.postalCode || ''
                                }})}
                                type="text"
                                placeholder="Address line 2"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5"></label>
                            <input
                                value={organization?.postalAddress?.city || ''}
                                onChange={(e) => updateDetail({ postalAddress: {
                                    addressLine1: organization?.postalAddress?.addressLine1 || '',
                                    addressLine2: organization?.postalAddress?.addressLine2 || '',
                                    city: e.target.value || '',
                                    state: organization?.postalAddress?.state || '',
                                    postalCode: organization?.postalAddress?.postalCode || ''
                                }})}
                                type="text"
                                placeholder="City"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5"></label>
                            <input
                                value={organization?.postalAddress?.state || ''}
                                onChange={(e) => updateDetail({ postalAddress: {
                                    addressLine1: organization?.postalAddress?.addressLine1 || '',
                                    addressLine2: organization?.postalAddress?.addressLine2 || '',
                                    city: organization?.postalAddress?.city || '',
                                    state: e.target.value || '',
                                    postalCode: organization?.postalAddress?.postalCode || ''
                                }})}
                                type="text"
                                placeholder="State / Region"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[250px]"
                            />
                            <input
                                value={organization?.postalAddress?.postalCode || ''}
                                onChange={(e) => updateDetail({ postalAddress: {
                                    addressLine1: organization?.postalAddress?.addressLine1 || '',
                                    addressLine2: organization?.postalAddress?.addressLine2 || '',
                                    city: organization?.postalAddress?.city || '',
                                    state: organization?.postalAddress?.state || '',
                                    postalCode: e.target.value || '',
                                }})}
                                type="text"
                                placeholder="Postal / Zip Code"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[240px] ml-2"
                            />
                            <label className="label mt-5">
                                Physical Address
                                <label className="label cursor-pointer">
                                    <span className="label">Same as Postal Address</span>
                                    <input
                                        type="checkbox"
                                        checked={organization?.physicalIsPostal}
                                        onChange={(e) => updateDetail({ physicalIsPostal: !organization?.physicalIsPostal })}
                                        className="checkbox"
                                    />
                                </label>
                            </label>

                            <input
                                value={organization?.physicalAddress?.addressLine1 || ''}
                                onChange={(e) => updateDetail({ physicalAddress: {
                                    addressLine1: e.target.value || '',
                                    addressLine2: organization?.physicalAddress?.addressLine2 || '',
                                    city: organization?.physicalAddress?.city || '',
                                    state: organization?.physicalAddress?.state || '',
                                    postalCode: organization?.physicalAddress?.postalCode || '',
                                }})}
                                type="text"
                                placeholder="Address line 1"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5"></label>
                            <input
                                value={organization?.physicalAddress?.addressLine2 || ''}
                                onChange={(e) => updateDetail({ physicalAddress: {
                                    addressLine1: organization?.physicalAddress?.addressLine1 || '',
                                    addressLine2: e.target.value || '',
                                    city: organization?.physicalAddress?.city || '',
                                    state: organization?.physicalAddress?.state || '',
                                    postalCode: organization?.physicalAddress?.postalCode || '',
                                }})}
                                type="text"
                                placeholder="Address line 2"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5"></label>
                            <input
                                value={organization?.physicalAddress?.city || ''}
                                onChange={(e) => updateDetail({ physicalAddress: {
                                    addressLine1: organization?.physicalAddress?.addressLine1 || '',
                                    addressLine2: organization?.physicalAddress?.addressLine2 || '',
                                    city: e.target.value || '',
                                    state: organization?.physicalAddress?.state || '',
                                    postalCode: organization?.physicalAddress?.postalCode || '',
                                }})}
                                type="text"
                                placeholder="City"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5"></label>
                            <input
                                value={organization?.physicalAddress?.state || ''}
                                onChange={(e) => updateDetail({ physicalAddress: {
                                    addressLine1: organization?.physicalAddress?.addressLine1 || '',
                                    addressLine2: organization?.physicalAddress?.addressLine2 || '',
                                    city: organization?.physicalAddress?.city || '',
                                    state: e.target.value || '',
                                    postalCode: organization?.physicalAddress?.postalCode || '',
                                }})}
                                type="text"
                                placeholder="State / Region"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[250px]"
                            />
                            <input
                                value={organization?.physicalAddress?.postalCode || ''}
                                onChange={(e) => updateDetail({ physicalAddress: {
                                    addressLine1: organization?.physicalAddress?.addressLine1 || '',
                                    addressLine2: organization?.physicalAddress?.addressLine2 || '',
                                    city: organization?.physicalAddress?.city || '',
                                    state: organization?.physicalAddress?.state || '',
                                    postalCode: e.target.value || '',
                                }})}
                                type="text"
                                placeholder="Postal / Zip Code"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[240px] ml-2"
                            />
                            <label className="label mt-5">Telephone</label>
                            <select
                                placeholder="Country Code"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[200px]"
                                value={organization?.telephone?.countryCode || ''}
                                onChange={(e) => updateDetail({
                                    telephone: {
                                        countryCode: e.target.value,
                                        number: organization?.telephone?.number || '',
                                    }
                                })}
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
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[290px] ml-2"
                                value={organization?.telephone?.number || ''}
                                onChange={(e) => updateDetail({
                                    telephone: {
                                        countryCode: organization?.telephone?.countryCode || '',
                                        number: e.target.value,
                                    }
                                })}
                            />
                            <label className="label mt-5">Email</label>
                            <input
                                type="text"
                                placeholder="Email"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                                value={organization?.email || ''}
                                onChange={(e) => updateDetail({ email: e.target.value })}
                            />
                            <label className="label mt-5">Website</label>
                            <input
                                type="text"
                                placeholder="Website"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                                value={organization?.website || ''}
                                onChange={(e) => updateDetail({ website: e.target.value })}
                            />
                            <label className="label mt-5">Mobile</label>
                            <select
                                placeholder="Country Code"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[200px]"
                                value={organization?.mobile?.countryCode || ''}
                                onChange={(e) => updateDetail({
                                    mobile: {
                                        countryCode: e.target.value,
                                        number: organization?.mobile?.number || '',
                                    }
                                })}
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
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[290px] ml-2"
                                value={organization?.mobile?.number || ''}
                                onChange={(e) => updateDetail({
                                        mobile: {
                                            countryCode: organization?.mobile?.countryCode || '',
                                            number: e.target.value,
                                        }
                                    })
                                }
                            />
                            <label className="label mt-5">Fax</label>
                            <select
                                placeholder="Country Code"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[200px]"
                                value={organization?.fax?.countryCode || ''}
                                onChange={(e) => updateDetail({
                                    fax: {
                                        countryCode: e.target.value,
                                        number: organization?.fax?.number || '',
                                    }
                                })}
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
                                placeholder="Fax number"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[290px] ml-2"
                                onChange={(e) => updateDetail({
                                    fax: {
                                        countryCode: organization?.fax?.countryCode || '',
                                        number: e.target.value,
                                    }
                                })}
                            />
                            <label className="label mt-5">Facebook</label>
                            <input
                                type="text"
                                placeholder="facebook.com/"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                                value={organization?.facebook || ''}
                                onChange={(e) => updateDetail({ facebook: e.target.value })}
                            />
                            <label className="label mt-5">Twitter</label>
                            <input
                                type="text"
                                placeholder="twitter.com/"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                                value={organization?.twitter || ''}
                                onChange={(e) => updateDetail({ facebook: e.target.value })}
                            />
                            <label className="label mt-5">Linkedin</label>
                            <input
                                type="text"
                                placeholder="linkedin.com/"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                                value={organization?.linkedin || ''}
                                onChange={(e) => updateDetail({ facebook: e.target.value })}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <footer className={`
                fixed bottom-0 w-full shadow-md border-t border-gray-300 text-right px-5 py-2
                ${error ? 'bg-red-100' : 'bg-white'}`}>
                <RenderError />
                <button className="btn btn-sm mr-2" onClick={backToList}>Cancel</button>
                <button className="btn btn-primary btn-sm" onClick={onSave}>Save</button>
            </footer>
            <RenderNotification />
        </div>
    )
};

export default Component
