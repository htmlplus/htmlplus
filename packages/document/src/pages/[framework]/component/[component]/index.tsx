import { GetStaticPaths, GetStaticProps } from 'next';

import axios from 'axios';
import { headerCase } from 'change-case';

import { Contributors, Markup } from '@app/components';
import { components, examples, frameworks } from '@app/data';
import { LayoutDefault } from '@app/layouts';

const ComponentDetails = ({ component, contributors, example }: any) => {
  return (
    <LayoutDefault>
      <Markup value={component?.readme} scope={{ example }} />
      <Contributors contributors={contributors} />
    </LayoutDefault>
  );
};

export default ComponentDetails;

export const getStaticProps: GetStaticProps = async (context) => {
  const { component: componentKey, framework } = context.params || {};

  const component = components.find((component) => component.key == componentKey);

  if (component)
    component.readme = component.readme
      ?.replace(/<Example value=(".*") /g, `<Example value={example[$1]} `)
      ?.replace(/<Usage /g, `<Usage framework={'${framework}'}`);

  console.log(1, component?.readme);

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
    } catch {}
  })();

  // TODO
  const example = (() => {
    return examples
      ?.filter((example) => example.category == framework && example.component == componentKey)
      ?.reduce((result, example) => {
        const links = [
          {
            key: 'download',
            title: 'Download',
            icon: 'download',
            url: `/${framework}/component/${componentKey}/${example.key}/download`
          },
          {
            key: 'github',
            title: 'Github',
            icon: 'github',
            url: `TODO`
          },
          {
            key: 'codesandbox',
            title: 'CodeSandbox',
            icon: 'sandbox',
            url: `/${framework}/component/${componentKey}/${example.key}/codesandbox`
          }
        ];

        const tabs: Array<any> = [];

        const title = headerCase(example.key);

        result[example.key] = { links, tabs, title };

        tabs.push({
          key: 'preview',
          content: examples?.find(
            (item) => item.key == example.key && item.category == 'custom-element' && item.component == componentKey
          )?.detail?.script
        });

        for (const key of ['template', 'script', 'style']) {
          if (framework == 'react' && key == 'template') continue;
          const content = example.detail?.[key] ?? null;
          tabs.push({ key, content });
        }

        for (const tab of tabs) {
          tab.disabled = !tab.content;
          tab.title = headerCase(tab.key);
        }

        return result;
      }, {});
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
