import { ComponentProps } from "./index.props";

const Component = (props: ComponentProps) => {
    const { contact } = props;

    return (
        <div>
            <h2>Contact Details</h2>
        </div>
    );
};

export default Component;
