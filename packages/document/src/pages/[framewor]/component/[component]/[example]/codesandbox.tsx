import { GetStaticPaths, GetStaticProps } from 'next';

import { examples } from '@app/data';

const ComponentCodesandbox = ({ content }: any) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default ComponentCodesandbox;

export const getStaticProps: GetStaticProps = async (context) => {
  const { component, example, framework } = context.params || {};

  const content = examples
    ?.find((item) => item.component == component && item.key == example && item.type == 'codesandbox')
    ?.files
    ?.find((file) => file.key == `${framework}.html`)
    ?.content;

  return {
    props: { content }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = examples
    ?.filter((example) => example.type == 'codesandbox')
    ?.map((example) => {
      return example.files?.map((file) => `/${file.key.replace('.html', '')}/component/${example.component}/${example.key}/codesandbox`)
    })
    ?.flat(1);
  return {
    paths,
    fallback: false
  };
};