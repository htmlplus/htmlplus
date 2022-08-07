const axios = require('axios');
const fs = require('fs');
const CONSTANTS = require('../src/constants');

const destination = './src/data/github.ts';

axios.default.get(CONSTANTS.GITHUB_API).then((response) => {
  const { data } = response;

  const github = JSON.stringify(
    {
      forks: data.forks_count,
      stars: data.subscribers_count,
      watchers: data.watchers
    },
    null,
    2
  );

  const raw = `export const github = ${github};`;

  fs.writeFileSync(destination, raw, 'utf8');
});
