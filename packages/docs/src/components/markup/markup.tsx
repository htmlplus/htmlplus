import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import htmlParser from 'react-markdown/plugins/html-parser';
import { Alert, Button, Code, Text, TocItem } from '@app/components';
import * as components from '@app/components';
import * as Constants from '@app/constants';
import { router } from '@app/services';
import * as Utils from '@app/utils';
import { MarkupProps } from './markup.types';

const renderers = {
  blockquote: (props) => {

    const value = props.node.children[0].children[0].value.trim();

    const token = ((value.match(/\[\w+\]/) || [])[0] || '');

    const type = token.replace(/\[|\]/g, '');

    return <Alert type={type}>{value.replace(token, '')}</Alert>;
  },
  code: (props) => <Code language={props.language}>{props.value}</Code>,
  heading: (props) => {

    const { children, level } = props;

    const content = level === 1 ? children : <TocItem>{children}</TocItem>;

    return <Text size={level.toString()}>{content}</Text>;
  },
  link: (props) => <Button color="secondary" link="underline" to={props.node.url}>{props.children}</Button>,
  paragraph: (props) => <Text size="paragraph">{props.children}</Text>,
};

const tokenizer = (input) => {

  const tokens = input.match(/\{(.*?)\}/g) || [];

  tokens.map((token) => {

    const raw = token.replace(/\{|\}/g, '');

    const sections = raw.split('.');

    const type = sections[0];

    const value = sections[1];

    switch (type) {

      case 'Constants':
        input = input.replace(token, Constants[value]);
        break;

      case 'Router':
        input = input.replace(token, router.path(value));
        break;
    }
  });

  return input;
}

export const Markup: React.FC<MarkupProps> = (props) => {

  const { children, ignoreParagraph } = props;

  if (ignoreParagraph) renderers.paragraph = (props) => props.children;

  const parseHtml = htmlParser({
    isValidNode: (node) => node.type !== 'script',
    processingInstructions: [
      {
        replaceChildren: true,
        shouldProcessNode: (node) => {
          return node.name.split('-').length > 1;
        },
        processNode: (node, children, index) => {

          const name = Utils.toPascalCase(node.name);

          const Tag = components[name];

          return <Tag />;
        }
      }
    ]
  })

  return (
    <ReactMarkdown
      renderers={renderers}
      plugins={[gfm]}
      astPlugins={[parseHtml]}
      allowDangerousHtml
    >
      {tokenizer(children.toString())}
    </ReactMarkdown>
  );
};
