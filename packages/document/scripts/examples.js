const fs = require('fs');
const db = require('../../examples/src/db.json');
const { pascalCase } = require('change-case');

const destination = './src/containers/example/examples';

fs.rmSync(destination, { force: true, recursive: true });

fs.mkdirSync(destination);

let index = `import dynamic from 'next/dynamic';`;

for (const example of db) {
  if (example.category != 'preview') continue;

  const { script } = example.detail;

  const name = `${pascalCase(example.component)}${pascalCase(example.key)}`;

  index += `\nexport const ${name} = dynamic<any>(() => import('./${name}').then((component) => component), { ssr: false });`;

  fs.writeFileSync(`${destination}/${name}.js`, script);
}

fs.writeFileSync(`${destination}/index.ts`, index);
