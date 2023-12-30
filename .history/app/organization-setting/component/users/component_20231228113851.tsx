import { Props } from './props';
import styles from './index.module.css';

const Component = (props: Props) => {

    const { onBack, users } = props;

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
                    &nbsp;&gt; Users ({users.length})
                </h1>
            </div>
            <div className="mt-0 p-10 pl-20 pr-20 items-center">
                <div className='border-b border-gray-300 text-xl font-semibold p-5 pl-20'>
                    <div className="text-right">
                        <button className="btn btn-primary">Create new user</button>
                    </div>
                </div>
                <div className={styles.card}>
                    <table className="table mt-2 border-b border-black">
                        <thead>
                            <tr style={{ backgroundColor: '#8ABCDE', color: '#000' }}>
                                <th>Name</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Component;
