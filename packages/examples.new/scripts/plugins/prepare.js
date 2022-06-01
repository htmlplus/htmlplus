import { pascalCase } from 'change-case';

// TODO
// css [style]
// html [template]
// tsx [script]
// html [javascript:template]
// js [javascript:script]
// html [vue:template]
// js [vue:script]

export const prepare = () => {
  const name = 'prepare';
  const next = (context) => {
    const regex = /```\w+\s\[\w+(:\w+)?\]\s[\S\s]*?```/g;

    const snippets = [];

    snippets.push({
      key: 'readme',
      type: undefined,
      context: context.fileContent?.replace(regex, '')?.trim()
    });

    context.fileContent?.match(regex)?.forEach((snippet) => {
      try {
        const lines = snippet.split('\n');

        const first = lines[0];

        const key = first
          ?.match(/\[\w+(:\w+)?\]/)
          ?.shift()
          ?.replace('[', '')
          ?.replace(']', '');

        const type = first
          ?.match(/```\w+/)
          ?.pop()
          ?.replace('```', '');

        const content = lines.slice(1, -1).join('\n');

        snippets.push({ key, type, content });
      } catch {}
    });

    const template = snippets.find((snippet) => snippet.key == 'template');

    const className = context.filePath
      .split(/[/|\\]/g)
      .slice(0, -1)
      .slice(-2)
      .map(pascalCase)
      .join('');

    if (template)
      context.fileContent = `
        class ${className} {
          render() {
            return (
              ${template.content}
            );
          }
        }
      `;

    const script = snippets.find((snippet) => snippet.key == 'script');

    if (script) context.fileContent = script.content;

    // TODO
    context.fileContent = context.fileContent.replace('class ', '@Element()\nclass ');

    // TODO
    context.snippets = snippets;
  };
  return {
    name,
    next
  };
};
