import { GetStaticPaths, GetStaticProps } from 'next';

import axios from 'axios';

import { Markup } from '@app/components';
import { components, examples } from '@app/data';
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
  const { component: componentKey, framework } = context.params || {};

  const component = components.find((component) => component.key == componentKey);

  if (component)
    component.readme = component.readme?.replace(/<Example value=(".*") /g, `<Example value={examples[$1]} `);

  const contributors: string[] = await (async () => {
    try {
      const url = `https://api.github.com/repos/htmlplus/core/commits?path=packages/core/src/components/${componentKey}`;
      const response = await axios.get(url);
      return response.data
        .map((commit: any) => commit.author?.login)
        .filter(
          (contributor: string, index: number, contributors: string[]) =>
            contributor && contributors.indexOf(contributor) === index
        );
    } catch { }
  })();

  const example = {};

  examples
    ?.at(0)
    ?.items
    ?.find((item) => item.name == componentKey)
    ?.items
    ?.forEach((item) => {
      const items = item.items.find((item) => item.name == framework)?.items;
      example[item.name] = items;
    })
  console.log(1, example)

  return {
    props: {
      component,
      contributors,
      examples: example
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ['javascript', 'react', 'vue']
    .map((framework) => components.map((component) => `/${framework}/component/${component.key}`))
    .flat(1);
  return {
    paths,
    fallback: false
  };
};
