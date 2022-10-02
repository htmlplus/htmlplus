import t from '@babel/types';
import { capitalCase } from 'change-case';
import fs from 'fs';
import prettier from 'prettier';

export const format = (source, options = {}) => {
  return prettier.format(
    source,
    Object.assign(
      {},
      {
        embeddedLanguageFormatting: 'off',
        quoteProps: 'consistent',
        singleQuote: true,
        trailingComma: 'none',
        vueIndentScriptAndStyle: true
      },
      options
    )
  );
};

export const formatFile = (file, options = {}) => {
  fs.writeFileSync(file, format(fs.readFileSync(file, 'utf8'), options), 'utf8');
};

export const getSnippet = (context, key) => {
  return context.outputs?.find((output) => output.name == 'prepare')?.output?.find((snippet) => snippet.key == key);
};

export const getTitle = (context) => {
  return context.filePath
    .split(/[/|\\]/g)
    .slice(0, -1)
    .slice(-2)
    .map(capitalCase)
    .join(' | ');
};

export const isEvent = (input) => {
  return !!input?.match(/on[A-Z]\w+/g);
};

export const scoped = (styles, className) => {
  try {
    var classLen = className.length,
      char,
      nextChar,
      isAt,
      isIn;
    className += ' ';
    styles = styles.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '');
    styles = styles.replace(/}(\s*)@/g, '}@');
    styles = styles.replace(/}(\s*)}/g, '}}');
    for (var i = 0; i < styles.length - 2; i++) {
      char = styles[i];
      nextChar = styles[i + 1];
      if (char === '@') isAt = true;
      if (!isAt && char === '{') isIn = true;
      if (isIn && char === '}') isIn = false;
      if (
        !isIn &&
        nextChar !== '@' &&
        nextChar !== '}' &&
        (char === '}' || char === ',' || ((char === '{' || char === ';') && isAt))
      ) {
        styles = styles.slice(0, i + 1) + className + styles.slice(i + 1);
        i += classLen;
        isAt = false;
      }
    }
    if (styles.indexOf(className) !== 0 && styles.indexOf('@') !== 0) styles = className + styles;
    return styles;
  } catch {}
};

export const toFile = (node) => {
  return t.file(t.program([t.classDeclaration(t.identifier('Test'), null, t.classBody([node]))], [], 'module'));
};
