// TODO

const fs = require('fs');
const { pascalCase } = require('change-case');
const db = require('../../examples/src/db.json');

const EXAMPLES_DESTINATION = './src/containers/example/examples';

fs.rmSync(EXAMPLES_DESTINATION, { force: true, recursive: true });

fs.mkdirSync(EXAMPLES_DESTINATION);

let index = `import dynamic from 'next/dynamic';`;

for (const example of db) {
  if (example.category != 'preview') continue;

  const { script } = example.detail;

  const name = `${pascalCase(example.component)}${pascalCase(example.key)}`;

  index += `\nexport const ${name} = dynamic<any>(() => import('./${name}').then((component) => component), { ssr: false });`;

  fs.writeFileSync(`${EXAMPLES_DESTINATION}/${name}.js`, script);
}

fs.writeFileSync(`${EXAMPLES_DESTINATION}/index.ts`, index);
