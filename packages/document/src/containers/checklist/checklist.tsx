import { capitalCase } from 'change-case';

import { Grid } from '@app/components';
import { Toc } from '@app/containers';

import { ChecklistProps } from './checklist.types';

export const Checklist = (properties: ChecklistProps) => {
  const className = (property: any) => (property == 'N/A' ? `line-through` : property ? '' : 'muted');
  return (
    <>
      <h2>
        <Toc.Item level={2}>Checklist</Toc.Item>
      </h2>
      <p>List of done</p>
      <Grid gutterX="sm">
        {Object.keys(properties).map((property) => (
          <Grid.Item key={property} xs="12" md="6" className={className(properties[property as keyof ChecklistProps])}>
            <small>{capitalCase(property)}</small>
          </Grid.Item>
        ))}
      </Grid>
    </>
  );
};
