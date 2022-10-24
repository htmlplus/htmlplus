import fs from 'fs-extra';
import path from 'path';

import { Context, Global } from '../../types';

const defaults: Partial<ReadmeOptions> = {
  source(context) {
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
      context.readmePath = options.source?.(context);

      if (!context.readmePath) continue;

      if (!fs.existsSync(context.readmePath)) continue;

      context.readmeContent = fs.readFileSync(context.readmePath, 'utf8');
    }
  };

  return { name, finish };
};
