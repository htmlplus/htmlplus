import React from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { Divider, Grid, Markup } from '@app/components';
import { components, frameworks } from '@app/data';
import { LayoutDefault } from '@app/layouts';

const ComponentAPI = ({ component, framework }: any) => {
  const events: any[] = component.events;
  const methods: any[] = component.methods;
  const parts: any[] = component.parts;
  const properties: any[] = component.properties;
  const slots: any[] = component.slots;
  const styles: any[] = component.styles;
  console.log(component);
  return (
    <LayoutDefault>
      <h1>{component.title}</h1>
      <p>See below to learn more about properties, slots, events, style variables, CSS parts, and methods.</p>

      {!!properties.length && (
        <>
          <h2>Properties</h2>
          {properties.map((property, index) => (
            <React.Fragment key={property.name}>
              <Grid gutterX="md">
                <Grid.Item xs="grow">
                  <div>Name</div>
                  <span>{property.name}</span>
                  {property.isExperimental && <span> (Experimental)</span>}
                </Grid.Item>
                <Grid.Item xs="12" sm="6" lg="grow">
                  <div>Type</div>
                  <div>{property.type}</div>
                </Grid.Item>
                <Grid.Item xs="12" lg="auto">
                  <div>Default</div>
                  <div>{property.initializer || 'undefined'}</div>
                </Grid.Item>
                <Grid.Item xs="12">
                  <div>Description</div>
                  <Markup value={property.description} />
                  {/* TODO */}
                  {/* {(property.values || [])
                .filter((value) => !!value.description)
                .map((value) => (
                  <React.Fragment key={value.value}>
                    <br />
                    -&nbsp;
                    <Markup ignoreParagraph>{`\`${value.value}\` ${value.description}`}</Markup>
                  </React.Fragment>
                ))}
              {(property.parameters || [])
                .filter((parameter) => !!parameter.description)
                .map((parameter) => (
                  <React.Fragment key={parameter.name}>
                    <br />
                    -&nbsp;
                    <Markup ignoreParagraph>{`\`${parameter.name}\` ${parameter.description}`}</Markup>
                  </React.Fragment>
                ))} */}
                </Grid.Item>
              </Grid>
              {events.length > index + 1 && <Divider />}
            </React.Fragment>
          ))}
        </>
      )}

      {!!slots.length && (
        <>
          <h2>Slots</h2>
          {slots.map((slot, index) => (
            <React.Fragment key={slot.name}>
              <Grid gutterX="md">
                <Grid.Item xs="12">
                  <div>Name</div>
                  <span>{slot.name}</span>
                  {slot.isExperimental && <span> (Experimental)</span>}
                </Grid.Item>
                <Grid.Item xs="12">
                  <div>Description</div>
                  <Markup value={slot.description} />
                </Grid.Item>
              </Grid>
              {slots.length > index + 1 && <Divider />}
            </React.Fragment>
          ))}
        </>
      )}

      {!!events.length && (
        <>
          <h2>Events</h2>
          {events.map((event, index) => (
            <React.Fragment key={event.name}>
              <Grid gutterX="md">
                <Grid.Item xs="grow">
                  <div>Name</div>
                  <span>{event.name}</span>
                  {event.isExperimental && <span> (Experimental)</span>}
                </Grid.Item>
                <Grid.Item xs="12" sm="6" lg="grow">
                  <div>Type</div>
                  <div>{event.detail}</div>
                </Grid.Item>
                <Grid.Item xs="12" lg="auto">
                  <div>Cancelable</div>
                  <div>{`${event.isCancelable}`}</div>
                </Grid.Item>
                <Grid.Item xs="12">
                  <div>Description</div>
                  <Markup value={event.description} />
                </Grid.Item>
              </Grid>
              {events.length > index + 1 && <Divider />}
            </React.Fragment>
          ))}
        </>
      )}

      {!!styles.length && (
        <>
          <h2>CSS Variables</h2>
          {styles.map((style, index) => (
            <React.Fragment key={style.name}>
              <Grid gutterX="md">
                <Grid.Item xs="grow">
                  <div>Name</div>
                  <span>{style.name}</span>
                  {style.isExperimental && <span> (Experimental)</span>}
                </Grid.Item>
                <Grid.Item xs="12" lg="auto">
                  <div>Default</div>
                  <div>{style.initializer || 'undefined'}</div>
                </Grid.Item>
                <Grid.Item xs="12">
                  <div>Description</div>
                  <Markup value={style.description} />
                </Grid.Item>
              </Grid>
              {events.length > index + 1 && <Divider />}
            </React.Fragment>
          ))}
        </>
      )}

      {!!parts.length && (
        <>
          <h2>CSS Parts</h2>
          {parts.map((part, index) => (
            <React.Fragment key={part.name}>
              <Grid gutterX="md">
                <Grid.Item xs="grow">
                  <div>Name</div>
                  <span>{part.name}</span>
                  {part.isExperimental && <span> (Experimental)</span>}
                </Grid.Item>
                <Grid.Item xs="12">
                  <div>Description</div>
                  <Markup value={part.description} />
                </Grid.Item>
              </Grid>
              {events.length > index + 1 && <Divider />}
            </React.Fragment>
          ))}
        </>
      )}

      {!!methods.length && (
        <>
          <h2>Methods</h2>
          {methods.map((method, index) => (
            <React.Fragment key={method.name}>
              <Grid gutterX="md">
                <Grid.Item xs="grow">
                  <div>Name</div>
                  <span>{method.name}</span>
                  {method.isExperimental && <span> (Experimental)</span>}
                </Grid.Item>
                <Grid.Item xs="12" sm="6" lg="grow">
                  <div>Type</div>
                  <div>{method.type}</div>
                </Grid.Item>
                <Grid.Item xs="12" lg="auto">
                  <div>Default</div>
                  <div>{method.initializer || 'undefined'}</div>
                </Grid.Item>
                <Grid.Item xs="12">
                  <div>Description</div>
                  <Markup value={method.description} />
                </Grid.Item>
              </Grid>
              {events.length > index + 1 && <Divider />}
            </React.Fragment>
          ))}
        </>
      )}
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
