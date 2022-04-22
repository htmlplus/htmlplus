import fs from 'fs';
import path from 'path';

import { Context } from '../../types/index.js';

export type AutoDependencyResolverOptions = {
  style?:
    | {
        path?: string;
        extensions?: Array<'scss' | 'less' | 'styl' | 'css'>;
      }
    | boolean;
};

export const autoDependencyResolver = (options: AutoDependencyResolverOptions = {}) => {
  const name = 'Auto dependency resolver';

  const next = (context: Context) => {
    // resolve style files

    let extensions: string[] = [];
    let stylesFolder = './';

    if (typeof options.style === 'object') {
      extensions = options.style.extensions ?? extensions;
      stylesFolder = options.style.path ?? stylesFolder;
    } else {
      if (options.style === true) {
        extensions = ['scss', 'less', 'styl', 'css'];
      } else {
        extensions = [];
      }
    }

    for (let extension of extensions) {
      const stylePath = path.join(context.directoryPath!, stylesFolder, `${context.fileName}.${extension}`);

      if (fs.existsSync(stylePath)) {
        context.stylePath = stylePath;
        break;
      }
    }
  };

  return {
    name,
    next
  };
};
