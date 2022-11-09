// TODO

const fs = require('fs');
const path = require('path');
const { pascalCase } = require('change-case');
const db = require('../../examples/src/db.json');

const header = [
  '/**************************************************',
  ' * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY',
  ' **************************************************/',
  ''
];

(() => {
  const DESTINATION = './src/data/examples.ts';

  fs.rmSync(DESTINATION, { force: true, recursive: true });

  fs.mkdirSync(path.dirname(DESTINATION), { recursive: true });

  const lines = [...header, `export const examples: any[] = ${JSON.stringify(db, null, 2)};`];

  const content = lines.join('\n');

  fs.writeFileSync(DESTINATION, content, 'utf8');
})();

(() => {
  const DESTINATION = './src/containers/example/examples';

  fs.rmSync(DESTINATION, { force: true, recursive: true });

  fs.mkdirSync(DESTINATION, { recursive: true });

  const lines = [...header, `import dynamic from 'next/dynamic';`, ''];

  for (const example of db) {
    if (example.category != 'preview') continue;

    const name = `${pascalCase(example.component)}${pascalCase(example.key)}`;

    lines.push(
      `export const ${name} = dynamic(() => import('./${name}').then((component) => component), { ssr: false });`
    );

    const script = [...header, example.detail.script].join('\n');

    fs.writeFileSync(`${DESTINATION}/${name}.js`, script);
  }

  const content = lines.join('\n');

  fs.writeFileSync(`${DESTINATION}/index.js`, content);
})();
