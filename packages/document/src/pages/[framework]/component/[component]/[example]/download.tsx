import { GetStaticPaths, GetStaticProps } from 'next';

import { examples } from '@app/data';

const ComponentDownload = ({ content }: any) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default ComponentDownload;

export const getStaticProps: GetStaticProps = async (context) => {
  const { component, example, framework } = context.params || {};
  return {
    props: {}
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  return {
    paths,
    fallback: false
  };
};