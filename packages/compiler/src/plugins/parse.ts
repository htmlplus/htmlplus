import { parse as parser } from '@babel/parser';

export const parse = () => {

    const name = 'parse';

    const next = (context) => {

        if (!!context.ast) return;

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
        )
    }

    return {
        name,
        next,
    }
}