import { paramCase } from 'change-case';
import fs from 'fs';
import path from 'path';

import { Context } from '../../types/index.js';
import { getInitializer, getTags, getType, hasTag, printType } from '../utils/index.js';

export interface DocsOptions {
  // TODO
  // bundle?: boolean;
  dist: string;
}

export const docs = (options: DocsOptions) => {
  const name = 'docs';

  const start = (global) => {
    global.docs = {
      components: []
    };
  };

  const next = (context: Context, global) => {
    const events = context.classEvents!.map((event) => {
      const isCancelable = (() => {
        if (!event.decorators) return false;
        try {
          for (const decorator of event.decorators) {
            for (const argument of decorator.expression['arguments']) {
              for (const property of argument.properties) {
                if (property.key.name != 'cancelable') continue;
                if (property.value.type != 'BooleanLiteral') continue;
                if (!property.value.value) continue;
                return true;
              }
            }
          }
        } catch {}
        return false;
      })();

      const description = getTags(event).find((tag) => !tag.key)?.value;

      // TODO
      const detail = (() => {
        try {
          return printType(
            getType(context.fileAST as any, (event.typeAnnotation || {})['typeAnnotation'].typeParameters.params[0], {
              directory: context.directoryPath
            })
          );
        } catch {}
      })();

      const isExperimental = hasTag(event, 'experimental');

      const isModel = hasTag(event, 'model');

      const name = event.key['name'];

      return {
        description,
        detail,
        isCancelable,
        isExperimental,
        isModel,
        name
      };
    });

    const hasExternals = fs.existsSync(path.join(context.directoryPath!, 'externals'));

    const isExperimental = hasTag(context.class!, 'experimental');

    const methods = context.classMethods!.map((method) => {
      const description = getTags(method).find((tag) => !tag.key)?.value;

      const isExperimental = hasTag(method, 'experimental');

      const name = method.key['name'];

      // TODO
      // const params = printType(getType(
      //     context.ast,
      //     method.params,
      //     {
      //         directory: context.directory,
      //     }
      // ));

      // TODO
      // const parameters = [
      //   {
      //       "name": "offsetX",
      //       "description": "Moving size (px) in the `horizontal` direction. Use `null` to ignore this."
      //   },
      //   {
      //       "name": "offsetY",
      //       "description": "Moving size (px) in the `vertical` direction. Use `null` to ignore this."
      //   }
      // ];

      // TODO: returnType
      // const type = (() => {
      //   try {
      //     return printType(
      //       getType(context.fileAST!, (method.returnType || {})['typeAnnotation'], {
      //         directory: context.directoryPath
      //       })
      //     );
      //   } catch {}
      // })();

      // TODO
      // const signature = `${method.key['name']}(${''}) => ${type}`;

      return {
        description,
        isExperimental,
        name
        // parameters,
        // signature,
        // type
      };
    });

    const parts = getTags(context.class!, 'part').map((tag) => tag.parsed);

    const properties = context.classProperties!.map((property) => {
      const attribute = paramCase(property.key['name']);

      const description = getTags(property).find((tag) => !tag.key)?.value;

      // TODO
      const hasReflect = (() => {
        if (!property.decorators) return false;
        try {
          for (const decorator of property.decorators) {
            for (const argument of decorator.expression['arguments']) {
              for (const property of argument.properties) {
                if (property.key.name != 'reflect') continue;
                if (property.value.type != 'BooleanLiteral') continue;
                if (!property.value.value) continue;
                return true;
              }
            }
          }
        } catch {}
        return false;
      })();

      // TODO
      const initializer = getInitializer(property.value!);

      const isExperimental = hasTag(property, 'experimental');

      const isModel = hasTag(property, 'model');

      const isRequired = !property.optional;

      const name = property.key['name'];

      // TODO
      const { type, members } = (() => {
        const ast = getType(context.fileAST!, (property.typeAnnotation || {})['typeAnnotation'], {
          directory: context.directoryPath
        });
        return printType(ast);
      })();

      return {
        attribute,
        description,
        hasReflect,
        initializer,
        isExperimental,
        isModel,
        isRequired,
        members,
        name,
        type
      };
    });

    const readme = (() => {
      try {
        const source = path.join(context.directoryPath!, `${context.fileName}.md`);
        return fs.readFileSync(source, 'utf8');
      } catch {}
    })();

    const readmeDescription = (() => {
      const content = readme || '';

      if (!content.startsWith('# ')) return '';

      const sections = content.split('\n');

      for (let i = 1; i < sections.length; i++) {
        const section = sections[i].trim();

        if (!section) continue;

        return section;
      }

      return '';
    })();

    const slots = getTags(context.class!, 'slot').map((tag) => tag.parsed);

    global.docs.components.push({
      events,
      hasExternals,
      isExperimental,
      methods,
      parts,
      properties,
      readme,
      readmeDescription,
      slots
    });
  };

  const finish = (global) => {
    global.docs.components = global.docs.components.sort((a, b) => (a.key > b.key ? 1 : -1));
    console.log(1, global.docs.components[0]);
    // TODO
    // fs.ensureDirSync(path.dirname(options.dist));

    // TODO
    // fs.writeJSONSync(options.dist, global.docs, { replacer: null, spaces: 2 });
  };

  return {
    name,
    start,
    next,
    finish
  };
};

// TODO: garbge
// const tags = getTags(context.class);

// const development = tags.some((tag) => tag.key == 'development');

// const styles = (() => {
//     const styles: Array<any> = [];

//     try {
//     fs.readFileSync(context.stylePath || '', 'utf8')
//         .split('@prop')
//         .slice(1)
//         .map((section) => {
//         let [description, name] = section.split(/\n/);

//         name = name.split(':').slice(0, -1).join(':').trim();

//         description = description.trim();

//         let [initializer] = context.styleParsed?.split(name).slice(1, 2) || [];

//         if (initializer) initializer = initializer.split(/;|}/)[0].replace(':', '').trim();

//         styles.push({
//             name,
//             initializer,
//             description
//         });
//         });
//     } catch {}

//     return styles;
// })();

// // TODO
// const lastModified = 0;
// // glob
// //     .sync(path.join(context.directory, '**/*.*'))
// //     .reduce((result, file) => {

// //         const state = fs.statSync(file);

// //         return result > state.mtime ? result : state.mtime
// //     }, 0);

// const group = tags.find((tag) => tag.key == 'group')?.value || null;

// const main = (group && context.componentKey == group) || !group;

// // TODO
// // context.types = (() => {
// //     return [];
// // })();

// global.docs.components.push({
//     key: context.componentKey,
//     tag: context.componentTag,
//     title: capitalCase(context.componentKey || ''),
//     main,
//     group,
//     development,
//     experimental,

//     // TODO
//     deprecated: false,

//     externals,
//     lastModified,

//     // TODO
//     tags: [],

//     // TODO
//     source: context.componentKey,

//     description,
//     readme,
//     properties,
//     slots,
//     events,
//     styles,
//     parts,
//     methods
//     // examples
// });
