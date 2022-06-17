import { Button, Card, Drawer, Grid, Icon } from '@app/components';
import * as Constants from '@app/constants';
import { useRouter } from '@app/hooks';
import * as Utils from '@app/utils';

import { HeaderProps } from './header.types';

export const Header = ({ menu }: HeaderProps) => {
  const router = useRouter();
  const links = [
    {
      title: `What\'s ${Constants.PLATFORM_NAME}?`,
      url: router.get('INTRODUCTION_WHAT')
    },
    {
      title: `Why ${Constants.PLATFORM_NAME}?`,
      url: router.get('INTRODUCTION_WHY')
    },
    {
      title: 'UI Components',
      url: router.get('COMPONENT_DETAILS', {
        component: 'aspect-ratio'
      })
    }
  ];
  return (
    <header>
      <Card elevation="5" tile>
        <Grid alignItems="center" wrap="off" gutterX="md">
          {menu && (
            <Grid.Item xs="auto" hideLgUp>
              <Drawer.Toggler connector="main">
                <Icon name="menu" />
              </Drawer.Toggler>
            </Grid.Item>
          )}
          <Grid.Item>
            <Button block link to={router.get('HOME')}>
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
    </header>
  );
};
