import core from 'sass';

export interface ScssOptions { }

export const scss = (options?: ScssOptions) => {

    const next = (context) => {

      if (context.skip) return;

      if (!context.stylePath) return;

      const { css, stats } = core.renderSync({
          file: context.stylePath,
          outputStyle: 'compressed',
          ...options || {},
      });

      context.styleParsed = css.toString();

      context.styleDependencies = stats.includedFiles;
  }

  return { next }
}