import { __dirname, renderTemplate } from '@htmlplus/element/compiler/utils/index.js';
import { getParameters } from 'codesandbox/lib/api/define.js';
import glob from 'fast-glob';
import fs from 'fs';
import path from 'path';

export const codesandbox = (options) => {
  const name = 'codesandbox';
  const next = (context) => {
    const destination = options?.destination?.(context) || path.join(context.directoryPath, 'codesandbox');

    const sources = options?.sources?.(context);

    fs.rmSync(destination, { recursive: true, force: true });

    for (const source of sources) {
      const root = source.endsWith('/') ? source.slice(0, -1) : source;

      const files = {};

      glob.sync(`${root}/**/*.*`).forEach((filepath) => {
        const key = filepath.split(`${root}/`).pop();
        files[key] = {
          content: fs.readFileSync(filepath, 'utf8')
        };
      });

      if (!Object.keys(files).length) continue;

      const parameters = getParameters({ files });

      const pattern = 'templates/**/*.*';

      const config = {
        cwd: __dirname(import.meta.url)
      };

      const fileName = path.basename(root);

      const model = { fileName, parameters };

      renderTemplate(pattern, destination, config)(model);

      // TODO
      context.output ??= {};
      context.output.codesandbox ??= {};
      context.output.codesandbox[fileName] = fs.readFileSync(path.join(destination, fileName + '.html'), 'utf8');
    }
  };
  return {
    name,
    next
  };
};
