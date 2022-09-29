import t from '@babel/types';
import { __dirname, print, renderTemplate, visitor } from '@htmlplus/element/compiler/utils/index.js';
import { camelCase, paramCase, pascalCase } from 'change-case';
import fs from 'fs';
import path from 'path';

import { format, formatFile, getSnippet, getTitle, isEvent, removeUnusedImport } from '../../utils.js';

export const react = (options) => {
  const name = 'react';
  const next = (context) => {
    const config = {
      cwd: __dirname(import.meta.url)
    };

    const dependencies = new Map();

    const destination = options?.destination?.(context) || path.join(context.directoryPath, name);

    const patterns = ['templates/**/*.*'];

    const title = getTitle(context);

    fs.rmSync(destination, { recursive: true, force: true });

    const addDependency = (path, local, imported) => {
      const locals = dependencies.get(imported) || new Set();
      locals.add(local);
      dependencies.set(imported, locals);
    };

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

          if (key.name != context.classRender.key.name) {
            path.replaceWith(
              t.variableDeclaration('const', [t.variableDeclarator(key, t.arrowFunctionExpression(params, body))])
            );
            return;
          }

          path.replaceWithMultiple(body.body);
        },
        ClassProperty(path) {
          const { decorators, key, value } = path.node;

          if (decorators && decorators[0] && decorators[0].expression.callee.name === 'State') {
            const setter = 'set' + pascalCase(key.name);

            path.replaceWith(t.variableDeclaration('let', [t.variableDeclarator(key, value)]));

            addDependency(path, 'useState', 'react');

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
        JSXAttribute(path) {
          const { name } = path.node;

          if (isEvent(name.name)) {
            name.name = options?.eventNameConvertor?.(name.name) || name.name;
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

          const newName = options?.componentNameConvertor?.(name) || name;

          addDependency(path, newName.split('.').shift(), options?.componentRefrence?.(name));

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

    const script = (() => {
      const ast = t.cloneNode(context.fileAST, true);

      visitor(ast, visitors.script);

      removeUnusedImport(ast);

      const content = print(ast);

      if (!content) return;

      return format(content, { parser: 'babel' });
    })();

    const style = (() => {
      const content = getSnippet(context, 'style')?.content;

      if (!content) return;

      return format(content, { parser: 'css' });
    })();

    if (!style) patterns.push('!templates/src/index.css.*');

    const model = {
      script,
      style,
      title
    };

    renderTemplate(patterns, destination, config)(model);

    formatFile(path.join(destination, 'src', 'App.js'), { parser: 'babel' });

    return {
      script,
      style
    };
  };
  return {
    name,
    next
  };
};
