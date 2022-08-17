import t from '@babel/types';
import { __dirname, print, renderTemplate, visitor } from '@htmlplus/element/compiler/utils/index.js';
import { camelCase, capitalCase, paramCase, pascalCase } from 'change-case';
import fs from 'fs';
import path from 'path';

import { getSnippet, getTitle } from '../../utils.js';

export const svelte = (options) => {
  const name = 'svelte';
  const next = (context) => {
    const dependencies = new Map();

    const addDependency = (local, imported) => {
      const locals = dependencies.get(imported) || new Set();
      locals.add(local);
      dependencies.set(imported, locals);
    };

    const visitors = {
      script: {}
    };

    const ast = t.cloneNode(context.fileAST, true);

    visitor(ast, visitors.script);

    const title = getTitle(context);

    const patterns = ['templates/**/*.*'];

    const destination = options?.destination?.(context) || path.join(context.directoryPath, name);

    fs.rmSync(destination, { recursive: true, force: true });

    const config = {
      cwd: __dirname(import.meta.url)
    };

    const style = getSnippet(context, 'style');

    const model = {
      title,
      script: print(ast),
      style: style?.content
    };

    renderTemplate(patterns, destination, config)(model);

    return {
      script: model.script,
      style: model.style
    };
  };
  return {
    name,
    next
  };
};
