import { scoped } from '../../utils.js';

export const preview = () => {
  const name = 'preview';
  const next = (context) => {

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

    const dock = context.outputs?.find((output) => output.name == 'prepare')?.output?.some((snippet) => snippet.options?.dock);

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
