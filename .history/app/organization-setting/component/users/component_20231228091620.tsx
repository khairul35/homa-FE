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
        </div>
    )
}

export default Component;
