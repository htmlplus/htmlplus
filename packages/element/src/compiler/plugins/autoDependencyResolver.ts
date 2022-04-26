import fs from 'fs';
import path from 'path';

import { Context } from '../../types/index.js';
import { visitor } from '../utils/index.js';

export type AutoDependencyResolverOptions = {
  style?:
    | {
        path?: string;
        extensions?: Array<'scss' | 'less' | 'styl' | 'css'>;
      }
    | boolean;
  component?: boolean;
};

export const autoDependencyResolver = (options: AutoDependencyResolverOptions = {}) => {
  const name = 'Auto dependency resolver';

  const next = (context: Context, global: any) => {
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

    if (!options.component) {
      return;
    }

    context.componentDependencies = [];
    visitor(context.fileAST as any, {
      JSXOpeningElement: {
        enter(path) {
          const tag = path.node.name.name;
          if (tag.includes('-')) {
            context.componentDependencies?.push({ tag });
          }
        }
      }
    });

    console.log(global);
    console.log(context.fileName, context.componentTag);
    console.log(context.componentDependencies);
    console.log(' ');
    console.log(' ');
    console.log(' ');
  };

  return {
    name,
    next
  };
};
