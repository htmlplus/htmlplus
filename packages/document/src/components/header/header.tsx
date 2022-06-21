import { Button, Card, Divider, Drawer, Grid, Icon } from '@app/components';
import * as Constants from '@app/constants';
import * as Utils from '@app/utils';

import { HeaderProps } from './header.types';

export const Header = ({ menu }: HeaderProps) => {
  const links = [
    {
      title: `What\'s ${Constants.PLATFORM_NAME}?`,
      url: Utils.getPath('INTRODUCTION_WHAT')
    },
    {
      title: `Why ${Constants.PLATFORM_NAME}?`,
      url: Utils.getPath('INTRODUCTION_WHY')
    },
    {
      title: 'UI Components',
      url: Utils.getPath('COMPONENT_DETAILS', {
        component: 'aspect-ratio'
      })
    }
  ];
  return (
    <header>
      <Card tile>
        <Grid alignItems="center" wrap="off" gutterX="md">
          {menu && (
            <Grid.Item xs="auto" hideLgUp>
              <Drawer.Toggler connector="main">
                <Icon name="menu" />
              </Drawer.Toggler>
            </Grid.Item>
          )}
          <Grid.Item>
            <Button block link to={Utils.getPath('HOME')}>
              <img height="40px" src={Utils.getAsset('logo/logo.svg')} />
            </Button>
          </Grid.Item>
          <Grid.Item xs="grow" />
          {links.map((link) => (
            <Grid.Item key={link.title} hideSmDown>
              <Button size="sm" link to={link.url}>
                {link.title}
              </Button>
            </Grid.Item>
          ))}
        </Grid>
      </Card>
      <Divider />
    </header>
  );
};
