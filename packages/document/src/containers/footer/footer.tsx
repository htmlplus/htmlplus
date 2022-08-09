import { Grid } from '@app/components';
import * as CONSTANTS from '@app/constants';
import { Socials } from '@app/containers';

export const Footer = () => {
  return (
    <footer>
      <Grid alignItems="center" vertical>
        <Grid.Item>
          <Socials />
        </Grid.Item>
        <Grid.Item>
          <span>&copy; 2022 {CONSTANTS.PLATFORM_NAME}. Released under MIT License.</span>
        </Grid.Item>
      </Grid>
    </footer>
  );
};
