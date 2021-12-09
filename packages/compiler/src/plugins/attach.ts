import * as t from '@babel/types';
import { Context } from '../types/index.js';

export interface AttachOptions {
  members?: boolean;
  styles?: boolean;
}

export const attach = (options: AttachOptions) => {

  const name = 'attach'

  const next = (context: Context) => {

    if (options.styles && context.styleParsed)
      context.component?.body.body.unshift(
        t.classProperty(
          t.identifier('styles'),
          t.stringLiteral(context.styleParsed),
          undefined,
          null,
          undefined,
          true
        )
      )

    if (options.members)
      context.component?.body.body.unshift(
        t.classProperty(
          t.identifier('members'),
          t.arrayExpression(
            [
              ...context.properties.map((property) => {

                const elements: Array<any> = [
                  t.stringLiteral(property.key['name'])
                ];

                if ((property as any).typeAnnotation?.typeAnnotation?.type == 'TSBooleanKeyword')
                  elements.push(t.stringLiteral('boolean'));

                if ((property as any).typeAnnotation?.typeAnnotation?.type == 'TSNumberKeyword')
                  elements.push(t.stringLiteral('number'));

                return t.arrayExpression(elements);
              })
            ]
          ),
          undefined,
          undefined,
          undefined,
          true,
        )
      )
  }

  return {
    name,
    next,
  }
}
