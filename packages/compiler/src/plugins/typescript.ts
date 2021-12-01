import { Context } from '@app/types';
import { print } from '../utils';

export const typescript = () => {

    const name = 'typescript';

    const next = (context: Context) => {
        console.log(print(context.ast as any))
    }

    return {
        name,
        next,
    }
}