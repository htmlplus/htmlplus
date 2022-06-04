import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import glob from 'fast-glob';
import fs from 'fs';
import path from 'path';

import { Markup } from '@app/components';
import { LayoutDefault } from '@app/layouts';

const base = 'src/content/en';

const All = ({ raw }: any) => {
  return (
    <LayoutDefault>
      <Markup value={raw} />
    </LayoutDefault>
  );
};

export default All;

export const getStaticProps: GetStaticProps = async (context) => {
  const url = (context.params?.content as any).join('/');

  const main = path.join(base, `${url}.md`);

  const alternative = path.join(base, `${url}/index.md`);

  const raw = fs.readFileSync(fs.existsSync(main) ? main : alternative, 'utf8');

  return {
    props: { raw }
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
