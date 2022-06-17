import { __dirname, renderTemplate } from '@htmlplus/element/compiler/utils/index.js';
import glob from 'fast-glob';
import fs from 'fs';
import JSZip from 'jszip';
import path from 'path';

export const download = (options) => {
  const name = 'download';
  const next = async (context) => {
    const destination = options?.destination?.(context) || path.join(context.directoryPath, 'download');

    const sources = options?.sources?.(context);

    fs.rmSync(destination, { recursive: true, force: true });

    for (const source of sources) {
      const root = source.endsWith('/') ? source.slice(0, -1) : source;

      const fileName = path.basename(root);

      // TODO
      const [component, example, framework] = root.split(/[/|\\]/g).slice(-3);
      const download = `${framework}-${component}-${example}`;

      const files = glob.sync(`${root}/**/*.*`);

      if (!files.length) continue;

      const zip = new JSZip();

      for (const file of files) {
        const key = file.split(`${root}/`).pop();
        const content = fs.readFileSync(file, 'utf8');
        zip.file(key, content);
      }

      const content = await zip.generateAsync({ type: 'base64' });

      const pattern = 'templates/**/*.*';

      const config = {
        cwd: __dirname(import.meta.url)
      };

      const model = {
        content,
        download,
        fileName
      };

      renderTemplate(pattern, destination, config)(model);

      // TODO
      context.output ??= {};
      context.output.download ??= {};
      context.output.download[fileName] = fs.readFileSync(path.join(destination, fileName + '.html'), 'utf8');
    }
  };
  return {
    name,
    next
  };
};
