import { ComponentProps } from "./index.props"

const Component = (props: ComponentProps) => {
    const { onBack } = props;
    return (
        <div className="bg-bg-color min-h-screen overflow-auto pb-5">
            <div className="bg-white border-b-2 border-black">
                <h1 className="pl-20 pt-5 pb-5 text-l font-bold">
                    <a
                        className="text-blue-600 cursor-pointer"
                        onClick={() => onBack()}
                    >
                        Contact
                    </a>
                    &nbsp;&gt; Add Contact
                </h1>
            </div>
            <div
                className="flex
                    flex-col
                    md:flex-row
                    bg-white
                    m-10
                    pt-2
                    border-gray-500
                    border-solid
                    border"
                >
                <div className="md:w-1/4 md:order-1">
                    <div className={`p-2 font-semibold`}>
                        Contact Details
                    </div>
                    <div className={`p-2 font-semibold`}>
                        Addresses
                    </div>
                    <div className={`p-2 font-semibold`}>
                        Financial Details
                    </div>
                    <div className="divider before:bg--gray-500 after:bg--gray-500"></div>
                    <div className={`p-2 font-semibold`}>
                        Default Settings
                    </div>
                    <div className={`p-2 font-semibold`}>
                        Sales default
                    </div>
                    <div className={`p-2 font-semibold`}>
                        Purchase Default
                    </div>
                </div>
                <div className="md:w-3/4 md:order-2">
                    s
                </div>
            </div>
        </div>
    );
};

export default Component;
