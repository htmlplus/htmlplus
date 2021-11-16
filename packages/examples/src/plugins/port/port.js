const
  generate = require('@babel/generator').default,
  parser = require('@babel/parser'),
  traverse = require('@babel/traverse').default,
  ports = require('./ports');

module.exports = (example, key) => {

  let script = '';

  for (const code of example.codes) {

    if (code.key === 'template') {

      script = `class{render(){return(${code.value})}}`;

      break;
    }

    if (code.key === 'script') {

      script = code.value;

      break;
    }
  }

  script = script.replace('class', 'class Name');

  const ast = parser.parse(
    script,
    {
      sourceType: 'module',
      plugins: [
        'jsx',
        'typescript',
        'classProperties',
        'decorators-legacy'
      ]
    }
  )

  const generator = (ast, options) => {

    traverse(ast, options);

    return generate(ast).code
  }

  const fn = ports[key];

  const result = fn({ ast, generator });

  // TODO
  example
    .codes
    .filter((code) => code.key.startsWith(`${key}:`))
    .map((code) => {

      const [, key] = code.key.split(':');

      if (!code.value) return;

      result[key] = code.value;
    })

  // TODO
  result.style = (example.codes.find((code) => code.key === 'style' && code.type === 'css') || {}).value;

  // TODO
  Object.keys(result)
    .forEach((key) => {

      const current = result[key];

      if (!current || !current.endsWith('\r')) return;

      result[key] = current.slice(0, -1);
    })

  return result;
}