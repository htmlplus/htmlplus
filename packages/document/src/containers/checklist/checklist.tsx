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
      <Grid gutterX="sm">
        <Grid.Item xs="12" md="6" className={className(accessibility)}>
          Accessibility
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(bidirectionality)}>
          Bidirectionality
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(cssParts)}>
          CSS Parts
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(cssVariables)}>
          CSS Variables
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(documentation)}>
          Documentation
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(examples)}>
          Examples
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(events)}>
          Events
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(keyboard)}>
          Keyboard interactions
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(methods)}>
          Methods
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(properties)}>
          Properties
        </Grid.Item>
        <Grid.Item xs="12" md="6" className={className(slots)}>
          Slots
        </Grid.Item>
      </Grid>
    </>
  );
};
