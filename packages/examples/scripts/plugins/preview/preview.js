import { visitor } from '@htmlplus/element/compiler/utils/index.js';

import { scoped } from '../../utils.js';

export const preview = () => {
  const name = 'preview';
  const next = (context) => {
    let dock = false;

    const visitors = {
      script: {
        ClassMethod(path) {
          const { body, key, params } = path.node;

          if (key.name !== 'render') return;

          const statement = body.body.find((element) => element.type === 'ReturnStatement');

          if (!statement) return;

          if (!statement.argument) return;

          if (statement.argument.type !== 'JSXElement') return;

          let element = statement.argument;

          if (!element.openingElement.name.name.match(/fragment/)) return;

          if (!element.openingElement.attributes.some((attribute) => attribute.name.name == 'dock')) return;

          dock = true;
        },
      }
    };

    visitor(context.fileAST, visitors.script);

    const classNamePrefix =
      'ex-' +
      context.filePath
        .split(/[/|\\]/g)
        .slice(0, -1)
        .slice(-2)
        .join('-');

    let { script, style } = context.outputs?.find((output) => output.name == 'react')?.output;

    if (style) style = scoped(style, `.${classNamePrefix}`);

    script.split('export default ')[0];

    script = [
      script.split('export default ')[0].trim(),
      '',
      `const ${context.className}Example = () => {`,
      '  return (',
      `    <div className="${classNamePrefix}${dock ? ' dock' : ''}">`,
      `      <${context.className} />`,
      `      <style>{\`${style}\`}</style>`,
      '    </div>',
      '  )',
      '};',
      '',
      `export default ${context.className}Example;`
    ].join('\n');

    return { script };
  };
  return {
    name,
    next
  };
};
