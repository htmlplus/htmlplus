import t from '@babel/types';
import { __dirname, print, visitor } from '@htmlplus/element/compiler/utils/index.js';
import { camelCase, paramCase, pascalCase } from 'change-case';

import { getSnippet, isEvent, scoped } from '../../utils.js';

export const preview = (options) => {
  const name = 'preview';
  const next = (context) => {
    const dependencies = new Map();

    const addDependency = (local, imported) => {
      const locals = dependencies.get(imported) || new Set();
      locals.add(local);
      dependencies.set(imported, locals);
    };

    const classNamePrefix =
      'ex-' +
      context.filePath
        .split(/[/|\\]/g)
        .slice(0, -1)
        .slice(-2)
        .join('-');

    const style = getSnippet(context, 'style');

    const visitors = {
      script: {
        AssignmentExpression(path) {
          const { left, right } = path.node;
          if (left && left.object && left.object.type === 'ThisExpression') {
            const setter = 'set' + pascalCase(left.property.name);
            path.replaceWith(t.callExpression(t.identifier(setter), [right]));
          }
        },
        ClassDeclaration(path) {
          path.traverse(visitors.script);

          const body = [
            ...Array.from(dependencies).map(([imported, locals]) =>
              t.importDeclaration(
                Array.from(locals)
                  .sort()
                  .map((local) => t.importSpecifier(t.identifier(local), t.identifier(local))),
                t.stringLiteral(imported)
              )
            ),
            t.variableDeclaration('const', [
              t.variableDeclarator(
                t.identifier(context.className),
                t.arrowFunctionExpression([], t.blockStatement(path.node.body.body))
              )
            ]),
            t.exportDefaultDeclaration(t.identifier(context.className))
          ];

          path.replaceWithMultiple(body);
        },
        ClassMethod(path) {
          const { body, key, params } = path.node;

          if (key.name !== 'render') {
            path.replaceWith(
              t.variableDeclaration('const', [t.variableDeclarator(key, t.arrowFunctionExpression(params, body))])
            );
            return;
          }

          const statement = body.body.find((element) => element.type === 'ReturnStatement');

          if (statement && statement.argument && statement.argument.type === 'JSXElement') {
            let element = statement.argument;

            let children = [t.jsxText('\n'), element, t.jsxText('\n')];

            let dock;

            if (element.openingElement.name.name.match(/fragment/)) {
              if (element.openingElement.attributes.some((attribute) => attribute.name.name == 'dock')) dock = true;
              children = element.children;
              element = element.children.find((element) => element.type === 'JSXElement');
            }

            if (style?.content) {
              children.push(
                t.jsxElement(
                  t.jsxOpeningElement(t.jsxIdentifier('style'), []),
                  t.jSXClosingElement(t.jsxIdentifier('style')),
                  [t.JSXExpressionContainer(t.stringLiteral(scoped(style?.content, `.${classNamePrefix}`)))]
                )
              );
            }

            statement.argument = t.jsxElement(
              t.jsxOpeningElement(t.jsxIdentifier('div'), [
                t.jsxAttribute(t.jsxIdentifier('className'), t.stringLiteral(classNamePrefix + (dock ? ' dock' : '')))
              ]),
              t.jSXClosingElement(t.jsxIdentifier('div')),
              children
            );
          }

          path.replaceWithMultiple(body.body);
        },
        ClassProperty(path) {
          const { decorators, key, value } = path.node;

          if (decorators && decorators[0] && decorators[0].expression.callee.name === 'State') {
            const setter = 'set' + pascalCase(key.name);

            path.replaceWith(t.variableDeclaration('let', [t.variableDeclarator(key, value)]));

            addDependency('useState', 'react');

            path.replaceWith(
              t.variableDeclaration('const', [
                t.variableDeclarator(
                  t.arrayPattern([key, t.identifier(setter)]),
                  t.callExpression(t.identifier('useState'), value ? [value] : [])
                )
              ])
            );
          } else {
            path.replaceWith(t.variableDeclaration('let', [t.variableDeclarator(key, value)]));
          }
        },
        ImportDeclaration(path) {
          // TODO
          if (path.node.source.value != '@htmlplus/element') return;
          path.remove();
        },
        JSXAttribute(path) {
          const { name } = path.node;

          if (isEvent(name.name)) {
            name.name = options?.eventNameConvertor?.(name.name, context) || name.name;
            return;
          }

          name.name = camelCase(name.name);

          if (name.name === 'class') name.name = 'className';

          // TODO
          if (/data[A-Z]/g.test(name.name)) name.name = paramCase(name.name);
        },
        JSXElement(path) {
          const { openingElement, closingElement } = path.node;

          const name = openingElement.name.name;

          if (!/-/g.test(name)) return;

          const newName = options?.componentNameConvertor?.(name, context) || name;

          addDependency(newName.split('.').shift(), options?.componentRefrence);

          openingElement.name.name = newName;

          if (!closingElement) return;

          closingElement.name.name = newName;
        },
        JSXText(path) {
          const { value } = path.node;

          let level = 1;

          let parent = path.parentPath;

          while (parent.type !== 'ReturnStatement') {
            level++;
            parent = parent.parentPath;
          }

          let space = '';

          for (let i = 0; i < level; i++) space += '  ';

          const trim = value.trim();

          const from = value.indexOf(trim);

          const to = trim.length;

          const startIndex = value.indexOf('\n');

          const endIndex = value.lastIndexOf('\n');

          const start = startIndex !== -1 && from > startIndex;

          const end = endIndex !== -1 && to <= endIndex;

          path.node.value = `${start ? '\n' : ''}${space}${value.trim()}${end ? '\n' : ''}`;
        },
        MemberExpression(path) {
          const { property, object } = path.node;
          if (object.type === 'ThisExpression') path.replaceWith(property);
        }
      }
    };

    const ast = t.cloneNode(context.fileAST, true);

    visitor(ast, visitors.script);

    return {
      script: print(ast)
    };
  };
  return {
    name,
    next
  };
};
