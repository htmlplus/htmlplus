import glob from 'fast-glob';
import fs from 'fs';

export const map = () => {
  const name = 'map';
  const finish = (global) => {

    const examples = [
      {
        "component": "aspect-ratio",
        "key": "default",
        "type": "react",
        "files": [
          {
            "key": "index.html",
            "content": "react"
          }
        ]
      },
      {
        "component": "aspect-ratio",
        "key": "default",
        "type": "codesandbox",
        "files": [
          {
            "key": "vue.html",
            "content": "codesandbox => vue"
          }
        ]
      }
    ];

    const pattern = `src/*/*/*`;

    const files = glob.sync(pattern, { onlyDirectories: true });

    for (const file of files) {
      const sections = file.split(/[\/|\\]/g);
      const component = sections.at(1);
      const key = sections.at(2);
      const type = sections.at(3);
      const f = glob.sync(`${file}/**/*.*`).map((ff) => {
        return {
          path: ff,
          // content: fs.readFileSync(ff, 'utf8')
        }
      })
      examples.push({ key, component, type, files: f });
    }

    const raw = JSON.stringify(examples, null, 2);

    fs.writeFileSync('src/map.json', raw, 'utf8');
  };
  return {
    name,
    finish
  };
};