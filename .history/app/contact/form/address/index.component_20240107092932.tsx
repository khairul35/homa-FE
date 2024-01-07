import { ComponentProps } from "./index.props";
import styles from './index.module.css';

const Component = (props: ComponentProps) => {
    const { onCancel } = props;
    return (
        <div>
            <h2 className="p-4 pl-10 font-semibold">Address</h2>
            <div className={styles.divider}></div>
        </div>
    )
};

export default Component;
