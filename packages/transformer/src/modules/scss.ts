import core from 'sass';

export interface ScssOptions { }

export const scss = (options?: ScssOptions) => {

    const name = 'scss';

    const next = (context) => {

        if (!context.stylePath) return;

        const { css, stats } = core.renderSync({
            file: context.stylePath,
            outputStyle: 'compressed',
            ...options || {},
        });

        context.styleParsed = css.toString();

        context.styleDependencies = stats.includedFiles;
    }

    return { name, next }
}