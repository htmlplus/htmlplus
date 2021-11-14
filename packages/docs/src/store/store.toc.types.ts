export interface TocItem {
    active?: boolean;
    entry?: any;
    key?: string;
    level?: number;
    value?: any;
    scrollTo?: Function;
    update?: Function;
}