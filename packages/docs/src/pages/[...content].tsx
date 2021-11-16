import React from 'react';
import fs from 'fs';
import * as glob from 'glob';
import matter from 'gray-matter';
import path from 'path';
import { Markup } from '@app/components';
import { LayoutDefault } from '@app/layouts';

const root = path.resolve(process.cwd());

const All: React.FC<any> = (props) => {

  const { content } = props;

  return (
    <LayoutDefault>
      <Markup>{content}</Markup>
    </LayoutDefault>
  )
}

export default All;

export const getStaticProps = async ({ params }) => {

  const paths = params.content.join('/');

  let file;

  try {

    const filePath = path.join(root, `src/content/en/${paths}.md`);

    file = fs.readFileSync(filePath, 'utf8');
  }
  catch {

    const filePath = path.join(root, `src/content/en/${paths}/index.md`);

    file = fs.readFileSync(filePath, 'utf8');
  }

  const { content, data } = matter(file) || {};

  return {
    props: {
      content,
      data
    }
  }
}

export const getStaticPaths = async () => {

  const base = './src/content/en';

  const paths = glob.sync(`${base}/**/*.md`).map((file) => {

    let path = file.replace(base, '').replace('.md', '');

    if (path.endsWith('/index')) path = path.replace('/index', '');

    return path;
  });

  return {
    paths,
    fallback: false,
  };
}