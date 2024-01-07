import { ComponentProps } from "./index.props";
import styles from './index.module.css';
import countries from '@/constant/Country.json';

const Component = (props: ComponentProps) => {
    const { onCancel } = props;

    const labelClass = "input-sm input input-bordered  bg-white border-gray-400 w-full md:w-[500px]"

    return (
        <div>
            <h2 className="p-4 pl-10 font-semibold">Address</h2>
            <div className={styles.divider}></div>
            <div className="p-5 lg:pl-20 lg:pr-20">
                <form method="dialog">
                    <label className="label mt-5">Attention</label>
                    <input
                        placeholder="Attention to"
                        className={labelClass}
                    />

                    <label className="label mt-5">Address</label>
                    <input
                        placeholder="Address Line 1"
                        className={`mt-3 ${labelClass}`}
                    />
                    <input
                        placeholder="Address Line 2"
                        className={labelClass}
                    />
                    <label className="label mt-5">City</label>
                    <input
                        placeholder="City"
                        className={labelClass}
                    />
                    <label className="label mt-5">State</label>
                    <input
                        placeholder="State"
                        className={labelClass}
                    />
                    <label className="label mt-5">Zip City</label>
                    <input
                        placeholder="Zip City"
                        className={labelClass}
                    />
                    <label className="label mt-5">Country</label>
                    <select
                        placeholder="Country"
                        className={labelClass}
                    >
                        {
                            countries.map((e) => (
                                <option key={e.isoCode} value={e.name}>
                                    { e.name }
                                </option>
                            ))
                        }
                    </select>
                </form>
            </div>
        </div>
    )
};

export default Component;
