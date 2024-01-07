export interface ComponentProps {
    currentTab: string;
    selectedStyle: any;
    onClickAddContact: () => void;
    setCurrentTab: (tab: string) => void;
}
