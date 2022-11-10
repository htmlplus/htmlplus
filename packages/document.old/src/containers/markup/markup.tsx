import { useEffect, useState } from 'react';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import remarkGfm from 'remark-gfm';

import { tokens } from './markup.tokens';
import { MarkupProps } from './markup.types';

export const Markup = ({ scope, value }: MarkupProps) => {
  const [source, setSource] = useState<MDXRemoteProps>();

  useEffect(() => {
    if (!value) return;
    serialize(value, { mdxOptions: { remarkPlugins: [remarkGfm] } }).then(setSource);
  }, [value]);

  if (!source) return null;

  return <MDXRemote {...source} components={tokens} scope={scope} />;
};
