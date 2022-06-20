import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { Divider, Grid, Markup, Parameter } from '@app/components';
import { components, frameworks } from '@app/data';
import { LayoutDefault } from '@app/layouts';

const ComponentAPI = ({ component, framework }: any) => {
  console.log(component);
  const sections = [
    {
      title: 'Properties',
      api: 'property',
      items: component.properties
    },
    {
      title: 'Slots',
      api: 'slot',
      items: component.slots
    },
    {
      title: 'Events',
      api: 'event',
      items: component.events
    },
    {
      title: 'CSS Variables',
      api: 'style',
      items: component.styles
    },
    {
      title: 'CSS Parts',
      api: 'part',
      items: component.parts
    },
    {
      title: 'Methods',
      api: 'method',
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
          <React.Fragment key={section.title}>
            <h2>{section.title}</h2>
            {section.items.map((item: any, index: number) => (
              <React.Fragment key={item.name}>
                <Parameter api={item.api} {...item} />
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
    .map((framework) => components.map((component) => `/${framework.key}/api/${component.key}`))
    .flat();
  return {
    paths,
    fallback: false
  };
};
