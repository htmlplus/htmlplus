import { GetStaticPaths, GetStaticProps } from 'next';

import { headerCase, pascalCase } from 'change-case';

import { Markup } from '@app/containers';
import { components, examples, frameworks } from '@app/data';
import { LayoutDefault } from '@app/layouts';
import * as Utils from '@app/utils';

const ComponentDetails = ({ component, example }: any) => {
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
    component.readme = component.readme?.replace(/<Example value=(".*") /g, `<Example value={example[$1]} `) || null;

  // TODO
  const example = (() => {
    return examples
      ?.filter((example) => example.category.startsWith(framework) && example.component == componentKey)
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
            url: Utils.getExampleFromGithub(framework as string, componentKey as string, example.key)
          },
          {
            key: 'codesandbox',
            title: 'CodeSandbox',
            icon: 'sandbox',
            url: `/${framework}/component/${componentKey}/${example.key}/codesandbox`
          }
        ];

        const tabs: any[] = [];

        const title = headerCase(example.key);

        const componentName = `${pascalCase(example.component)}${pascalCase(example.key)}`;

        // TODO
        const description =
          examples?.find((x) => x.category == 'description' && x.component == componentKey && x.key == example.key)
            ?.detail || null;

        result[example.key] = {
          componentName,
          links,
          tabs,
          title,
          description
        };

        for (const key of ['template', 'script', 'style']) {
          if (framework == 'react' && key == 'template') continue;
          const content = example.detail?.[key] ?? null;
          tabs.push({
            key,
            content,
            disabled: !content,
            title: headerCase(key)
          });
        }

        return result;
      }, {});
  })();

  return {
    props: {
      component,
      example
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = frameworks
    .filter((framework) => !framework.disabled)
    .map((framework) =>
      components.map(
        (component) =>
          Utils.getPath('COMPONENT_DETAILS', {
            framework: framework.key,
            component: component.key
          })!
      )
    )
    .flat()
    .filter((path) => !!path);
  return {
    paths,
    fallback: false
  };
};
