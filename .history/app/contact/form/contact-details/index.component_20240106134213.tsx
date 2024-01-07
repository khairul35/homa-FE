import { ComponentProps } from "./index.props";

const Component = (props: ComponentProps) => {
    const { contact } = props;

    return (
        <div>
            <h2 className="pt-4 pl-10 font-semibold">Contact Details</h2>
            <div className="divider"></div>
        </div>
    );
};

export default Component;
