import { Props } from "./props";
import styles from './index.module.css';
import Notification from "@/app/components/notification";

const Component = (props: Props) => {
    const {
        selectedOrganization: organization,
        error,
        notification,
        numberOfOrganizations,
        backToList,
        closeMessage,
        backToMainSetting,
        onSave
    } = props;

    const RenderError = () => {
        return error ? (
            <span className="text-red-600 pr-10 font-semibold">{error}</span>
        ) : (
            <></>
        );
    };

    const RenderNotification = () => {
        return notification ? (
                <span>
                    <Notification message={notification.message} type={notification.type} closeMessage={closeMessage} />
                </span>
            )
            : (<></>)
    };

    return (

        <div className="bg-bg-color min-h-screen overflow-auto pb-5">
            <div className="bg-white border-b-2 border-black">
                <h1 className="pl-20 pt-5 pb-5 text-l font-bold">
                    <a
                        className="text-blue-600 cursor-pointer"
                        onClick={() => backToMainSetting()}
                    >
                        Organization Setting
                    </a>
                    &nbsp;&gt;&nbsp;
                    <a
                        className="text-blue-600 cursor-pointer"
                        onClick={() => backToList()}
                    >
                        Organizations ({numberOfOrganizations})
                    </a>
                    &nbsp;&gt; {organization?.name}
                </h1>
            </div>
        </div>
    )
};

export default Component
