import t from '@babel/types';
import { __dirname, print, renderTemplate, visitor } from '@htmlplus/element/compiler/utils/index.js';
import { camelCase } from 'change-case';
import fs from 'fs';
import path from 'path';

import { format, formatFile, getSnippet, getTitle, isEvent, toFile } from '../../utils.js';

export const svelte = (options) => {
  const name = 'svelte';
  const next = (context) => {
    const visitors = {
      script: {
        ClassDeclaration(path) {
          const { body } = path.node;
          path.traverse(visitors.script);
          if (!body.body.length) return path.remove();
          path.replaceWithMultiple(body.body);
        },
        ClassMethod: {
          enter(path) {
            const { body, key, params } = path.node;
            if (key.name == context.classRender.key.name) return;
            path.replaceWith(t.functionDeclaration(key, params, body));
          },
          exit(path) {
            const { key } = path.node;
            if (key.name != context.classRender.key.name) return;
            path.remove();
          }
        },
        ClassProperty(path) {
          const { key, value } = path.node;
          const variable = t.variableDeclaration('let', [t.variableDeclarator(key, value)]);
          const isProperty = context.classProperties.some((property) => property.key.name == key.name);
          if (isProperty) {
            path.replaceWith(t.exportNamedDeclaration(variable));
          } else {
            path.replaceWith(variable);
          }
        },
        ImportDeclaration(path) {
          // TODO
          if (path.node.source.value != '@htmlplus/element') return;
          path.remove();
        },
        MemberExpression(path) {
          const { object, property } = path.node;
          if (object.type != 'ThisExpression') return;
          path.replaceWith(property);
        },
        Program(path) {
          const { body } = path.node;
          context.customElementNames
            ?.map((name) => options?.componentRefrence(name))
            ?.forEach((dependency) => {
              return body.unshift(t.importDeclaration([], t.stringLiteral(dependency)));
            });
        }
      },
      template: {
        ClassDeclaration(path) {
          path.traverse(visitors.template);
          path.replaceWithMultiple(path.node.body.body);
        },
        ClassMethod(path) {
          const { body } = path.node;

          const statement = body.body.find((element) => element.type === 'ReturnStatement');

          const element = statement.argument;

          const children = [];

          if (element.openingElement.name.name.match(/fragment/)) {
            for (const child of element.children) {
              if (child.type == 'JSXText') continue;
              children.push(child);
            }
          } else {
            children.push(element);
          }

          path.replaceWithMultiple(children);
        },
        JSXAttribute(path) {
          const { name, value } = path.node;

          if (!value) return;

          if (isEvent(name.name)) {
            name.name = 'on:' + camelCase(name.name.slice(2));
          }

          if (value.type !== 'JSXExpressionContainer') return;

          // TODO
          const code = print(value.expression.body || value.expression);

          // TODO
          const newValue = code.replace(/this\.|;/, '');

          // TODO
          path.node.value = t.stringLiteral(`{${newValue}}`);
        },
        JSXExpressionContainer(path) {
          path.replaceWithSourceString(`[[[${print(path.node.expression)}]]]`);
        },
        MemberExpression(path) {
          const { object, property } = path.node;
          if (object.type != 'ThisExpression') return;
          path.replaceWith(property);
        }
      }
    };

    const script = (() => {
      const ast = t.cloneNode(context.fileAST, true);

      visitor(ast, visitors.script);

      const content = print(ast);

      if (!content) return;

      return format(content, { parser: 'babel' });
    })();

    const style = (() => {
      const content = getSnippet(context, 'style')?.content;

      if (!content) return;

      return format(content, { parser: 'css' });
    })();

    const template = (() => {
      const ast = t.cloneNode(toFile(context.classRender), true);

      visitor(ast, visitors.template);

      const content = print(ast)
        ?.trim()
        ?.replace(/\[\[\[/g, '{{')
        ?.replace(/\]\]\]/g, '}}');

      if (!content) return;

      return format(content, { parser: 'html' });
    })();

    const title = getTitle(context);

    const patterns = ['templates/**/App.*'];

    const destination = options?.destination?.(context) || path.join(context.directoryPath, name);

    fs.rmSync(destination, { recursive: true, force: true });

    const config = {
      cwd: __dirname(import.meta.url)
    };

    const model = {
      script,
      style,
      template,
      title
    };

    renderTemplate(patterns, destination, config)(model);

    // TODO
    formatFile(path.join(destination, 'App.svelte'), { parser: 'vue' });

    return model;
  };
  return {
    name,
    next
  };
};
