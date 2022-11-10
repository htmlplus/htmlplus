// TODO

const { pascalCase } = require('change-case');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const DIRECTORY = './src/containers/example/examples';
const FILE = './src/data/examples.ts';
const LOCALE = path.join(__dirname, '../../examples/src/db.json');
const REMOTE = 'https://github.com/htmlplus/examples/raw/main/src/db.json';
const HEADER = [
  '/**************************************************',
  ' * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY',
  ' **************************************************/',
  ''
];

const load = () => {
  return new Promise((resolve, reject) => {
    const has = fs.existsSync(LOCALE);
    if (has) {
      const raw = fs.readFileSync(LOCALE, 'utf8');
      const db = JSON.parse(raw);
      resolve(db);
    } else {
      axios
        .get(REMOTE)
        .then((response) => resolve(response.data))
        .catch(reject);
    }
  });
};

load()
  .then((db) => {
    (() => {
      fs.rmSync(FILE, { force: true, recursive: true });

      fs.mkdirSync(path.dirname(FILE), { recursive: true });

      const lines = [...HEADER, `export const examples: any[] = ${JSON.stringify(db, null, 2)};`];

      const content = lines.join('\n');

      fs.writeFileSync(FILE, content, 'utf8');
    })();

    (() => {
      fs.rmSync(DIRECTORY, { force: true, recursive: true });

      fs.mkdirSync(DIRECTORY, { recursive: true });

      const lines = [...HEADER, `import dynamic from 'next/dynamic';`, ''];

      for (const example of db) {
        if (example.category != 'preview') continue;

        const name = `${pascalCase(example.component)}${pascalCase(example.key)}`;

        lines.push(
          `export const ${name} = dynamic(() => import('./${name}').then((component) => component), { ssr: false });`
        );

        const script = [...HEADER, example.detail.script].join('\n');

        fs.writeFileSync(`${DIRECTORY}/${name}.js`, script);
      }

      const content = lines.join('\n');

      fs.writeFileSync(`${DIRECTORY}/index.js`, content);
    })();
  })
  .catch((error) => {
    throw error;
  });
