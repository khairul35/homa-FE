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
        </div>
    );
};

export default Component;
