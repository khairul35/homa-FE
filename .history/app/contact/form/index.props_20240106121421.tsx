export interface ComponentProps {
    menu: string;
    setMenu: (menu: string) => void;
    onBack: () => void;
}

export interface FormProps {
    setShow: (show: 'list' | 'form') => void;
}
