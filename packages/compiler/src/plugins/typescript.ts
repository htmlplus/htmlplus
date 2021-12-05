import * as esbuild from 'esbuild';
import { Context } from '../types/index.js';

export const typescript = () => {

    const name = 'typescript';

    const next = (context: Context) => {

        const { code, map, warnings } = esbuild.transformSync(
            context.script || '',
            {
                loader: 'ts'
            }
        );

        context.script = code;
        // console.log(code)
    }

    return {
        name,
        next,
    }
}