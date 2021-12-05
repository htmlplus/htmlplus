import { Context } from '../types';
import * as core from 'esbuild';

export const esbuild = () => {

    const name = 'esbuild';

    const next = (context: Context) => {

        const { code, map, warnings } = core.transformSync(
            context.script || '',
            {
                loader: 'ts'
            }
        );

        context.script = code;
    }

    return {
        name,
        next,
    }
}