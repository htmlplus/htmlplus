import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import axios from 'axios';

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
  const component = components.find((component) => component.key === context.params?.key);

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

  return {
    props: {
      component,
      contributors
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: components.map((component: any) => `/component/${component.key}`),
    fallback: false
  };
};
