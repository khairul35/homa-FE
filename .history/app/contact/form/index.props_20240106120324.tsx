export interface ComponentProps {
    onBack: () => void;
}

export interface FormProps {
    setShow: (show: 'list' | 'form') => void;
}
