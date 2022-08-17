import t from '@babel/types';
import { __dirname, print, renderTemplate, visitor } from '@htmlplus/element/compiler/utils/index.js';
import { camelCase } from 'change-case';
import fs from 'fs';
import path from 'path';

import { getSnippet, getTitle, indent, isEvent, toFile } from '../../utils.js';

export const vue = (options) => {
  const name = 'vue';
  const next = (context) => {
    const visitors = {
      script: {
        ClassDeclaration(path) {
          const { body } = path.node;

          path.traverse(visitors.script);

          if (!body.body.length) return path.remove();

          context.customElementNames
            .map((name) => options?.componentRefrence(name))
            .forEach((dependency) => {
              return body.body.unshift(t.importDeclaration([], t.stringLiteral(dependency)));
            });

          if (context.classStates.length)
            body.body.unshift(
              t.importDeclaration([t.importSpecifier(t.identifier('ref'), t.identifier('ref'))], t.stringLiteral('vue'))
            );

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

          const isProperty = context.classProperties.some((property) => property.key.name == key.name);

          if (isProperty) {
            // TODO
          }

          const isState = context.classStates.some((state) => state.key.name == key.name);

          if (isState) {
            path.replaceWith(
              t.variableDeclaration('const', [
                t.variableDeclarator(key, t.callExpression(t.identifier('ref'), value ? [value] : []))
              ])
            );
          }

          if (!isProperty && !isState) path.remove();
        },
        ImportDeclaration(path) {
          // TODO
          if (path.node.source.value != '@htmlplus/element') return;
          path.remove();
        },
        MemberExpression(path) {
          const { object, property } = path.node;

          if (object.type != 'ThisExpression') return;

          const isState = context.classStates.some((state) => state.key.name == property.name);

          if (isState) {
            path.replaceWith(t.memberExpression(property, t.identifier('value')));
          } else {
            path.replaceWith(property);
          }
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

          // TODO: check the examples
          // card             -> default
          // card             -> tile
          // counter          -> default
          // scroll-indecator -> default
          // tooltip          -> default
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
            name.name = '@' + camelCase(name.name.slice(2));
          }

          if (value.type !== 'JSXExpressionContainer') return;

          // TODO
          const code = print(value.expression.body || value.expression);

          // TODO
          const newValue = code.replace(/this\.|;/, '').replace('event', '$event');

          // TODO
          path.node.value = t.stringLiteral(newValue);

          if (!name.name.match(/@|:/)) name.name = `:${name.name}`;
        },
        JSXExpressionContainer(path) {
          path.replaceWithSourceString(`[[[${print(path.node.expression)}]]]`);
        },
        JSXText(path) {
          const { value } = path.node;

          let level = -2;

          let parent = path.parentPath;

          while (parent && parent.type !== 'ClassBody') {
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
          const { object, property } = path.node;
          if (object.type != 'ThisExpression') return;
          path.replaceWith(property);
        }
      }
    };

    const script = (() => {
      const ast = t.cloneNode(context.fileAST, true);
      visitor(ast, visitors.script);
      return print(ast);
    })();

    const style = getSnippet(context, 'style');

    const template = (() => {
      const ast = t.cloneNode(toFile(context.classRender), true);

      visitor(ast, visitors.template);

      let raw = print(ast)
        .trim()
        .replace(/\[\[\[/g, '{{')
        .replace(/\]\]\]/g, '}}');
      // TODO
      // .split('\n')
      // .map((line, index) => (index ? line.slice(6) : line))
      // .join('\n');

      return raw;
    })();

    const title = getTitle(context);

    const patterns = ['templates/**/*.*'];

    const destination = options?.destination?.(context) || path.join(context.directoryPath, name);

    fs.rmSync(destination, { recursive: true, force: true });

    const config = {
      cwd: __dirname(import.meta.url)
    };

    const model = {
      title,
      script: indent(script, 1),
      template: indent(template, 1),
      style: indent(style?.content, 1)
    };

    renderTemplate(patterns, destination, config)(model);

    return {
      script,
      style: style?.content,
      template
    };
  };
  return {
    name,
    options,
    next
  };
};
