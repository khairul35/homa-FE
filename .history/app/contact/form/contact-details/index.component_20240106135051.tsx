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
                    <span>
                        Add a unique account number to identity, reference and search for the contact
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Component;
