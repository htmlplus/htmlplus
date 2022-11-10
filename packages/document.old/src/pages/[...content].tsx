import { GetStaticPaths, GetStaticProps } from 'next';

import glob from 'fast-glob';
import fs from 'fs';
import path from 'path';

import { Markup } from '@app/containers';
import { LayoutDefault } from '@app/layouts';

const base = 'src/content/en';

const All = ({ content }: any) => {
  return (
    <LayoutDefault>
      <Markup value={content} />
    </LayoutDefault>
  );
};

export default All;

export const getStaticProps: GetStaticProps = async (context) => {
  const url = (context.params?.content as any).join('/');

  const main = path.join(base, `${url}.md`);

  const alternative = path.join(base, `${url}/index.md`);

  const final = fs.existsSync(main) ? main : alternative;

  const content = fs.readFileSync(final, 'utf8');

  return {
    props: { content }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = glob.sync(`${base}/**/*.md`).map((file) =>
    file
      .replace(base, '')
      .replace('.md', '')
      .replace(/\/index$/, '')
  );
  return {
    paths,
    fallback: false
  };
};
