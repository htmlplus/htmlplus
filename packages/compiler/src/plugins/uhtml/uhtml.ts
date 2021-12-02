import t from '@babel/types';
import { Context } from '@app/types';
import { print, visitor } from '../../utils';

export interface UhtmlOptions {
  dev?: boolean;
  dist: string;
  prefix: string;
}

export const uhtml = (options: UhtmlOptions) => {

  const name = 'uhtml';

  const next = (context: Context) => {

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
      JSXExpressionContainer: {
        exit(path) {
          // path.replaceWith(t.identifier('a'))
          t.addComment(path.node, 'leading', '$')
        }
      },
      // JSXFragment: {
      //   enter(path) {
      //     path.replaceWithMultiple(path.node.children)
      //   }
      // },
      ReturnStatement: {
        exit(path) {
          if (path.getFunctionParent(path).node !== context.render) return;
          path.replaceWith(
            t.returnStatement(
              t.taggedTemplateExpression(
                t.identifier('html'),
                t.templateLiteral(
                  [
                    t.templateElement({
                      raw: print(path.node.argument).replace(/\\n\/\*\$\*\//g, '$')
                    })
                  ],
                  []
                )
              )
            )
          )
          path.skip()
        }
      }
    })
  }

  return {
    name,
    next,
  }
}