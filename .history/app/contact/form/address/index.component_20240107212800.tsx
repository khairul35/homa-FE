import { ComponentProps } from "./index.props";
import styles from './index.module.css';
import countries from '@/constant/Country.json';

const Component = (props: ComponentProps) => {
    const {contact, onCancel } = props;

    const labelClass = "input-sm input input-bordered  bg-white border-gray-400 w-full"

    const FakeCheckBox = () => {
        if (contact?.isBillingSameAsDelivery) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                    <rect width="30" height="30" rx="5" fill="#158BB8"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6894 9C21.3155 9 20.9817 9.14689 20.7413 9.38727L12.3416 17.8003L9.28354 14.7289C9.04316 14.4885 8.70931 14.3416 8.3354 14.3416C7.60093 14.3416 7 14.9425 7 15.677C7 16.0509 7.14689 16.3848 7.38727 16.6251L11.3935 20.6313C11.6338 20.8717 11.9677 21.0186 12.3416 21.0186C12.7155 21.0186 13.0494 20.8717 13.2897 20.6313L22.6376 11.2835C22.8779 11.0432 23.0248 10.7093 23.0248 10.3354C23.0248 9.60093 22.4239 9 21.6894 9Z" fill="white"/>
                </svg>
            );
            }
            return (<FakeEmptyCheckBox />);
    };

    const FakeEmptyCheckBox = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                <rect width="30" height="30" rx="5" fill="#FFFFFF"/>
            </svg>
        );
    };

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
                        className={labelClass}
                    />
                    <input
                        placeholder="Address Line 2"
                        className={`mt-3 ${labelClass}`}
                    />
                    <div className="flex flex-wrap justify-center md:justify-start gap-5">
                        <div className="w-full md:w-[calc(50%-10px)]">
                            <label className="label mt-5">City</label>
                            <input
                                placeholder="City"
                                className={labelClass}
                            />
                        </div>
                        <div className="w-full md:w-[calc(50%-10px)]">
                            <label className="label mt-5">State</label>
                            <input
                                placeholder="State"
                                className={labelClass}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-5">
                        <div className="w-full md:w-[calc(50%-10px)]">
                            <label className="label mt-5">Zip City</label>
                            <input
                                placeholder="Zip City"
                                className={labelClass}
                            />
                        </div>
                        <div className="w-full md:w-[calc(50%-10px)]">
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
                        </div>
                    </div>
                    <div className={styles.billingIsDeliveryCheckBox}>
                        <label className="flex items-center cursor-pointer">
                            <FakeCheckBox />
                            <span className="ml-2">Use as delivery address</span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Component;
