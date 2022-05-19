import fs from 'fs-extra';
import path, { basename } from 'path';

import { Context } from '../../types/index.js';

const defaults: ExternalOptions = {
  source(context: Context) {
    return path.join(context.directoryPath!, 'external');
  },
  destination(context: Context) {
    return '';
  }
};

export type ExternalOptions = {
  source?: (context: Context) => string;
  destination: (context: Context) => string;
};

export const external = (options: ExternalOptions) => {
  const name = 'external';
  options = { ...defaults, ...options };
  const next = (context: Context) => {
    const source = options.source?.(context);
    if (!source || !fs.existsSync(source)) return;
    fs.copySync(source, options.destination(context));
  };
  return {
    name,
    next
  };
};
