const t = require('@babel/types');

module.exports = (options) => {

  const { ast, generator } = options;

  const state = {
    elements: new Set()
  };

  const setId = (path) => {

    const element = path.find((element) => element.type === 'JSXElement');

    state.elements.add(element.node);

    const attributes = element.node.openingElement.attributes;

    if (attributes.some((attribute) => attribute.name.name === 'id')) return;

    attributes.unshift(
      t.jsxAttribute(
        t.jsxIdentifier('id'),
        t.stringLiteral(`element${state.elements.size}`)
      )
    )
  }

  const getValue = (path) => {

    const { expression } = path.node;

    switch (expression.type) {

      case 'BinaryExpression':

        break;

      case 'BooleanLiteral':
      case 'NumericLiteral':
      case 'StringLiteral':

        return expression.value;

      case 'MemberExpression':

        break;

      case 'TemplateLiteral':

        break;
    }
  }

  const types = {
    template: {
      ClassDeclaration(path) {

        const { body } = path.node;

        path.traverse(types.template);

        const render = body.body.slice(-1)[0];

        path.replaceWith(render);

        state.elements.clear();
      },
      ClassMethod(path) {

        const { body, key } = path.node;

        if (key.name !== 'render') return path.remove();

        const statement = body.body.find((element) => element.type === 'ReturnStatement');

        const element = statement.argument;

        path.replaceWith(element);
      },
      JSXAttribute(path) {

        const { name, value } = path.node;

        if (!value) return;

        // 'event' attribute detection
        if (name.name.match(/on[A-Z]/)) {

          setId(path);

          path.remove();
        }
      },
      JSXExpressionContainer(path) {

        const value = getValue(path);

        const isAttribute = path.parent.type === 'JSXAttribute';

        if (isAttribute) {

          switch (typeof value) {

            case 'undefined':

              // TODO
              path.parentPath.remove();

              break;

            default:

              path.replaceWith(t.stringLiteral(`${value}`));

              break;
          }
        }
        else {

          switch (typeof value) {

            case 'undefined':
            case 'boolean':

              path.remove();

              break;

            default:

              path.replaceWithSourceString(value);

              break;
          }
        }
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
      }
    },
    script: {
      ClassDeclaration(path) {

        path.traverse(types.script);

        // if (!path.node.body.body.length) return path.remove();

        state.elements.clear();
      },
      ClassMethod(path) {

        const { key } = path.node;

        if (key.name !== 'render') return;

        path.remove();
      },
      JSXAttribute(path) {

        const { name, value } = path.node;

        // 'event' attribute detection
        if (name.name.match(/on[A-Z]/)) setId(path);
      }
    }
  }

  let template = generator(t.cloneNode(ast), types.template).trim().slice(0, -1);

  if (template.indexOf('fragment') > -1) {

    template = template
      .split('\n')
      .slice(1, -1)
      .map((line) => line.slice(2))
      .join('\n')
      .trim();
  }
  
  const script = ''; // TODO generator(t.cloneNode(ast), options.script);

  return {
    template,
    script
  }
};