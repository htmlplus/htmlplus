import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import axios from 'axios';
import glob from 'fast-glob';
import fs from 'fs';

import { Markup } from '@app/components';
import { components } from '@app/data';
import { LayoutDefault } from '@app/layouts';

const ComponentDetails = ({ component }: any) => {
  return (
    <LayoutDefault>
      <Markup value={component?.readme} />
    </LayoutDefault>
  );
};

export default ComponentDetails;

export const getStaticProps: GetStaticProps = async (context) => {
  const { key, framework } = context.params || {};

  const component = components.find((component) => component.key == key);

  const contributors: string[] = [];

  try {
    const response = await axios.get(
      `https://api.github.com/repos/htmlplus/core/commits?path=packages/core/src/components/${context.params?.key}`
    );
    response.data
      .map((commit: any) => commit.author?.login)
      .filter(
        (contributor: string, index: number, contributors: string[]) =>
          contributor && contributors.indexOf(contributor) === index
      )
      .forEach(contributors.push);
  } catch {}

  const root = `../examples.new/src/${component?.key}/*/javascript`;

  const pattern = `${root}/**/*.*`;

  const files = glob.sync(pattern);

  const examples = files.map((file) => {
    return {
      path: file
        .split(framework as string)
        .pop()
        ?.slice(1),
      content: fs.readFileSync(file, 'utf8')
    };
  });

  return {
    props: {
      component,
      contributors,
      examples
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: components.map((component: any) => `/component/${component.key}/javascript`),
    fallback: false
  };
};
