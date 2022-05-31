import {
  __dirname,
  print,
  renderTemplate,
  visitor,
} from "@htmlplus/element/compiler/utils/index.js";
import t from "@babel/types";
import template from "@babel/template";
import { camelCase, paramCase, pascalCase } from "change-case";

import path from "path";

export const react = (options) => {
  const name = "react";
  const next = (context) => {
    const dependencies = new Set();

    const script = {
      AssignmentExpression(path) {
        const { left, right } = path.node;
        if (left && left.object && left.object.type === "ThisExpression") {
          const setter = "set" + pascalCase(left.property.name);
          path.replaceWith(template.expression.ast`${setter}(${right})`);
        }
      },
      ClassDeclaration(path) {
        path.traverse(script);

        const body = [
          t.importDeclaration(
            [
              t.importDefaultSpecifier(t.identifier("React")),
              ...Array.from(dependencies.keys()).map((key) =>
                t.importSpecifier(t.identifier(key), t.identifier(key))
              ),
            ],
            t.stringLiteral("react")
          ),
          t.variableDeclaration("const", [
            t.variableDeclarator(
              t.identifier("App"),
              t.arrowFunctionExpression(
                [],
                t.blockStatement(path.node.body.body)
              )
            ),
          ]),
          t.exportDefaultDeclaration(t.identifier("App")),
        ];

        path.replaceWithMultiple(body);

        dependencies.clear();
      },
      ClassMethod(path) {
        const { body, key, params } = path.node;

        if (key.name !== "render") {
          path.replaceWith(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                key,
                t.arrowFunctionExpression(params, body)
              ),
            ])
          );
          return;
        }

        const statement = body.body.find(
          (element) => element.type === "ReturnStatement"
        );

        if (
          statement &&
          statement.argument &&
          statement.argument.type === "JSXElement"
        ) {
          let element = statement.argument;

          let children = [t.jsxText("\n"), element, t.jsxText("\n")];

          if (element.openingElement.name.name.match(/fragment/)) {
            children = element.children;
            element = element.children.find(
              (element) => element.type === "JSXElement"
            );
          }

          statement.argument = t.jsxElement(
            t.jsxOpeningElement(t.jsxIdentifier(""), []),
            t.jSXClosingElement(t.jsxIdentifier("")),
            children
          );
        }

        path.replaceWithMultiple(body.body);
      },
      ClassProperty(path) {
        const { decorators, key, value } = path.node;

        if (
          decorators &&
          decorators[0] &&
          decorators[0].expression.callee.name === "State"
        ) {
          const setter = "set" + pascalCase(key.name);

          path.replaceWith(
            t.variableDeclaration("let", [t.variableDeclarator(key, value)])
          );

          dependencies.add("useState");

          path.replaceWith(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                t.arrayPattern([key, t.identifier(setter)]),
                t.callExpression(t.identifier("useState"), value ? [value] : [])
              ),
            ])
          );
        } else {
          path.replaceWith(
            t.variableDeclaration("let", [t.variableDeclarator(key, value)])
          );
        }
      },
      MemberExpression(path) {
        const { property, object } = path.node;
        if (object.type === "ThisExpression") path.replaceWith(property);
      },
      JSXAttribute(path) {
        const { name } = path.node;

        if (/on[A-Z]/g.test(name.name)) {
          name.name = options?.eventNameConvertor?.(name.name, context) || name.name;
          return
        }

        name.name = camelCase(name.name);

        if (name.name === "class") name.name = "className";

        // TODO
        if (/data[A-Z]/g.test(name.name)) name.name = paramCase(name.name);
      },
      JSXElement(path) {
        const { openingElement, closingElement } = path.node;

        const name = openingElement.name.name;

        if (!/-/g.test(name)) return;

        const newName = options?.customElementNameConvertor?.(name, context) || name;

        openingElement.name.name = newName;

        if (!closingElement) return;

        closingElement.name.name = newName;
      },
      JSXText(path) {
        const { value } = path.node;

        let level = 1;

        let parent = path.parentPath;

        while (parent.type !== "ReturnStatement") {
          level++;
          parent = parent.parentPath;
        }

        let space = "";

        for (let i = 0; i < level; i++) space += "  ";

        const trim = value.trim();

        const from = value.indexOf(trim);

        const to = trim.length;

        const startIndex = value.indexOf("\n");

        const endIndex = value.lastIndexOf("\n");

        const start = startIndex !== -1 && from > startIndex;

        const end = endIndex !== -1 && to <= endIndex;

        path.node.value = `${start ? "\n" : ""}${space}${value.trim()}${end ? "\n" : ""
          }`;
      },
    };

    visitor(context.fileAST, script);

    const source = "templates/**/*.*";

    const destination = path.join(context.directoryPath, "react");

    const config = {
      cwd: __dirname(import.meta.url),
    };

    const model = {
      script: print(context.fileAST),
    };

    renderTemplate(source, destination, config)(model);
  };
  return {
    name,
    next,
  };
};
