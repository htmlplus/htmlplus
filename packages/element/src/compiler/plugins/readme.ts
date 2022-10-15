import fs from 'fs-extra';
import path from 'path';

import { Context, Global } from '../../types';

const defaults: Partial<ReadmeOptions> = {
  source(context: Context) {
    return path.join(context.directoryPath!, `${context.fileName}.md`);
  }
};

export type ReadmeOptions = {
  source?: (context: Context) => string;
};

export const readme = (options: ReadmeOptions) => {
  const name = 'readme';

  options = Object.assign({}, defaults, options);

  const finish = (global: Global) => {
    for (const context of global.contexts) {
      try {
        // TODO
        // context.readme = fs.readFileSync(options.source?.(context), 'utf8');
      } catch {}
    }
  };

  return { name, finish };
};
