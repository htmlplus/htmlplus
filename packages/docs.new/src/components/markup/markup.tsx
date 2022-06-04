import { useEffect, useState } from 'react';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import * as Constants from '@app/constants';

import { MarkupProps } from './markup.types';

// TODO
const components = {
  Alert: () => <div>TODO</div>,
  Playground: () => <div>TODO</div>,
  Usage: () => <div>TODO</div>,
  Api: () => <div>TODO</div>,
  Examples: () => <div>TODO</div>,
  Example: () => <div>TODO</div>
};

export const Markup = ({ value }: MarkupProps) => {
  const [source, setSource] = useState<MDXRemoteProps>();

  useEffect(() => {
    if (!value) return;
    serialize(value).then(setSource);
  }, [value]);

  if (!source) return null;

  return <MDXRemote {...source} components={components} scope={{ Constants }} />;
};
