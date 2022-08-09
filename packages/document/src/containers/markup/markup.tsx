import { useEffect, useState } from 'react';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import * as CONSTANTS from '@app/constants';

import { tokens } from './markup.tokens';
import { MarkupProps } from './markup.types';

export const Markup = ({ scope, value }: MarkupProps) => {
  const [source, setSource] = useState<MDXRemoteProps>();

  useEffect(() => {
    if (!value) return;

    // TODO
    value
      ?.replace(/\r\n/g, ' \r\n ')
      ?.match(/\{(.*?)\}/g)
      ?.forEach((token) => {
        const [type, key] = token.replace(/\{|\}/g, '').split('.');
        switch (type) {
          case 'CONSTANTS':
            value = value?.replace(token, (CONSTANTS as any)[key]);
            break;
        }
      });

    serialize(value).then(setSource);
  }, [value]);

  if (!source) return null;

  return <MDXRemote {...source} components={tokens} scope={{ CONSTANTS, ...scope }} />;
};
