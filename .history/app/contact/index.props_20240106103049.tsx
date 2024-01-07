export interface ComponentProps {
    currentTab: string;
    selectedStyle: any;
    show: 'form' | 'list';
    onClickAddContact: () => void;
    setCurrentTab: (tab: string) => void;
}
