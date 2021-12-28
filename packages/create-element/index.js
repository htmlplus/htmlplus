#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import enquirer from 'enquirer';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const cwd = process.cwd();

(async () => {

  const prompt = enquirer.prompt;

  const model = await prompt([
    {
      name: 'name',
      type: 'input',
      message: 'Project name?',
      initial: 'htmlplus-project',
      format: (value) => value?.trim(),
      validate: (value) => !!value?.trim()
    },
    // {
    //   name: 'manual',
    //   type: 'confirm',
    //   message: 'Do you want to set up manually config?',
    //   initial: false
    // }
  ]);

  if (model.manual) {

    const result = await prompt([
      {
        type: 'select',
        name: 'style',
        message: 'Which one do you prefer?',
        initial: 1,
        choices: [
          {
            name: 'css',
            message: 'CSS',
          },
          {
            name: 'scss',
            message: 'SCSS',
          },
        ]
      },
      {
        type: 'input',
        name: 'prefix',
        message: 'Enter prefix',
        initial: 'plus',
        format: (value) => value?.trim(),
        validate: (value) => !!value?.trim()
      }
    ])

    Object.assign(model, result);
  }

  const source = path.resolve(__dirname, 'template-default');

  const destination = path.resolve(cwd, model.name);

  await fs.copy(source, destination);

  await fs.rename(
    path.resolve(destination, '_gitignore'), 
    path.resolve(destination, '.gitignore'),
  );

  await fs.rename(
    path.resolve(destination, 'package_json'), 
    path.resolve(destination, 'package.json'),
  );
})();