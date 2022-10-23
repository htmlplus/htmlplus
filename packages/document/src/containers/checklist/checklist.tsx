import { Grid } from '@app/components';
import { Toc } from '@app/containers';

import { ChecklistProps } from './checklist.types';

export const Checklist = ({
  accessibility,
  bidirectionality,
  cssParts,
  cssVariables,
  documentation,
  examples,
  events,
  keyboard,
  methods,
  properties,
  slots
}: ChecklistProps) => {
  console.log(
    accessibility,
    bidirectionality,
    cssParts,
    cssVariables,
    documentation,
    examples,
    events,
    keyboard,
    methods,
    properties,
    slots
  );
  const className = (property: any) => (property == 'N/A' ? `line-through` : property ? '' : 'muted');
  return (
    <>
      <h2>
        <Toc.Item level={2}>Checklist</Toc.Item>
      </h2>
      <p>List of done</p>
      <Grid gutterX="sm">
        <Grid.Item xs="12" md="6" className={className(accessibility)}>
          <small>Accessibility</small>
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(bidirectionality)}>
          <small>Bidirectionality</small>
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(cssParts)}>
          <small>CSS Parts</small>
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(cssVariables)}>
          <small>CSS Variables</small>
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(documentation)}>
          <small>Documentation</small>
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(examples)}>
          <small>Examples</small>
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(events)}>
          <small>Events</small>
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(keyboard)}>
          <small>Keyboard interactions</small>
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(methods)}>
          <small>Methods</small>
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(properties)}>
          <small>Properties</small>
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(slots)}>
          <small>Slots</small>
        </Grid.Item>
      </Grid>
    </>
  );
};
