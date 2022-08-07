const fs = require('fs');
const { pascalCase } = require('change-case');
const db = require('../../examples/src/db.json');
const CONSTANTS = require('../src/constants');

fs.rmSync(CONSTANTS.EXAMPLES_DESTINATION, { force: true, recursive: true });

fs.mkdirSync(CONSTANTS.EXAMPLES_DESTINATION);

let index = `import dynamic from 'next/dynamic';`;

for (const example of db) {
  if (example.category != 'preview') continue;

  const { script } = example.detail;

  const name = `${pascalCase(example.component)}${pascalCase(example.key)}`;

  index += `\nexport const ${name} = dynamic<any>(() => import('./${name}').then((component) => component), { ssr: false });`;

  fs.writeFileSync(`${CONSTANTS.EXAMPLES_DESTINATION}/${name}.js`, script);
}

fs.writeFileSync(`${CONSTANTS.EXAMPLES_DESTINATION}/index.ts`, index);
