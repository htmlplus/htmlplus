import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { paramCase, pascalCase } from 'change-case';

import { Alert, Divider } from '@app/components';
import { Parameter, Toc } from '@app/containers';
import { components, frameworks } from '@app/data';
import { LayoutDefault } from '@app/layouts';
import { ROUTES, getPath } from '@app/utils';

const ComponentAPI = ({ component, sections }: any) => {
  return (
    <LayoutDefault>
      <h1>{component.title}</h1>
      <p>See below to learn more about properties, slots, events, style variables, CSS parts, and methods.</p>
      <Alert type="info">
        There is no difference between the APIs of the components, And the only difference is in the names of the events
      </Alert>
      {sections.map((section: any) => (
        <React.Fragment key={section.key}>
          <h2>
            <Toc.Item level={2}>{section.title}</Toc.Item>
          </h2>
          {!section.items?.length && <p>There are no {section.title}.</p>}
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
  const { component: componentKey, framework } = context.params!;

  const component = components.find((component) => component.key == componentKey);

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
      items: component.events.map((event: any) => ({
        ...event,
        // TODO
        name: framework == 'react' ? pascalCase(event.name) : paramCase(event.name)
      }))
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

  return {
    props: {
      component,
      sections
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = frameworks
    .map((framework) =>
      components.map(
        (component) =>
          getPath(ROUTES.API_DETAILS, {
            component: component.key,
            framework: framework.key
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
