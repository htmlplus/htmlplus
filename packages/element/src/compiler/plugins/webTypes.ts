import { camelCase, paramCase } from 'change-case';
import fs from 'fs';
import path from 'path';

import { Context, Global } from '../../types/index.js';
import { getTags, getType, printType, print } from '../utils/index.js';

export interface WebTypesOptions {
  destination: string;
  docUrl: () => string;
  packageName: string;
  packageVersion: string;
}

export const webTypes = (options: WebTypesOptions) => {
  const name = 'webTypes';

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
          elements: global.contexts
            .sort((a, b) => ((a.componentTag || '') > (b.componentTag || '') ? 1 : -1))
            .map((context) => ({
              'name': context.componentTag,
              'description': '',
              'doc-url': options.docUrl(),
              'js': {
                properties: [
                  ...(context.classProperties || []).map((property) => ({
                    name: camelCase(property.key['name']),
                    description: getTags(property).find((tag) => !tag.key)?.value,
                    value: {
                      type: print(property.typeAnnotation?.['typeAnnotation'])
                    }
                  })),
                  ...(context.classMethods || []).map((method) => ({
                    name: camelCase(method.key['name']),
                    description: getTags(method).find((tag) => !tag.key)?.value,
                    value: {}
                  }))
                ],
                events: context.classEvents?.map((event) => ({
                  name: paramCase(event.key['name']), // TODO
                  description: getTags(event).find((tag) => !tag.key)?.value
                }))
              },
              'attributes': context.classProperties?.map((property) => ({
                name: paramCase(property.key['name']),
                description: getTags(property).find((tag) => !tag.key)?.value,
                value: {
                  type: print(property.typeAnnotation?.['typeAnnotation'])
                }
              }))
            }))
        }
      }
    };

    const dirname = path.dirname(options.destination);

    if (!fs.existsSync(dirname)) fs.mkdirSync(dirname, { recursive: true });

    const raw = JSON.stringify(json, null, 2);

    fs.writeFileSync(options.destination, raw, 'utf8');
  };

  return {
    name,
    finish
  };
};
