import t, { File } from '@babel/types';

import { visitor } from './visitor.js';

export const addDependency = (file: File, source: string, imported: string, local?: string): string => {
  let find = false;

  const specifier = t.importSpecifier(t.identifier(local ?? imported), t.identifier(imported));

  visitor(file, {
    ImportDeclaration(path) {
      const { specifiers } = path.node;

      if (path.node.source.value != source) return;

      find = true;

      const previous = specifiers.find((specifier) => specifier.imported?.name == imported);

      if (previous) {
        local = previous.local.name;
        return;
      }

      specifiers.push(specifier);
    }
  });

  if (!find) file.program.body.unshift(t.importDeclaration([specifier], t.stringLiteral(source)));

  return local ?? imported;
};
