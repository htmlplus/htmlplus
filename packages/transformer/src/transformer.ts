import { CallExpression, Expression, transformSync,parseSync,printSync } from '@swc/core';
import { Visitor } from '@swc/core/Visitor';
import { getEventName } from './utils';

class ConsoleStripper extends Visitor {
  visitCallExpression(expression: CallExpression): Expression {
    if (expression.callee.type !== "MemberExpression") {
      return expression;
    }

    if (
      expression.callee.object.type === "Identifier" &&
      expression.callee.object.value === "console"
    ) {
      if (expression.callee.property.type === "Identifier") {
        return {
          type: "UnaryExpression",
          span: expression.span,
          operator: "void",
          argument: {
            type: "NumericLiteral",
            span: expression.span, 
            value: 0,
          },
        };
      }
    }

    return expression;
  }
}

const ast = parseSync(
  `
if (foo) {
    console.log("Foo") 
} else {
    console.log("Bar")
}`
);

const out = transformSync(ast, 
{   
  plugin: (m) => new ConsoleStripper().visitProgram(m),
}
);

console.log(
  out, 
  getEventName('onChange'), 
  printSync(
    ast
  )
)

export const transformer = (id: string) => {
  
}