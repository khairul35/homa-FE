import styles from './index.module.css'
const Component = () => {

    const labelClass = "input-sm input input-bordered  bg-white border-gray-400 w-full"

    return (
        <div>
            <h2 className="p-4 pl-10 font-semibold">Contact Details</h2>
            <div className={styles.divider}></div>
            <div className="p-5 lg:pl-20 lg:pr-20">
                <form method="dialog">
                    <p className="text-xs font-light pt-2">
                        Defaults can be overridden on individual invoices,
                        quotes, and receive money
                    </p>
                    <label className='mt-5 label'>Sales account</label>
                    <input
                        className={labelClass}
                        placeholder="Select sales account"
                    />
                    <label className='mt-5 label'>Invoice due date</label>
                    <select
                        placeholder="Select due date"
                        className={labelClass}
                    >
                    </select>
                    <label className='mt-5 label'>Amounts are</label>
                    <select
                        placeholder="Use organization settings"
                        className={labelClass}
                    >
                    </select>
                    <label className='mt-5 label'>Sales tax</label>
                    <select
                        placeholder="Use organization settings"
                        className={labelClass}
                    >
                    </select>
                    <label className='mt-5 label'>Discount (%)</label>
                    <input
                        placeholder="e.g. 10"
                        className={labelClass}
                    />
                    <label className='mt-5 label'>Credit limit amount</label>
                    <input
                        placeholder="e.g. 10000"
                        className={labelClass}
                    />
                    <p>Block new invoices when credit limit is reached</p>

                    <label className='mt-5 label'>Branding theme</label>
                    <select
                        placeholder=""
                        className={labelClass}
                    >
                    </select>
                    <label className='mt-5 label'>Region</label>
                    <input
                        placeholder="Default Region"
                        className={labelClass}
                    />
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
