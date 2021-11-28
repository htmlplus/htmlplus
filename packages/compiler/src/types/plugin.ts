import { Context } from './context';

export type Plugin = {
    name: string;
    start?: (global: any) => void;
    next?: (context: Context, global: any) => void | Context | Promise<Context>;
    finish?: (global: any) => void;
}