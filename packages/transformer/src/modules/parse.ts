import { parse as parser } from '@babel/parser';

export const parse = () => {

    const next = (context) => {

        if (context.skip) 
            return context.message(`Skip`);

        if (context.ast)
            return context.message(`Load ast from cache.`);

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

        context.message(`Sccessfully parsed.`);
    }

    return { next }
}