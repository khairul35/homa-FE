import { Props } from "./props";
import styles from "./index.module.css"
import countries from '@/constant/Country.json';

const Component = (props: Props) => {
    const { onBack, onSave, updateDetail, detail } = props;

    return (
        <div className="bg-bg-color min-h-screen overflow-auto pb-5">
            <div className="bg-white border-b-2 border-black">
                <h1 className="pl-20 pt-5 pb-5 text-l font-bold">
                    <a
                        className="text-blue-600 cursor-pointer"
                        onClick={() => onBack()}
                    >
                        Organization Setting
                    </a>
                    &nbsp;&gt; Organization details
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
                                value={detail?.name}
                                onChange={(e) => updateDetail({ name: e.target.value })}
                                type="text"
                                placeholder="Display Name"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5">Legal / Trading name (required)</label>
                            <input
                                value={detail?.tradingName}
                                onChange={(e) => updateDetail({ tradingName: e.target.value })}
                                type="text"
                                placeholder="Legal / Trading name"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5">Industry</label>
                            <input
                                value={detail?.industry || ''}
                                onChange={(e) => updateDetail({ industry: e.target.value })}
                                type="text"
                                placeholder="Industry"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5">Organization Type (required)</label>
                            <select
                                value={detail?.organizationType}
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
                                value={detail?.registrationNumber || ''}
                                onChange={(e) => updateDetail({ registrationNumber: e.target.value })}
                                type="text"
                                placeholder="Business Registration Number"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5">Organisation Description</label>
                            <textarea
                                value={detail?.organizationDescription || ''}
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
                                value={detail?.postalAddress?.addressLine1 || ''}
                                onChange={(e) => updateDetail({ postalAddress: {
                                    addressLine1: e.target.value || '',
                                    addressLine2: detail?.postalAddress?.addressLine2 || '',
                                    city: detail?.postalAddress?.city || '',
                                    state: detail?.postalAddress?.state || '',
                                    postalCode: detail?.postalAddress?.postalCode
                                }})}
                                type="text"
                                placeholder="Address line 1"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5"></label>
                            <input
                                value={detail?.postalAddress?.addressLine2 || ''}
                                onChange={(e) => updateDetail({ postalAddress: {
                                    addressLine1: detail?.postalAddress?.addressLine1 || '',
                                    addressLine2: e.target.value || '',
                                    city: detail?.postalAddress?.city || '',
                                    state: detail?.postalAddress?.state || '',
                                    postalCode: detail?.postalAddress?.postalCode
                                }})}
                                type="text"
                                placeholder="Address line 2"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5"></label>
                            <input
                                value={detail?.postalAddress?.city || ''}
                                onChange={(e) => updateDetail({ postalAddress: {
                                    addressLine1: detail?.postalAddress?.addressLine1 || '',
                                    addressLine2: detail?.postalAddress?.addressLine2 || '',
                                    city: e.target.value || '',
                                    state: detail?.postalAddress?.state || '',
                                    postalCode: detail?.postalAddress?.postalCode
                                }})}
                                type="text"
                                placeholder="City"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5"></label>
                            <input
                                value={detail?.postalAddress?.state || ''}
                                onChange={(e) => updateDetail({ postalAddress: {
                                    addressLine1: detail?.postalAddress?.addressLine1 || '',
                                    addressLine2: detail?.postalAddress?.addressLine2 || '',
                                    city: detail?.postalAddress?.city || '',
                                    state: e.target.value || '',
                                    postalCode: detail?.postalAddress?.postalCode
                                }})}
                                type="text"
                                placeholder="State / Region"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[250px]"
                            />
                            <input
                                value={detail?.postalAddress?.postalCode || ''}
                                onChange={(e) => updateDetail({ postalAddress: {
                                    addressLine1: detail?.postalAddress?.addressLine1 || '',
                                    addressLine2: detail?.postalAddress?.addressLine2 || '',
                                    city: detail?.postalAddress?.city || '',
                                    state: detail?.postalAddress?.state || '',
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
                                        checked={detail?.physicalIsPostal}
                                        onChange={(e) => updateDetail({ physicalIsPostal: !detail.physicalIsPostal })}
                                        className="checkbox"
                                    />
                                </label>
                            </label>

                            <input
                                value={detail?.physicalAddress?.addressLine1 || ''}
                                onChange={(e) => updateDetail({ physicalAddress: {
                                    addressLine1: e.target.value || '',
                                    addressLine2: detail?.physicalAddress?.addressLine2 || '',
                                    city: detail?.physicalAddress?.city || '',
                                    state: detail?.physicalAddress?.state || '',
                                    postalCode: detail?.physicalAddress?.postalCode || '',
                                }})}
                                type="text"
                                placeholder="Address line 1"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5"></label>
                            <input
                                value={detail?.physicalAddress?.addressLine2 || ''}
                                onChange={(e) => updateDetail({ physicalAddress: {
                                    addressLine1: detail?.physicalAddress?.addressLine1 || '',
                                    addressLine2: e.target.value || '',
                                    city: detail?.physicalAddress?.city || '',
                                    state: detail?.physicalAddress?.state || '',
                                    postalCode: detail?.physicalAddress?.postalCode || '',
                                }})}
                                type="text"
                                placeholder="Address line 2"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5"></label>
                            <input
                                value={detail?.physicalAddress?.city || ''}
                                onChange={(e) => updateDetail({ physicalAddress: {
                                    addressLine1: detail?.physicalAddress?.addressLine1 || '',
                                    addressLine2: detail?.physicalAddress?.addressLine2 || '',
                                    city: e.target.value || '',
                                    state: detail?.physicalAddress?.state || '',
                                    postalCode: detail?.physicalAddress?.postalCode || '',
                                }})}
                                type="text"
                                placeholder="City"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                            />
                            <label className="label mt-5"></label>
                            <input
                                value={detail?.physicalAddress?.state || ''}
                                onChange={(e) => updateDetail({ physicalAddress: {
                                    addressLine1: detail?.physicalAddress?.addressLine1 || '',
                                    addressLine2: detail?.physicalAddress?.addressLine2 || '',
                                    city: detail?.physicalAddress?.city || '',
                                    state: e.target.value || '',
                                    postalCode: detail?.physicalAddress?.postalCode || '',
                                }})}
                                type="text"
                                placeholder="State / Region"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[250px]"
                            />
                            <input
                                value={detail?.physicalAddress?.postalCode || ''}
                                onChange={(e) => updateDetail({ physicalAddress: {
                                    addressLine1: detail?.physicalAddress?.addressLine1 || '',
                                    addressLine2: detail?.physicalAddress?.addressLine2 || '',
                                    city: detail?.physicalAddress?.city || '',
                                    state: detail?.physicalAddress?.state || '',
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
                                value={detail?.telephone?.countryCode || ''}
                                onChange={(e) => updateDetail({
                                    telephone: {
                                        countryCode: e.target.value,
                                        number: detail.telephone?.number || '',
                                    }
                                })}
                            >
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
                                value={detail?.telephone?.number || ''}
                                onChange={(e) => updateDetail({
                                    telephone: {
                                        countryCode: detail.telephone?.countryCode || '',
                                        number: e.target.value,
                                    }
                                })}
                            />
                            <label className="label mt-5">Email</label>
                            <input
                                type="text"
                                placeholder="Email"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                                value={detail?.email || ''}
                                onChange={(e) => updateDetail({ email: e.target.value })}
                            />
                            <label className="label mt-5">Website</label>
                            <input
                                type="text"
                                placeholder="Website"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                                value={detail?.website || ''}
                                onChange={(e) => updateDetail({ website: e.target.value })}
                            />
                            <label className="label mt-5">Mobile</label>
                            <select
                                placeholder="Country Code"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[200px]"
                                value={detail?.mobile?.countryCode || ''}
                                onChange={(e) => updateDetail({
                                    mobile: {
                                        countryCode: e.target.value,
                                        number: detail?.mobile?.number || '',
                                    }
                                })}
                            >
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
                                value={detail?.mobile?.number || ''}
                                onChange={(e) => updateDetail({
                                        mobile: {
                                            countryCode: detail?.mobile?.countryCode || '',
                                            number: e.target.value,
                                        }
                                    })
                                }
                            />
                            <label className="label mt-5">Fax</label>
                            <select
                                placeholder="Country Code"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[200px]"
                                value={detail?.fax?.countryCode || ''}
                                onChange={(e) => updateDetail({
                                    fax: {
                                        countryCode: e.target.value,
                                        number: detail?.fax?.number || '',
                                    }
                                })}
                            >
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
                                        countryCode: detail?.fax?.countryCode || '',
                                        number: e.target.value,
                                    }
                                })}
                            />
                            <label className="label mt-5">Facebook</label>
                            <input
                                type="text"
                                placeholder="facebook.com/"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                                value={detail?.facebook || ''}
                                onChange={(e) => updateDetail({ facebook: e.target.value })}
                            />
                            <label className="label mt-5">Twitter</label>
                            <input
                                type="text"
                                placeholder="twitter.com/"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                                value={detail?.twitter || ''}
                                onChange={(e) => updateDetail({ facebook: e.target.value })}
                            />
                            <label className="label mt-5">Linkedin</label>
                            <input
                                type="text"
                                placeholder="linkedin.com/"
                                className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"
                                value={detail?.linkedin || ''}
                                onChange={(e) => updateDetail({ facebook: e.target.value })}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <footer className="fixed bottom-0 w-full bg-white shadow-md border-t border-gray-300 text-right px-5 py-2">
                <button className="btn btn-sm mr-2" onClick={onBack}>Cancel</button>
                <button className="btn btn-primary btn-sm" onClick={onSave}>Save</button>
            </footer>
        </div>
    )
};

export default Component;
