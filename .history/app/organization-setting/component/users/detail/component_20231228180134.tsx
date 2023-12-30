import { Props } from "./props"
import styles from './index.module.css';

const Component = (props: Props) => {
    const { onBack, onBackToMain, user, numberOfUser } = props;

    return (
        <div className="bg-bg-color min-h-screen overflow-auto pb-5">
            <div className="bg-white border-b-2 border-black">
                <h1 className="pl-20 pt-5 pb-5 text-l font-bold">
                    <a
                        className="text-blue-600 cursor-pointer"
                        onClick={() => onBackToMain()}
                    >
                        Organization Setting
                    </a>
                    &nbsp;&gt;&nbsp;
                    <a
                        className="text-blue-600 cursor-pointer"
                        onClick={() => onBack()}
                    >
                        Users ({numberOfUser})
                    </a>
                    &nbsp;&gt; {user?.firstName} {user?.lastName}
                </h1>
            </div>
            <div className={styles.card}>
                <h2 className="text-xl font-semibold p-5 pl-20  border-b border-gray-300">
                    Basic Information
                </h2>
                <div className="p-5 flex justify-center">
                    <form method="dialog">
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Component;
