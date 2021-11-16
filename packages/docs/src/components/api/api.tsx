import React, { useMemo, useState } from 'react';
import Select from 'react-select';
import {
  Box,
  Grid,
  Intersection,
  Parameters,
  Tabs,
  Text,
  TocItem,
  Transition,
} from '@app/components';
import { components } from '@app/data';
import { useRouter, useStore } from '@app/hooks';
import * as Utils from '@app/utils';
import { observer } from 'mobx-react-lite';
import '@htmlplus/react/dist/externals/transition/attention-seekers/pulse.css';

export const Api: React.FC = observer(() => {

  const router = useRouter();

  const component = components.find((item) => item.key === router.query.key /* TODO */);

  if (!component) return;

  const store = useStore();

  const parent = component;

  const [selected, setSelected] = useState(undefined);

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

    const { properties, slots, events, styles, parts, methods } = current;

    return [
      {
        key: 'properties',
        value: 'Properties',
        items: properties.map((property) => {

          const values = [];

          for (const value of property.values) {

            if (!value.description) continue;

            if (value.type !== 'boolean') {

              values.push(value);

              continue;
            }

            values.push(
              {
                value: false,
                type: 'boolean',
                description: value.description.false
              },
              {
                value: true,
                type: 'boolean',
                description: value.description.true
              }
            )
          }

          return {
            ...property,
            name: Utils.getPropertyName(store.ui.framework, property.name), // TODO
            values
          }
        }),
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
        value: 'CSS Variables',
        items: styles,
      },
      {
        key: 'parts',
        value: 'CSS Parts',
        items: parts,
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

  const isDisabled = (key: string) => !current[key].length;

  return (
    <>
      <Grid align-items="center" justifyContent="between">
        <Grid.Item>
          <Text size="2">
            <TocItem>API</TocItem>
          </Text>
        </Grid.Item>
        <Grid.Item>
          <Box width="220px">
            <Intersection behavior="blink">
              <Transition name="pulse" repeat={3}>
                <Select
                  isDisabled={children.length < 2}
                  options={options}
                  value={options.find((option) => option.value === selected) || options[0]}
                  onChange={(child) => setSelected(child.value)}
                />
              </Transition>
            </Intersection>
          </Box>
        </Grid.Item>
      </Grid>
      <Text size="paragraph">
        Select your desired component from below and see the available
        properties, slots, events, styles and methods.
      </Text>
      <Tabs value="properties">
        <Tabs.Bar grow>
          {tabs.map((tab) => (
            <Tabs.Tab
              key={tab.key}
              disabled={isDisabled(tab.key)}
              value={tab.key}
            >
              <Text>{tab.value}</Text>
            </Tabs.Tab>
          ))}
        </Tabs.Bar>
        <Tabs.Panels>
          {tabs.map((tab) => (
            <Tabs.Panel key={tab.key} value={tab.key}>
              <Parameters items={tab.items} />
            </Tabs.Panel>
          ))}
        </Tabs.Panels>
      </Tabs>
    </>
  )
})
