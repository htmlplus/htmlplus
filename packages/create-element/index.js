#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import prompts from 'prompts';

const cwd = process.cwd()

const questions = [
  {
    type: 'text',
    name: 'name',
    message: 'Project name',
    initial: 'htmlplus-project',
    format: (value) => value?.trim(),
    validate: (value) => !!value?.trim()
  },
  {
    type: 'select',
    name: 'style',
    message: 'Which one do you prefer?',
    initial: 1,
    choices: [
      {
        title: 'CSS',
        value: 'css'
      },
      {
        title: 'SCSS',
        value: 'scss'
      },
    ]
  },
  {
    type: 'confirm',
    name: 'prefix',
    message: 'Do you want use global prefix?',
    initial: true
  },
  {
    type: (prefix) => prefix === true ? 'text' : null,
    name: 'prefix',
    message: 'Enter prefix',
    initial: 'plus',
    format: (value) => value?.trim(),
    validate: (value) => !!value?.trim()
  }
];

(async () => {

  const response = await prompts(questions);

  const source = path.resolve(cwd, 'template-default');

  const destination = path.resolve(cwd, response.name);
  
  await fs.copy(source, destination);

  // console.log(response); // => { name: 'htmlplus-project', style: 'scss', prefix: 'plus' }
})();