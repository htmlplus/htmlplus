import t from '@babel/types';
import { Context } from '@app/types';
import { visitor } from '../../utils';

export interface UhtmlOptions {
  dev?: boolean;
  dist: string;
  prefix: string;
}

export const uhtml = (options: UhtmlOptions) => {

  const name = 'uhtml';

  const next = (context: Context) => {

    // TODO
    if (context.styleParsed)
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

    // TODO
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

    // TODO
    // context.ast?.program.body.push(
    //   t.exportNamedDeclaration(
    //     t.classDeclaration(
    //       t.identifier(`Plus${context.name}`),
    //       t.callExpression(
    //         t.identifier('proxy'),
    //         [
    //           t.identifier(context.name as any)
    //         ]
    //       ),
    //       t.classBody([])
    //     )
    //   )
    // )

    context.ast?.program.body.push(
      t.expressionStatement(
        t.callExpression(
          t.identifier('define'),
          [
            t.stringLiteral(context.tag),
            // TODO
            // t.identifier(`Plus${context.name}`),  
            t.callExpression(
              t.identifier('proxy'),
              [
                t.identifier(context.name as any)
              ]
            ),
          ]
        )
      )
    )

    visitor(context.ast as any, {

    })
  }

  return {
    name,
    next,
  }
}