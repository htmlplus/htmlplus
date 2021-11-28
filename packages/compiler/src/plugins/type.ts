import { Context } from '@app/types';

export interface TypeOptions {
    prefix?: string;
}

export const type = (options: TypeOptions) => {

    const name = 'type';

    const next = (context: Context) => {

    }

    const finish = () => {

    }

    return {
        name,
        next,
        finish,
    }
}