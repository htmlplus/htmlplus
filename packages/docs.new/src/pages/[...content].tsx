import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import fs from 'fs';
import * as glob from 'glob';
import matter from 'gray-matter';
import path from 'path';

import { Markup } from '@app/components';
import { LayoutDefault } from '@app/layouts';

const base = 'src/content/en';

const All = ({ content }: any) => {
  return (
    <LayoutDefault>
      {content}
      <Markup>{content}</Markup>
    </LayoutDefault>
  );
};

export default All;

export const getStaticProps: GetStaticProps = async (context) => {
  const url = (context.params?.content as any).join('/');

  const main = path.join(base, `${url}.md`);

  const alternative = path.join(base, `${url}/index.md`);

  const raw = fs.readFileSync(fs.existsSync(main) ? main : alternative, 'utf8');

  const { content, data } = matter(raw) || {};

  return {
    props: {
      content,
      data
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = glob.sync(`${base}/**/*.md`).map((file) => {
    let path = file.replace(base, '').replace('.md', '');
    if (path.endsWith('/index')) path = path.replace('/index', '');
    return path;
  });
  return {
    paths,
    fallback: false
  };
};
