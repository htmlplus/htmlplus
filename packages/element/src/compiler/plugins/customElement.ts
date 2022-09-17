import t, { TSTypeAnnotation } from '@babel/types';

import * as CONSTANTS from '../../constants/index.js';
import { Context } from '../../types/index.js';
import { print, visitor } from '../utils/index.js';

const defaults: CustomElementOptions = {
  typings: true
};

export interface CustomElementOptions {
  typings?: boolean;
}

// TODO: support {variable && jsxElement}
export const customElement = (options?: CustomElementOptions) => {
  const name = 'customElement';

  options = Object.assign({}, defaults, options);

  const next = (context: Context) => {
    const ast = t.cloneNode(context.fileAST!, true);

    // TODO
    visitor(ast, {
      ClassDeclaration(path) {
        if (path.node.id.name != context.className) return;
        path.node.body.body.unshift(t.classProperty(t.identifier('uhtml')));
      }
    });

    // replace className
    visitor(ast, {
      JSXAttribute(path) {
        if (path.node.name.name != 'className') return;
        const hasClass = path.parentPath.node.attributes.some((attribute) => attribute.name.name == 'class');
        if (hasClass) return path.remove();
        path.replaceWith(t.jsxAttribute(t.jsxIdentifier('class'), path.node.value));
      }
    });

    // jsx to uhtml syntax
    visitor(ast, {
      JSXAttribute: {
        exit(path) {
          if (path.node.value?.type == 'JSXExpressionContainer') {
            let node = path.node;

            if (path.node.name.name == 'ref') {
              node = t.jsxAttribute(
                path.node.name,
                t.jSXExpressionContainer(
                  t.arrowFunctionExpression(
                    [t.identifier('$element')],
                    t.assignmentExpression('=', path.node.value.expression, t.identifier('$element'))
                  )
                )
              );
            }

            path.replaceWith(t.jsxIdentifier(print(node).replace('={', '=${')));

            path.skip();

            return;
          }
        }
      },
      JSXElement: {
        exit(path) {
          if (path.parent.type == 'JSXElement' || path.parent.type == 'JSXFragment') {
            path.replaceWith(t.identifier(print(path.node)));
            return;
          } else {
            path.replaceWith(
              t.memberExpression(
                t.memberExpression(t.thisExpression(), t.identifier('uhtml')),
                t.identifier(`html\`${print(path.node)}\``)
              )
            );
            return;
          }
        }
      },
      JSXFragment: {
        exit(path) {
          path.replaceWith(
            t.memberExpression(
              t.memberExpression(t.thisExpression(), t.identifier('uhtml')),
              t.identifier(['html`', ...path.node.children.map((child) => print(child)), '`'].join(''))
            )
          );
        }
      },
      JSXExpressionContainer: {
        exit(path) {
          if (path.parent.type == 'JSXElement' || path.parent.type == 'JSXFragment') {
            path.replaceWith(t.identifier('$' + print(path.node)));
            return;
          }
        }
      },
      JSXSpreadAttribute: {
        enter(path) {
          // TODO
          path.replaceWith(t.jsxAttribute(t.jsxIdentifier('.dataset'), t.jsxExpressionContainer(path.node.argument)));
        }
      }
    });

    // attach members
    visitor(ast, {
      ClassDeclaration(path) {
        if (path.node.id.name != context.className) return;
        path.node.body.body.unshift(
          t.classProperty(
            t.identifier(CONSTANTS.STATIC_MEMBERS),
            t.objectExpression([
              ...context.classProperties!.map((property) => {
                const type = (property as any).typeAnnotation?.typeAnnotation?.type;

                const elements: Array<any> = [];

                switch (type) {
                  case 'TSBooleanKeyword':
                    elements.push(t.stringLiteral(CONSTANTS.TYPE_BOOLEAN));
                    break;

                  case 'TSStringKeyword':
                    elements.push(t.stringLiteral(CONSTANTS.TYPE_STRING));
                    break;

                  case 'TSNumberKeyword':
                    elements.push(t.stringLiteral(CONSTANTS.TYPE_NUMBER));
                    break;

                  default:
                    elements.push(t.nullLiteral());
                    break;
                }

                if (property.value) elements.push(property.value);

                return t.objectProperty(t.identifier(property.key['name']), t.arrayExpression(elements));
              }),
              ...context.classMethods!.map((method) => {
                const elements: Array<any> = [t.stringLiteral(CONSTANTS.TYPE_FUNCTION)];
                return t.objectProperty(t.identifier(method.key['name']), t.arrayExpression(elements));
              })
            ]),
            undefined,
            undefined,
            undefined,
            true
          )
        );
      }
    });

    // attach typings
    if (options?.typings) {
      visitor(ast, {
        Program(path) {
          path.node.body.push(
            Object.assign(
              t.tsModuleDeclaration(
                t.identifier('global'),
                t.tsModuleBlock([
                  t.tsInterfaceDeclaration(
                    t.identifier(context.componentInterfaceName!),
                    null,
                    [
                      t.tSExpressionWithTypeArguments(t.identifier('HTMLElement')) // TODO
                    ],
                    t.tsInterfaceBody([
                      ...context.classProperties!.map((property) =>
                        Object.assign(
                          t.tSPropertySignature(property.key, property.typeAnnotation as TSTypeAnnotation),
                          {
                            optional: property.optional,
                            leadingComments: t.cloneNode(property, true).leadingComments
                          }
                        )
                      )
                    ])
                  ),
                  t.variableDeclaration('var', [
                    t.variableDeclarator(
                      Object.assign(t.identifier(context.componentInterfaceName!), {
                        typeAnnotation: t.tSTypeAnnotation(
                          t.tSTypeLiteral([
                            t.tSPropertySignature(
                              t.identifier('prototype'),
                              t.tsTypeAnnotation(t.tSTypeReference(t.identifier(context.componentInterfaceName!)))
                            ),
                            t.tSConstructSignatureDeclaration(
                              null,
                              [],
                              t.tSTypeAnnotation(t.tSTypeReference(t.identifier(context.componentInterfaceName!)))
                            )
                          ])
                        )
                      })
                    )
                  ]),
                  t.tsInterfaceDeclaration(
                    t.identifier('HTMLElementTagNameMap'),
                    null,
                    [],
                    t.tsInterfaceBody([
                      t.tSPropertySignature(
                        t.stringLiteral(context.componentTag!),
                        t.tSTypeAnnotation(
                          t.tSIntersectionType([t.tSTypeReference(t.identifier(context.componentInterfaceName!))])
                        )
                      )
                    ])
                  )
                ])
              ),
              {
                declare: true,
                global: true
              }
            )
          );
          path.node.body.push(
            t.exportNamedDeclaration(
              t.tsInterfaceDeclaration(
                // TODO
                t.identifier(context.componentClassName! + 'JSX'),
                null,
                [],
                t.tsInterfaceBody([
                  ...context.classProperties!.map((property) =>
                    Object.assign(t.tSPropertySignature(property.key, property.typeAnnotation as TSTypeAnnotation), {
                      optional: property.optional,
                      leadingComments: t.cloneNode(property, true).leadingComments
                    })
                  ),
                  ...context.classEvents!.map((event) =>
                    Object.assign(
                      t.tSPropertySignature(
                        event.key,
                        t.tsTypeAnnotation(
                          t.tsFunctionType(
                            undefined,
                            [
                              Object.assign({}, t.identifier('event'), {
                                typeAnnotation: t.tsTypeAnnotation(
                                  t.tsTypeReference(
                                    t.identifier('CustomEvent'),
                                    event.typeAnnotation?.['typeAnnotation']?.typeParameters
                                  )
                                )
                              })
                            ],
                            t.tsTypeAnnotation(t.tsVoidKeyword())
                          )
                        )
                      ),
                      {
                        optional: true,
                        leadingComments: t.cloneNode(event, true).leadingComments
                      }
                    )
                  )
                ])
              )
            )
          );
        }
      });
    }

    context.script = print(ast);
  };

  return {
    name,
    next
  };
};
