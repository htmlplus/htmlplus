// TODO

const fs = require('fs');
const { pascalCase } = require('change-case');
const db = require('../../examples/src/db.json');

const EXAMPLES_DESTINATION = './src/containers/example/examples';

fs.rmSync(EXAMPLES_DESTINATION, { force: true, recursive: true });

fs.mkdirSync(EXAMPLES_DESTINATION, { recursive: true });

const lines = [`import dynamic from 'next/dynamic';`];

for (const example of db) {
  if (example.category != 'preview') continue;

  const name = `${pascalCase(example.component)}${pascalCase(example.key)}`;

  lines.push(
    `export const ${name} = dynamic(() => import('./${name}').then((component) => component), { ssr: false });`
  );

  fs.writeFileSync(`${EXAMPLES_DESTINATION}/${name}.js`, example.detail.script);
}

const content = lines.join('\n');

fs.writeFileSync(`${EXAMPLES_DESTINATION}/index.js`, content);
