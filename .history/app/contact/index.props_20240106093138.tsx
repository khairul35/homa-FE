export interface ComponentProps {
    show: 'list' | 'detail';
    currentTab: string;
    selectedStyle: any;
    onClickAddContact: () => void;
    setCurrentTab: (tab: string) => void;
}
