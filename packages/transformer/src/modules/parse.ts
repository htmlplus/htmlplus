import { parse as parser } from '@babel/parser';

export const parse = () => {

    const name = 'parse';

    const cache = (context) => !!context.ast;

    const next = (context) => {
        context.ast = parser(
            context.content,
            {
                allowImportExportEverywhere: true,
                plugins: [
                    'jsx',
                    'typescript',
                    'decorators-legacy'
                ]
            }
        );
    }

    return {
        name,
        cache,
        next,
    }
}