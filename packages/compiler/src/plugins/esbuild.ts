import { Context } from '@app/types';
import core from 'esbuild';

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
        console.log(code)
    }

    return {
        name,
        next,
    }
}