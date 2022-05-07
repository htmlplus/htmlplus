import { Node } from '@babel/types';

export interface Tag {
  key?: string;
  value?: string;
}

export interface TagParsed {
  name?: string;
  description?: string;
}

export const getTag = (node: Node, key?: string): Tag | undefined => {
  return getTags(node, key).pop();
};

export const getTags = (node: Node, filter?: string): Array<Tag> => {
  let tags: Array<Tag> = node['tags'] ?? [];

  if (!node['tags']) {
    const lines: Array<string> = [];

    const comments = (node.leadingComments || [])
      .map((comment) => comment.value)
      .join('\r\n')
      .split('\r\n');

    for (const comment of comments) {
      let line = comment.trimStart();

      if (line.startsWith('*')) line = line.slice(1);

      if (!line) continue;

      const isTag = line.trim().startsWith('@');

      if (isTag || !lines.length) lines.push(line);
      else lines[lines.length - 1] += line;
    }

    for (const line of lines) {
      let value = line.trim();

      if (!value.startsWith('@')) {
        tags.push({ value });
        continue;
      }

      const sections = value.split(' ');

      const key = sections[0].slice(1);

      value = sections.slice(1).join(' ').trim();

      tags.push({ key, value });
    }

    node['tags'] = tags;
  }

  return tags.filter((tag) => !filter || filter === tag.key);
};

export const hasTag = (node: Node, name: string): Boolean => {
  return getTags(node).some((tag) => tag.key === name);
};

export const parseTag = (tag: Tag): TagParsed => {
  const sections = tag.value?.split('-') || [];
  const name = sections[0]?.trim();
  const description = sections.slice(1).join('-').trim();
  return {
    name,
    description
  };
};
