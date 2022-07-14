import { Button, Icon, Grid } from '@app/components';
import { socials } from '@app/data';

export const Socials = () => {
  return (
    <Grid alignItems="center" justifyContent="center" wrap="off">
      {socials.map((social) => (
        <Grid.Item key={social.key}>
          <Button icon text to={social.url}>
            <Icon name={social.icon} />
          </Button>
        </Grid.Item>
      ))}
    </Grid>
  );
};
