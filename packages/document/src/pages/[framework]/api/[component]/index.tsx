import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { Divider } from '@app/components';
import { Parameter, Toc } from '@app/containers';
import { components, frameworks } from '@app/data';
import { LayoutDefault } from '@app/layouts';
import * as Utils from '@app/utils';

const ComponentAPI = ({ component }: any) => {
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
    </LayoutDefault>
  );
};

export default ComponentAPI;

export const getStaticProps: GetStaticProps = async (context) => {
  const { component: componentKey, framework } = context.params || {};
  const component = components.find((component) => component.key == componentKey);
  return {
    props: {
      component,
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
