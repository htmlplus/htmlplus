import t from '@babel/types';
import { __dirname, print, renderTemplate, visitor } from '@htmlplus/element/compiler/utils/index.js';
import { camelCase, capitalCase, paramCase, pascalCase } from 'change-case';
import fs from 'fs';
import path from 'path';

export const react = (options) => {
  const name = 'react';
  const next = (context) => {
    const dependencies = [];

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

          // TODO
          // dependencies.reduce((result, dependency) => {
          //   const [a, b] = dependency
          //   result[a] = result[a] || []
          //   result[a].push(b)
          //   return result
          // }, [])
          //   .map((aaaa) => {
          //     return t.importDeclaration([], t.stringLiteral("react"))
          //   })

          const body = [
            ...dependencies.map((dependency) =>
              t.importDeclaration(
                [t.importSpecifier(t.identifier(dependency[0]), t.identifier(dependency[0]))],
                t.stringLiteral(dependency[1])
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

            if (element.openingElement.name.name.match(/fragment/)) {
              children = element.children;
              element = element.children.find((element) => element.type === 'JSXElement');
            }

            statement.argument = t.jsxElement(
              t.jsxOpeningElement(t.jsxIdentifier(''), []),
              t.jSXClosingElement(t.jsxIdentifier('')),
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

            dependencies.push(['useState', 'react']);

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
        MemberExpression(path) {
          const { property, object } = path.node;
          if (object.type === 'ThisExpression') path.replaceWith(property);
        },
        JSXAttribute(path) {
          const { name } = path.node;

          if (/on[A-Z]/g.test(name.name)) {
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

          const newName = options?.customElementNameConvertor?.(name, context) || name;

          // TODO
          dependencies.push([newName, 'TODO']);

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
        }
      }
    };

    const ast = t.cloneNode(context.fileAST, true);

    visitor(ast, visitors.script);

    const title = context.filePath
      .split(/[/|\\]/g)
      .slice(0, -1)
      .slice(-2)
      .map(capitalCase)
      .join(' | ');

    const patterns = ['templates/**/*.*'];

    const destination = options?.destination?.(context) || path.join(context.directoryPath, 'react');

    fs.rmSync(destination, { recursive: true, force: true });

    const config = {
      cwd: __dirname(import.meta.url)
    };

    const style = context.snippets.find((snippet) => snippet.key == 'style');

    if (!style) patterns.push('!templates/src/index.css.*');

    const model = {
      title,
      script: print(ast),
      style: style?.content
    };

    renderTemplate(patterns, destination, config)(model);

    // TODO
    context.output = Object.assign(
      context.output || {},
      {
        react: {
          script: model.script,
          style: style?.content,
        }
      }
    );
  };
  return {
    name,
    next
  };
};
