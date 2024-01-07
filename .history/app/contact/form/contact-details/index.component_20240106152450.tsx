import { ComponentProps } from "./index.props";
import styles from './index.module.css';
import countries from '@/constant/Country.json';

const Component = (props: ComponentProps) => {
    const { contact } = props;

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
                    />
                    <label className="label mt-5">Account number</label>
                    <input
                        placeholder=""
                        className={labelClass}
                    />
                    <p className="text-xs font-light pt-2">
                        Add a unique account number to identity, reference and search for the contact
                    </p>
                    <h2 className="pt-10 font-semibold">Primary person</h2>
                    <div className="flex flex-wrap justify-center md:justify-start gap-5">
                        {/* First Name */}
                        <div className="w-full md:w-[calc(50%-10px)]">
                            <label className="label mt-2">First Name</label>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="input-sm input input-bordered bg-white border-gray-400 w-full"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="w-full md:w-[calc(50%-10px)]">
                            <label className="label mt-2">Last Name</label>
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="input-sm input input-bordered bg-white border-gray-400 w-full"
                            />
                        </div>
                    </div>
                    <label className="label mt-5">Email</label>
                    <input
                        placeholder="name@email.com"
                        className={labelClass}
                    />
                    <div className="p-10">
                        <a className={styles.addAnotherPersonAnchor}>
                            + Add another person
                        </a>
                    </div>
                    <h2 className="pt-10 font-semibold">Business information</h2>
                    <label className="label mt-5">Phone number</label>
                    <select
                        placeholder="Country Code"
                        className="input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[200px]"
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
                    />
                    <div className="p-10">
                        <a className={styles.addAnotherPersonAnchor}>
                            + Add phone number
                        </a>
                    </div>
                    <label className="label mt-5">Website</label>
                    <input
                        placeholder=""
                        className={labelClass}
                    />
                    <label className="label mt-5">Business registration</label>
                    <input
                        placeholder=""
                        className={labelClass}
                    />
                    <label className="label mt-5">Notes</label>
                    <input
                        placeholder=""
                        className={labelClass}
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
