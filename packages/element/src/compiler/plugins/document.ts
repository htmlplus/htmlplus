import { capitalCase, paramCase } from 'change-case';
import fs from 'fs-extra';
import glob from 'glob';
import path from 'path';

import { Global } from '../../types';
import { getInitializer, getTag, getTags, getTypeReference, hasTag, parseTag, print } from '../utils/index.js';

const defaults: Partial<DocumentOptions> = {};

export interface DocumentOptions {
  destination: string;
}

export const document = (options: DocumentOptions) => {
  const name = 'document';

  options = Object.assign({}, defaults, options);

  const finish = (global: Global) => {
    const json = {
      components: [] as any
    };

    for (const context of global.contexts) {
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

        const detail = print(event.typeAnnotation?.['typeAnnotation']);

        const detailReference = getTypeReference(
          context.fileAST!,
          event.typeAnnotation?.['typeAnnotation'].typeParameters.params[0]
        );

        const isExperimental = hasTag(event, 'experimental');

        const isModel = hasTag(event, 'model');

        const name = event.key['name'];

        const tags = getTags(event);

        return {
          description,
          detail,
          detailReference,
          isCancelable,
          isExperimental,
          isModel,
          name,
          tags
        };
      });

      const group = getTag(context.class!, 'group')?.value;

      const isDeprecated = hasTag(context.class!, 'deprecated');

      const isExperimental = hasTag(context.class!, 'experimental');

      const lastModified = glob
        .sync(path.join(context.directoryPath!, '**/*.*'))
        .map((file) => fs.statSync(file).mtime)
        .sort((a, b) => (a > b ? 1 : -1))
        .pop();

      const methods = context.classMethods!.map((method) => {
        const description = getTags(method).find((tag) => !tag.key)?.value;

        const isAsync = method.async;

        const isDeprecated = hasTag(method, 'deprecated');

        const isExperimental = hasTag(method, 'experimental');

        const name = method.key['name'];

        const returns = print(method.returnType?.['typeAnnotation']) || 'void';

        const returnsReference = getTypeReference(context.fileAST!, method.returnType?.['typeAnnotation']);

        const tags = getTags(method);

        // TODO
        const parameters = method.params.map((param) => ({
          description: getTags(method, 'param')
            .map((tag) => parseTag(tag, ' '))
            .find((tag) => tag.name == param['name'])?.description,
          isOptional: !!param['optional'],
          name: param['name'],
          type: print(param?.['typeAnnotation']?.typeAnnotation) || undefined,
          typeReference: getTypeReference(context.fileAST!, param?.['typeAnnotation']?.typeAnnotation)
        }));

        const signature = [
          method.key['name'],
          '(',
          parameters
            .map((parameter) => {
              let string = '';
              string += parameter.name;
              string += parameter.isOptional ? '?' : '';
              string += parameter.type ? ': ' : '';
              string += parameter.type ?? '';
              return string;
            })
            .join(', '),
          ')',
          ' => ',
          returns
        ].join('');

        return {
          description,
          isAsync,
          isDeprecated,
          isExperimental,
          name,
          returns,
          returnsReference,
          tags,
          parameters,
          signature
        };
      });

      const parts = getTags(context.class!, 'part').map((tag) => parseTag(tag));

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

        const type = print(property.typeAnnotation?.['typeAnnotation']);

        const typeReference = getTypeReference(context.fileAST!, property.typeAnnotation?.['typeAnnotation']);

        return {
          attribute,
          description,
          hasReflect,
          initializer,
          isDeprecated,
          isExperimental,
          isModel,
          isRequired,
          name,
          tags,
          type,
          typeReference
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

      const slots = getTags(context.class!, 'slot').map((tag) => parseTag(tag));

      // TODO
      const styles = (() => {
        if (!context.stylePath) return [];
        return fs
          .readFileSync(context.stylePath!, 'utf8')
          .split('@prop')
          .slice(1)
          .map((section) => {
            let [description, name] = section.split(/\n/);

            name = name.split(':').slice(0, -1).join(':').trim();

            description = description.trim();

            let [initializer] = context.styleParsed?.split(name).slice(1, 2) || [];

            if (initializer) initializer = initializer.split(/;|}/)[0].replace(':', '').trim();

            return {
              description,
              initializer,
              name
            };
          });
      })();

      const tag = context.componentTag;

      const tags = getTags(context.class!);

      const title = capitalCase(context.componentKey!);

      json.components.push({
        // TODO
        // main
        // development
        // source

        events,
        group,
        isDeprecated,
        isExperimental,
        key: context.componentKey!,
        lastModified,
        methods,
        parts,
        properties,
        readme,
        readmeDescription,
        slots,
        styles,
        tag,
        tags,
        title
      });
    }

    json.components = json.components.sort((a, b) => (a.title > b.title ? 1 : -1));

    const dirname = path.dirname(options.destination);

    fs.ensureDirSync(dirname);

    fs.writeJSONSync(options.destination, json, { encoding: 'utf8', spaces: 2 });
  };

  return { name, finish };
};
