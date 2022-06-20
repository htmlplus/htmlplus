import { Grid, Markup } from '@app/components';

import { ParameterProps } from './parameter.types';

export const Parameter = ({ api, description, initializer, isExperimental, name, type }: any) => {
  return (
    <>
      <Grid gutterX="md">
        <Grid.Item xs="grow">
          <div>Name</div>
          <span>{name}</span>
          {isExperimental && <span> (Experimental)</span>}
        </Grid.Item>
        <Grid.Item xs="12" sm="6" lg="grow">
          <div>Type</div>
          <div>{type}</div>
        </Grid.Item>
        <Grid.Item xs="12" lg="auto">
          <div>Default</div>
          <div>{initializer || 'undefined'}</div>
        </Grid.Item>
        <Grid.Item xs="12">
          <div>Description</div>
          <Markup value={description} />
        </Grid.Item>
      </Grid>
    </>
  );
};
