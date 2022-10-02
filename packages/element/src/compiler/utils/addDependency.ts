import t, { File } from '@babel/types';

import { visitor } from './visitor.js';

export function addDependency(path: File | any, source: string): void;
export function addDependency(path: File | any, source: string, local: string): string;
export function addDependency(path: File | any, source: string, local: string, imported: string): string;

export function addDependency(path: File | any, source: string, local?: string, imported?: string): string | void {
  const isDefault = local && !imported;

  const isImport = local && imported;

  const isNormal = !local && !imported;

  let declaration;

  let file = path;

  while (file.parentPath) file = file.parentPath;

  file = file.node || file;

  visitor(file, {
    ImportDeclaration(path) {
      if (path.node.source.value != source) return;
      declaration = path.node;
    }
  });

  if (isNormal && declaration) return;

  let specifier = declaration?.specifiers.find((specifier) => {
    if (isDefault) {
      return specifier.type == 'ImportDefaultSpecifier';
    } else if (isImport) {
      return specifier.imported?.name == imported;
    }
  });

  if (specifier) return specifier.local.name;

  if (isDefault) {
    specifier = t.importDefaultSpecifier(t.identifier(local));
  } else if (isImport) {
    specifier = t.importSpecifier(t.identifier(local), t.identifier(imported));
  }

  if (declaration) {
    if (isDefault) {
      declaration.specifiers.unshift(specifier);
    } else if (isImport) {
      declaration.specifiers.push(specifier);
    }
  } else {
    file.program.body.unshift(t.importDeclaration(specifier ? [specifier] : [], t.stringLiteral(source)));
  }

  return local;
}
