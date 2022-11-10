// TODO

const axios = require('axios');
const fs = require('fs');

Promise.all([
  axios.get('https://api.github.com/repos/htmlplus/core'),
  axios.get('https://api.npmjs.org/downloads/point/2021-02-10:2050-01-01/@htmlplus%2Fcore'),
  axios.get('https://api.npmjs.org/downloads/point/last-month/@htmlplus%2Fcore'),
  axios.get('https://api.npmjs.org/downloads/point/last-week/@htmlplus%2Fcore')
]).then((responses) => {
  const [first, second, third, fourth] = responses;

  const lines = [
    '/**************************************************',
    ' * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY',
    ' **************************************************/',
    '',
    "import { components, examples, frameworks } from '@app/data';",
    '',
    'export const statistics = {',
    "  platforms: 'TODO',",
    "  themes: 'TODO',",
    `  forks: ${first.data.forks},`,
    `  stars: ${first.data.stargazers_count},`,
    `  watchers: ${first.data.subscribers_count},`,
    `  dowanloads: ${second.data.downloads},`,
    `  downloadsLastWeek: ${fourth.data.downloads},`,
    `  downloadsLastMonth: ${third.data.downloads},`,
    '  get components(): number {',
    '    return this.componentsPerFramework * this.frameworks;',
    '  },',
    '  get componentsPerFramework(): number {',
    '    return components.length;',
    '  },',
    '  get examples(): number {',
    '    return this.examplesPerFramework * this.frameworks;',
    '  },',
    '  get examplesPerFramework(): number {',
    "    return examples.filter((example) => example.category == 'preview').length;",
    '  },',
    '  get frameworks(): number {',
    '    return frameworks.length;',
    '  }',
    '};'
  ];

  const content = lines.join('\n');

  fs.writeFileSync('./src/data/statistics.ts', content, 'utf8');
});
