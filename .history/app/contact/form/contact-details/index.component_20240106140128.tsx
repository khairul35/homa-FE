import { ComponentProps } from "./index.props";
import styles from './index.module.css';

const Component = (props: ComponentProps) => {
    const { contact } = props;

    const labelClass = "input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"

    return (
        <div>
            <h2 className="p-4 pl-10 font-semibold">Contact Details</h2>
            <div className={styles.divider}></div>
            <div className="p-5">
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
                    <br />
                    <a style={{ color: '#158BB8' }}>
                        + Add another person
                    </a>
                </form>
            </div>
        </div>
    );
};

export default Component;
