import React from 'react';

import axios from 'axios';

import { components } from '@app/data';

const ComponentDetails: React.FC = ({ component }: any) => {
  return <div>{component.tag}</div>;
};

export default ComponentDetails;

export const getStaticProps = async ({ params }: any) => {
  const { key } = params;

  const component = components.find((component: any) => component.tag === key);

  const contributors: string[] = [];

  try {
    (
      await axios.get(`https://api.github.com/repos/htmlplus/core/commits?path=packages/core/src/components/${key}`)
    ).data
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

export const getStaticPaths = async () => {
  return {
    paths: components.map((component: any) => `/component/${component.tag}`),
    fallback: false
  };
};
