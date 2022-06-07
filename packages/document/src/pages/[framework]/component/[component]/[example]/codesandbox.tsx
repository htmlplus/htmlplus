import { GetStaticPaths, GetStaticProps } from 'next';

import { examples } from '@app/data';

const ComponentCodesandbox = ({ content }: any) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default ComponentCodesandbox;

export const getStaticProps: GetStaticProps = async (context) => {
  const { component, example, framework } = context.params || {};

  const content = examples
    ?.at(0)
    ?.items
    ?.find((item) => item.name == component)
    ?.items
    ?.find((item) => item.name == example)
    ?.items
    ?.find((item) => item.name == 'codesandbox')
    ?.items
    ?.find((item) => item.name == framework)
    ?.content || null;

  return {
    props: { content }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = examples
    ?.at(0)
    ?.items
    ?.map((component) => {
      return component
        ?.items
        ?.map((example) => {
          return example
            ?.items
            ?.find((framework) => framework.name == 'codesandbox')
            ?.items
            ?.map((framework) => `/${framework.name}/component/${component.name}/${example.name}/codesandbox`)
        })
    })
    ?.flat(3);
  return {
    paths,
    fallback: false
  };
};