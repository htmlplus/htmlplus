import React from 'react';

import { Button, Icon, Grid } from '@app/components';
import * as Constants from '@app/constants';

export const Socials = () => {
  return (
    <Grid alignItems="center" justifyContent="center" wrap="off">
      <Grid.Item>
        <Button icon text to={Constants.SOCIAL_TWITTER}>
          <Icon name="twitter" />
        </Button>
      </Grid.Item>
      <Grid.Item>
        <Button icon text to={Constants.SOCIAL_LINKEDIN}>
          <Icon name="linkedin" />
        </Button>
      </Grid.Item>
      <Grid.Item>
        <Button icon text to={Constants.SOCIAL_INSTAGRAM}>
          <Icon name="instagram" />
        </Button>
      </Grid.Item>
      <Grid.Item>
        <Button icon text to={Constants.SOCIAL_GITHUB}>
          <Icon name="github" />
        </Button>
      </Grid.Item>
    </Grid>
  );
};
