import styles from './index.module.css';
import countries from '@/constant/Country.json';

const Component = () => {


    const labelClass = "input-sm input input-bordered  bg-white border-gray-400 w-full"

    return (
        <div>
            <h2 className="p-4 pl-10 font-semibold">Financial Details</h2>
            <div className={styles.divider}></div>
            <div className="p-5 lg:pl-20 lg:pr-20">
                <form method="dialog">
                    <label className="label mt-5">Bank account name</label>
                    <input
                        placeholder="e.g. A business or person's name"
                        className={labelClass}
                    />
                    <p className="text-xs font-light pt-2">
                        These details will show against the bills to pay when you create a batch payment.
                    </p>
                    <label className='label mt-5'>Bank account number</label>
                    <input
                        placeholder="e.g. 1234567890"
                        className={labelClass}
                    />
                    <p className="text-xs font-light pt-2">
                        These details will show against the bills to pay when you create a batch payment.
                    </p>
                    <label className='label mt-5'>Details</label>
                    <input
                        placeholder="e.g. Rent"
                        className={labelClass}
                    />
                    <label className="label mt-5">Tax ID number</label>
                    <input
                        placeholder="e.g. 1234567890"
                        className={labelClass}
                    />
                    <p className="text-xs font-light pt-2">
                        Enter your contact’s Tax ID number if you’d like to show it on their invoices,
                        credit notes, statements, and other PDF documents.
                    </p>
                    <label className='label mt-5'>Currency</label>
                    <select
                        placeholder='Curency'
                        className={labelClass}
                    >
                        {
                            countries.map((e) => (
                                <option key={e.isoCode} value={e.currency.toString()}>
                                    {e.name} ({e.currency.toString()})
                                </option>
                            ))
                        }
                    </select>
                    <div className="divider"></div>
                    <div>
                        <button
                            className="btn btn-primary btn-sm"
                        >
                            Save & Close
                        </button>
                        <button
                            className="btn ml-1 btn-sm"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Component;
