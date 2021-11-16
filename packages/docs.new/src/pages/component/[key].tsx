import axios from 'axios';
import React from 'react';
import { Contributors, Markup } from '@app/components';
import { components } from '@app/data';
import { LayoutDefault } from '@app/layouts';

const ComponentDetails: React.FC<any> = (props) => {

  const { component, contributors } = props;

  let readme = component.readme;

  if (component.experimental) {

    const experimental = '<Text color="secondary" size="caption" dense inline>Experimental</Text>';

    readme = component.readme.replace(/^#(.*)/, `# $1 ${experimental}`);
  }

  return (
    <LayoutDefault>
      <Markup>{readme}</Markup>
      <Contributors contributors={contributors} />
      {/* TODO */}
      {/* Anatomy */}
      {/* When To Use */}
      {/* Global Config */}
      {/* Last update: {new Date(parent.lastModified).toDateString()} */}
      {/* Component Size: {((parent.size / 1024) || 1).toFixed(2)} KB */}
      {/* <Button
        size="sm"
        target="_blank"
        to={`${Constants.SOCIAL_GITHUB_COMPONENTS}/${parent.key}`}
      >
        <Icon name="github" />
          Github
      </Button> */}
      {/* <Button
        outlined
        size="sm"
        target="_blank"
        to={Constants.SOCIAL_GITHUB}
      >
        <Icon name="sandbox" />
          Try It on Sandbox
      </Button> */}
    </LayoutDefault>
  )
}

export default ComponentDetails;

export const getStaticProps = async ({ params }) => {

  const { key } = params;

  const component = components.find((item) => item.key === key);

  let contributors = [];

  try {

    const path = `https://api.github.com/repos/htmlplus/core/commits?path=packages/core/src/components/${key}`;

    contributors = (await axios.get(path))
      .data
      .map((commit) => commit.author?.login)
      .filter((commit, index, commits) => commit && commits.indexOf(commit) === index);
  }
  catch { }

  return {
    props: {
      component,
      contributors,
    }
  }
}

export const getStaticPaths = async () => {
  return {
    paths: components.map((component) => `/component/${component.key}`),
    fallback: false,
  }
}
