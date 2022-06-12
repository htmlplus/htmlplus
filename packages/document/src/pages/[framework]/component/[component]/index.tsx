import { GetStaticPaths, GetStaticProps } from 'next';

import axios from 'axios';

import { Markup } from '@app/components';
import { components, examples, frameworks } from '@app/data';
import { LayoutDefault } from '@app/layouts';

const ComponentDetails = ({ component, contributors, example }: any) => {
  return (
    <LayoutDefault>
      <Markup value={component?.readme} scope={{ example }} />
    </LayoutDefault>
  );
};

export default ComponentDetails;

export const getStaticProps: GetStaticProps = async (context) => {
  const { component: componentKey, framework } = context.params || {};

  const component = components.find((component) => component.key == componentKey);

  if (component)
    component.readme = component.readme?.replace(/<Example value=(".*") /g, `<Example value={example[$1]} `);

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

  // TODO
  const example = (() => {
    const result: any = {};
    const filterd = examples?.filter((example) => example.category == framework && example.component == componentKey);
    const keys = ['template', 'script', 'style'];
    if (framework == 'react') keys.splice(0, 1);
    for (const example of filterd) {
      const tabs: Array<any> = (result[example.key] = []);
      for (const key of keys) {
        tabs.push({ key, content: example[key] ?? null });
      }
    }
    return result;
  })();

  return {
    props: {
      component,
      contributors,
      example
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = frameworks
    .filter((framework) => !framework.disabled)
    .map((framework) => components.map((component) => `/${framework.key}/component/${component.key}`))
    .flat();
  return {
    paths,
    fallback: false
  };
};
