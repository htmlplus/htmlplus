export type Plugin = {
    name: string;
    start?: Function;
    next?: Function;
    finish?: Function;
}