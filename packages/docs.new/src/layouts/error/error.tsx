import React from 'react';
import { Grid } from '@app/components';
import * as Utils from '@app/utils';

export const LayoutError: React.FC = (props) => {

  const { children } = props;

  const classes = Utils.classes(
    'layout-error'
  );

  return (
    <Grid
      className={classes}
      alignItems="center"
      justifyContent="center"
    >
      <Grid.Item>
        {children}
      </Grid.Item>
    </Grid>
  )
};
