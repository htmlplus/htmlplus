import { camelCase, paramCase } from 'change-case';
import fs from 'fs-extra';
import path from 'path';

import { Global } from '../../types';
import { getInitializer, getTags, hasTag, parseTag, print } from '../utils/index.js';

const defaults: Partial<WebTypesOptions> = {};

export interface WebTypesOptions {
  destination: string;
  packageName: string;
  packageVersion: string;
  reference?: (componentTag: string) => string;
}

export const webTypes = (options: WebTypesOptions) => {
  const name = 'webTypes';

  options = Object.assign({}, defaults, options);

  const finish = (global: Global) => {
    const json = {
      '$schema': 'http://json.schemastore.org/web-types',
      'name': options.packageName,
      'version': options.packageVersion,
      'description-markup': 'markdown',
      'framework-config': {
        'enable-when': {
          'node-packages': [options.packageName]
        }
      },
      'contributions': {
        html: {
          elements: [] as any[]
        }
      }
    };

    const extract = (member) => ({
      name: member.key['name'],
      description: getTags(member).find((tag) => !tag.key)?.value,
      deprecated: hasTag(member, 'deprecated'),
      experimental: hasTag(member, 'experimental')
    });

    for (const context of global.contexts) {
      const attributes = context.classProperties?.map((property) =>
        Object.assign({}, extract(property), {
          name: paramCase(property.key['name']),
          value: {
            // kind: TODO
            /**
             * For Example
             * 01) type: "''"
             * 02) type: "null"
             * 03) type: "undefined"
             * 04) type: "boolean"
             * 05) type: "string"
             * 06) type: "number"
             * 07) type: "boolean | string | number"
             * 08) type: "string[]"
             * 09) type: "1 | 2 | 3"
             * 10) type: "'Value-1' | 'Value-2'"
             */
            type: print(property.typeAnnotation?.['typeAnnotation'])
            // required: TODO
            // default: TODO
          },
          /**
           * For Example
           * 01) default: "''"
           * 02) default: "null"
           * 03) default: "undefined"
           * 04) default: "true"
           * 05) default: "false"
           * 06) default: "0"
           * 07) default: "'1'"
           * 08) default: "'value'"
           * 09) default: "[]"
           * 10) default: "[0, 1, 'value-1', 'value-2', 'value-3']"
           * 11) default: "{}"
           * 12) default: "{'key-1': false, 'key-2': 1, 'key-3': 'value'}"
           */
          default: getInitializer(property.value!) // TODO
        })
      );

      const events = context.classEvents?.map((event) =>
        Object.assign({}, extract(event), {
          name: paramCase(event.key['name']) // TODO
          // 'value': TODO
        })
      );

      const methods = context.classMethods?.map((method) =>
        Object.assign({}, extract(method), {
          // 'value': TODO
        })
      );

      const properties = context.classProperties?.map((property) =>
        Object.assign({}, extract(property), {
          // 'value': TODO
        })
      );

      const slots = getTags(context.class!, 'slot').map((tag) => {
        const { description, name } = parseTag(tag);
        return {
          'name': name,
          'description': description,
          'doc-url': undefined,
          'deprecated': false,
          'experimental': false
        };
      });

      json.contributions.html.elements.push({
        'name': context.componentTag,
        'description': 'TODO',
        'doc-url': options.reference?.(context.componentTag!),
        'deprecated': hasTag(context.class!, 'deprecated'),
        'experimental': hasTag(context.class!, 'experimental'),
        'js': {
          events,
          properties: ([] as any).concat(properties, methods)
        },
        attributes,
        slots
      });
    }

    const dirname = path.dirname(options.destination);

    fs.ensureDirSync(dirname);

    fs.writeJSONSync(options.destination, json, { encoding: 'utf8', spaces: 2 });
  };

  return { name, finish };
};
