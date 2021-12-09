import * as t from '@babel/types';
import { Context } from '../../types/index.js';
import { print, visitor } from '../../utils/index.js';

// TODO
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

export interface UhtmlOptions { }

export const uhtml = (options?: UhtmlOptions) => {

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

    context.ast?.program.body.unshift(
      t.importDeclaration(
        [
          t.importSpecifier(
            t.identifier('define'),
            t.identifier('define'),
          ),
          t.importSpecifier(
            t.identifier('html'),
            t.identifier('html'),
          ),
          t.importSpecifier(
            t.identifier('proxy'),
            t.identifier('proxy'),
          )
        ],
        // TODO
        t.stringLiteral(
          resolve(
            dirname(
              fileURLToPath(import.meta.url)
            ),
            'utils.js'
          )
        )
      )
    )

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
      JSXAttribute(path) {

        if (!t.isJSXExpressionContainer(path.node.value)) return;

        if (path.node.name.name == 'ref') {

          path.replaceWith(
            t.jsxAttribute(
              path.node.name,
              t.jSXExpressionContainer(
                t.arrowFunctionExpression(
                  [
                    t.identifier('$el')
                  ],
                  t.assignmentExpression(
                    '=',
                    path.node.value.expression,
                    t.identifier('$el')
                  )
                )
              )
            )
          );

          path.skip();
        }
      },
      JSXExpressionContainer: {
        exit(path) {
          // path.replaceWith(t.identifier('a'))
          // t.addComment(path.node, 'leading', '$')
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

          // TODO 
          const markup = print(path.node.argument)
            .replace(/<>/g, '')
            .replace(/<\/>/g, '')
            .replace(/\/\*\$\*\//g, '$')
            .replace(/={/g, '=${');

          path.replaceWith(
            t.returnStatement(
              t.taggedTemplateExpression(
                t.identifier('html'),
                t.templateLiteral(
                  [
                    t.templateElement({
                      raw: markup
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