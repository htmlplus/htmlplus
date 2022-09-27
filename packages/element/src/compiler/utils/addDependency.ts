import t, { File } from '@babel/types';

import { visitor } from './visitor.js';

export const addDependency = (
  file: File,
  source: string,
  imported: string,
  local?: string,
  isDefault?: boolean
): string => {
  let node;

  visitor(file, {
    ImportDeclaration(path) {
      if (path.node.source.value != source) return;
      node = path.node;
    }
  });

  let specifier = node?.specifiers.find((specifier) => {
    if (isDefault) {
      return specifier.type == 'ImportDefaultSpecifier';
    } else {
      return specifier.imported?.name == imported;
    }
  });

  if (specifier) return specifier.local.name;

  if (isDefault) {
    specifier = t.importDefaultSpecifier(t.identifier(imported));
  } else {
    specifier = t.importSpecifier(t.identifier(local ?? imported), t.identifier(imported));
  }

  if (node) {
    if (isDefault) {
      node.specifiers.unshift(specifier);
    } else {
      node.specifiers.push(specifier);
    }
  } else {
    file.program.body.unshift(t.importDeclaration([specifier], t.stringLiteral(source)));
  }

  return isDefault ? imported : local ?? imported;
};
