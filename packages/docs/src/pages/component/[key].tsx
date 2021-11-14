import React, { useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Select from 'react-select';
import { Box, Button, Example, Icon, Markup, Page, Parameters, PlusGrid, PlusGridItem, PlusIntersection, PlusTabs, PlusTabsBar, PlusTabsPanel, PlusTabsPanels, PlusTabsTab, PlusTransition, Text, TocItem } from '@app/components';
import * as Constants from '@app/constants';
import { components } from '@app/data';
import { useStore } from '@app/hooks';
import * as Utils from '@app/utils';
import '@htmlplus/react/dist/externals/transition/attention-seekers/pulse.css';

// TODO
import items from '@htmlplus/examples';

const ComponentDetails: React.FC<any> = observer((props) => {

  const { component } = props;

  const store = useStore();

  const [selected, setSelected] = useState(undefined);

  const parent = component;

  useEffect(() => setSelected(undefined), [parent]);

  const children: Array<any> = useMemo(() => {

    const result = [];

    result.push(parent);

    components
      .filter((component) => !component.main && component.group === parent?.group)
      .map((component) => result.push(component));

    return result;
  }, [parent]);

  const current: any = useMemo(() => {
    return components.find((item) => item.key === (selected || parent?.key));
  }, [parent, selected]);

  const options = useMemo(() => {
    return (children || []).map((child) => {
      return {
        value: child.key,
        label: Utils.getComponentName(store.ui.framework, child.tag),
      };
    });
  }, [children, store.ui.framework]);

  const tabs = useMemo(() => {

    const { properties, slots, events, styles, methods } = current;

    return [
      {
        key: 'properties',
        value: 'Properties',
        items: properties.map((property) => ({
          ...property,
          name: Utils.getPropertyName(store.ui.framework, property.name),
        })),
      },
      {
        key: 'slots',
        value: 'Slots',
        items: slots,
      },
      {
        key: 'events',
        value: 'Events',
        items: events.map((event: any) => ({
          ...event,
          value: event.detail,
          name: Utils.getEventName(store.ui.framework, event.name),
        })),
      },
      {
        key: 'styles',
        value: 'Styles',
        items: styles,
      },
      {
        key: 'methods',
        value: 'Methods',
        items: methods.map((method: any) => ({
          ...method,
          value: method.signature,
        })),
      },
    ];
  }, [current, store.ui.framework]);

  // TODO
  const examples = useMemo(() => {

    const examples = [];

    const current = items.find((example) => example.key === parent.key);

    parent.examples.map((example) => {

      example = JSON.parse(JSON.stringify(example));

      const item = current.examples.find((x) => x.key === example.key);

      const preview = item.ports.preview.script;

      const port = item.ports[store.ui.framework];

      const style = example.codes.find((code) => code.key === 'style')?.value || '';

      example.codes
        .filter((code) => code.key.startsWith(`${store.ui.framework}:`))
        .map((code) => {
          const key = code.key.split(':').pop();
          port[key] = code.value;
        });

      example.code = { preview, ...port, style };

      examples.push(example);
    });

    return examples;
  }, [store.ui.framework, parent.key]);

  const isDisabled = (key: string) => !current[key].length;

  const isActive = (key: string) => tabs.find((tab) => !isDisabled(tab.key))?.key === key;

  const hasApi = !!tabs.filter((tab) => isActive(tab.key)).length;

  const hasExamples = !!examples.length;

  const hasReadme = !!parent.readme;

  if (!current) return null;

  return (
    <Page layout="default">

      <PlusGrid alignItems="center">
        <PlusGridItem xs="grow">
          <Text size="1" dense>{parent.title}</Text>
        </PlusGridItem>
        <PlusGridItem xs="auto">
          <PlusGrid gutterX="sm">
            <PlusGridItem>
              <Button
                size="sm"
                target="_blank"
                to={`${Constants.SOCIAL_GITHUB_COMPONENTS}/${parent.key}`}
              >
                <Icon name="github" />
                  Github
                </Button>
            </PlusGridItem>
            {/* <PlusGridItem>
                <Button
                  outlined
                  size="sm"
                  target="_blank"
                  to={Constants.SOCIAL_GITHUB}
                >
                  <Icon name="sandbox" />
                  Try It on Sandbox
                </Button>
              </PlusGridItem> */}
          </PlusGrid>
        </PlusGridItem>
      </PlusGrid>

      <Box py={4} />

      <Box textAlign="justify">
        <Markup>{parent.description}</Markup>
      </Box>

      <Box py={4} />

      {hasReadme && (
        <>
          <Markup>{parent.readme}</Markup>
          <Box py={4} />
        </>
      )}

      <Text size="2">
        <TocItem>Usage</TocItem>
      </Text>
      <Text size="body">
        Follow the tutorials&nbsp;
        <Button color="secondary" link="underline" to="ROUTE:GETTINGSTARTED:INSTALLATION">
          here
        </Button>
        &nbsp; to use the <code>{Constants.PLATFORM_NAME}</code> library
        on&nbsp;
        <code>{Utils.toCapitalCase(store.ui.framework)}-based</code>
        &nbsp; projects.
      </Text>

      <Box py={4} />

      {hasApi && (
        <>
          <PlusGrid align-items="center" justifyContent="between">
            <PlusGridItem>
              <Text dense size="2">
                <TocItem>API</TocItem>
              </Text>
            </PlusGridItem>
            <PlusGridItem>
              <Box width="220px">
                <PlusIntersection behavior="blink">
                  <PlusTransition name="pulse" repeat={3}>
                    <Select
                      isDisabled={children.length < 2}
                      options={options}
                      value={options.find((option) => option.value === selected) || options[0]}
                      onChange={(child) => setSelected(child.value)}
                    />
                  </PlusTransition>
                </PlusIntersection>
              </Box>
            </PlusGridItem>
          </PlusGrid>
          <Text size="paragraph">
            Select your desired component from below and see the available
            properties, slots, events, styles and methods.
          </Text>
          <PlusTabs value="properties">
            <PlusTabsBar grow>
              {tabs.map((tab) => (
                <PlusTabsTab
                  key={tab.key}
                  disabled={isDisabled(tab.key)}
                  value={tab.key}
                >
                  <Text>{tab.value}</Text>
                </PlusTabsTab>
              ))}
            </PlusTabsBar>
            <PlusTabsPanels>
              {tabs.map((tab) => (
                <PlusTabsPanel key={tab.key} value={tab.key}>
                  <Parameters items={tab.items} />
                </PlusTabsPanel>
              ))}
            </PlusTabsPanels>
          </PlusTabs>
          <Box py={4} />
        </>
      )}

      {hasExamples && (
        <>
          <Text size="2">
            <TocItem>Examples</TocItem>
          </Text>
          <Text size="body">
            Below is a collection of simple to complex examples.
          </Text>
          <Box py={4} />
        </>
      )}

      {examples.map((example: any) => (
        <React.Fragment key={example.key}>
          <Text size="3">
            <TocItem>{example.title}</TocItem>
          </Text>
          <Text size="paragraph">
            <Markup>{example.readme}</Markup>
          </Text>
          <Example value={example} parent={parent} />
          <Box py={4} />
        </React.Fragment>
      ))}

      {/* TODO */}
      {/* <Text size="2">
        <TocItem>Global Config</TocItem>
      </Text>
      <Text size="body">
        Goto <Button link to={''}> Global Config </Button> to more information
      </Text>
      <Box py={4} /> */}

      {/* TODO */}
      {/*
      <PlusGrid justifyContent="between">
        <PlusGridItem>
          <Text size="label">
            Last update: {new Date(parent.lastModified).toDateString()}
          </Text>
        </PlusGridItem>
        <PlusGridItem>
          <Text size="label">
            Component Size: {((parent.size / 1024) || 1).toFixed(2)} KB
              </Text>
        </PlusGridItem>
      </PlusGrid> */}

      {/* TODO */}
      {/* When To Use
      A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, tasks can be achieved more efficiently within the same context.
      Use a Form to create or edit a set of information.
      Processing subtasks. When subtasks are too heavy for a Popover and we still want to keep the subtasks in the context of the main task, Drawer comes very handy.
      When the same Form is needed in multiple places. */}
    </Page>
  );
});

export default ComponentDetails;

export const getStaticProps = async ({ params }) => {

  const { key } = params;

  const component = components.find((item) => item.key === key);

  return {
    props: {
      component,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: components.map((component) => `/component/${component.key}`),
    fallback: false,
  };
};
