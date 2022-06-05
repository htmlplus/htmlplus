import { useEffect, useState } from 'react';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import * as Constants from '@app/constants';

import { tokens } from './markup.tokens';
import { MarkupProps } from './markup.types';

export const Markup = ({ value }: MarkupProps) => {
  const [source, setSource] = useState<MDXRemoteProps>();

  useEffect(() => {
    if (!value) return;
    serialize(value).then(setSource);
  }, [value]);

  if (!source) return null;

  return <MDXRemote {...source} components={tokens} scope={{ Constants }} />;
};
