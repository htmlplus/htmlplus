import { capitalCase, paramCase } from 'change-case';
import fs from 'fs';
import glob from 'glob';
import path from 'path';

import { Context } from '../../types/index.js';
import { getInitializer, getTag, getTags, getType, hasTag, parseTag, printType } from '../utils/index.js';

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
            getType(context.fileAST!, (event.typeAnnotation || {})['typeAnnotation'].typeParameters.params[0], {
              directory: context.directoryPath
            })
          );
        } catch {}
      })();

      const isExperimental = hasTag(event, 'experimental');

      const isModel = hasTag(event, 'model');

      const name = event.key['name'];

      const tags = getTags(event);

      return {
        description,
        detail,
        isCancelable,
        isExperimental,
        isModel,
        name,
        tags
      };
    });

    const group = getTag(context.class!, 'group')?.value;

    const hasExternals = fs.existsSync(path.join(context.directoryPath!, 'externals'));

    const isDeprecated = hasTag(context.class!, 'deprecated');

    const isExperimental = hasTag(context.class!, 'experimental');

    const lastModified = glob
      .sync(path.join(context.directoryPath!, '**/*.*'))
      .map((file) => fs.statSync(file).mtime)
      .sort((a, b) => (a > b ? 1 : -1))
      .pop();

    const methods = context.classMethods!.map((method) => {
      const description = getTags(method).find((tag) => !tag.key)?.value;

      const isDeprecated = hasTag(method, 'deprecated');

      const isExperimental = hasTag(method, 'experimental');

      const name = method.key['name'];

      const tags = getTags(method);

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
        isDeprecated,
        isExperimental,
        name,
        tags
        // parameters,
        // signature,
        // type
      };
    });

    const parts = getTags(context.class!, 'part').map(parseTag);

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

      const isDeprecated = hasTag(property, 'deprecated');

      const isExperimental = hasTag(property, 'experimental');

      const isModel = hasTag(property, 'model');

      const isRequired = !property.optional;

      const name = property.key['name'];

      const tags = getTags(property);

      // TODO
      const { type, members } = (() => {
        return printType(
          getType(context.fileAST!, (property.typeAnnotation || {})['typeAnnotation'], {
            directory: context.directoryPath
          })
        );
      })();

      return {
        attribute,
        description,
        hasReflect,
        initializer,
        isDeprecated,
        isExperimental,
        isModel,
        isRequired,
        members,
        name,
        tags,
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

    const slots = getTags(context.class!, 'slot').map(parseTag);

    const tag = context.componentTag;

    const tags = getTags(context.class!);

    // TODO
    const title = capitalCase(context.componentTag!);

    global.docs.components.push({
      events,
      group,
      hasExternals,
      isDeprecated,
      isExperimental,
      lastModified,
      methods,
      parts,
      properties,
      readme,
      readmeDescription,
      slots,
      tag,
      tags,
      title
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

// const main = (group && context.componentKey == group) || !group;

//     key: context.componentKey,
//     main,
//     development,
//     deprecated: false,
//     source: context.componentKey,
//     styles,
