import { GetStaticPaths, GetStaticProps } from 'next';

import { examples, frameworks } from '@app/data';

const ComponentDownload = ({ content }: any) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default ComponentDownload;

export const getStaticProps: GetStaticProps = async (context) => {
  const { component, example: exampleKey, framework } = context.params || {};

  const content = examples
    ?.find((example) => example.key == exampleKey && example.component == component && example.category == 'download')
    ?.detail
    ?.[framework as string] || null;

  return {
    props: { content }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = frameworks
    .filter((framework) => !framework.disabled)
    .map((framework) => examples.map((example) => `/${framework.key}/component/${example.component}/${example.key}/download`))
    .flat();
  return {
    paths,
    fallback: false
  };
};