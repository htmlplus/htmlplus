import { Button, Grid, Icon } from '@app/components';

import { NavigationProps } from './navigation.types';

export const Navigation = ({ prev, next }: NavigationProps) => {
  return (
    <Grid justifyContent="between" alignItems="center">
      <Grid.Item xs="auto">
        {!!prev && (
          <Button link to={prev.url}>
            <Grid alignItems="center" gutterX="md" wrap="off">
              <Grid.Item>
                <Icon name="prev" />
              </Grid.Item>
              <Grid.Item>
                <b>Prev</b>
                <br />
                {prev.title}
              </Grid.Item>
            </Grid>
          </Button>
        )}
      </Grid.Item>
      <Grid.Item xs="auto">
        {!!next && (
          <Button link to={next.url}>
            <Grid alignItems="center" gutterX="md" wrap="off">
              <Grid.Item>
                <b>Next</b>
                <br />
                {next.title}
              </Grid.Item>
              <Grid.Item>
                <Icon name="next" />
              </Grid.Item>
            </Grid>
          </Button>
        )}
      </Grid.Item>
    </Grid>
  );
};
