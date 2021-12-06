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
              ...context.properties.map((property) => t.arrayExpression(
                [
                  t.stringLiteral(property.key['name']),
                  t.stringLiteral('any'),
                ]
              ))
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
