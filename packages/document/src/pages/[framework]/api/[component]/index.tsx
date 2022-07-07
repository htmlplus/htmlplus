import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import axios from 'axios';

import { Contributors, Divider, Parameter, Toc } from '@app/components';
import { components, frameworks } from '@app/data';
import { LayoutDefault } from '@app/layouts';
import * as Utils from '@app/utils';

const ComponentAPI = ({ component, contributors }: any) => {
  const sections = [
    {
      key: 'property',
      title: 'Properties',
      items: component.properties
    },
    {
      key: 'slot',
      title: 'Slots',
      items: component.slots
    },
    {
      key: 'event',
      title: 'Events',
      items: component.events
    },
    {
      key: 'style',
      title: 'CSS Variables',
      items: component.styles
    },
    {
      key: 'part',
      title: 'CSS Parts',
      items: component.parts
    },
    {
      key: 'method',
      title: 'Methods',
      items: component.methods
    }
  ];
  return (
    <LayoutDefault>
      <h1>{component.title}</h1>
      <p>See below to learn more about properties, slots, events, style variables, CSS parts, and methods.</p>
      {sections
        .filter((section) => section.items?.length)
        .map((section) => (
          <React.Fragment key={section.key}>
            <h2>
              <Toc.Item level={1}>{section.title}</Toc.Item>
            </h2>
            {section.items.map((item: any, index: number) => (
              <React.Fragment key={item.name}>
                <Parameter component={component} kind={section.key} {...item} />
                {section.items.length - 1 > index && <Divider />}
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      <Contributors contributors={contributors} />
    </LayoutDefault>
  );
};

export default ComponentAPI;

export const getStaticProps: GetStaticProps = async (context) => {
  const { component: componentKey, framework } = context.params || {};
  const component = components.find((component) => component.key == componentKey);
  const contributors: string[] = await (async () => {
    try {
      const url = `https://api.github.com/repos/htmlplus/core/commits?path=packages/core/src/components/${componentKey}`;
      const response = await axios.get(url);
      return response.data
        .map((commit: any) => commit.author?.login)
        .filter(
          (contributor: string, index: number, contributors: string[]) =>
            contributor && contributors.indexOf(contributor) === index
        ) || null;
    } catch {
      return null;
    }
  })();
  return {
    props: {
      component,
      contributors,
      framework
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = frameworks
    .filter((framework) => !framework.disabled)
    .map((framework) =>
      components.map(
        (component) =>
          Utils.getPath('API_DETAILS', {
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
