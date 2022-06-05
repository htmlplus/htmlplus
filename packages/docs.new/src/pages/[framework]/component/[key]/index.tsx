import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import axios from 'axios';
import glob from 'fast-glob';
import fs from 'fs';

import { Markup } from '@app/components';
import { components } from '@app/data';
import { LayoutDefault } from '@app/layouts';

const ComponentDetails = ({ component, contributors, examples }: any) => {
  return (
    <LayoutDefault>
      <Markup value={component?.readme} scope={{ examples }} />
    </LayoutDefault>
  );
};

export default ComponentDetails;

export const getStaticProps: GetStaticProps = async (context) => {
  const { key, framework } = context.params || {};

  const component = components.find((component) => component.key == key);

  const contributors: string[] = await (async () => {
    try {
      const url = `https://api.github.com/repos/htmlplus/core/commits?path=packages/core/src/components/${context.params?.key}`;
      const response = await axios.get(url);
      return response.data
        .map((commit: any) => commit.author?.login)
        .filter(
          (contributor: string, index: number, contributors: string[]) =>
            contributor && contributors.indexOf(contributor) === index
        );
    } catch {}
  })();

  const examples = (() => {
    const examples: any[] = [];

    if (!component) return examples;

    component.readme = component.readme?.replace(/<Example /g, `<Example examples={examples} `);

    const root = `../examples.new/src/${key}/*/${framework}`;

    const pattern = `${root}/**/*.*`;

    const files = glob.sync(pattern);

    files.forEach((file) => {
      const sections = file.split(/[\/|\\]/g);
      const indexOf = sections.indexOf(framework as string);
      const key = sections.at(indexOf - 1);
      const path = sections.slice(indexOf + 1).join('/');
      const content = fs.readFileSync(file, 'utf8');
      let example = examples.find((example) => example.key == key);
      if (!example) examples.push((example = { key, files: [] }));
      example.files.push({ path, content });
    });

    return examples;
  })();

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
    paths: components.map((component: any) => `/react/component/${component.key}`),
    fallback: false
  };
};
