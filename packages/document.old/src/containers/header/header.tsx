import { Fragment } from 'react';

import { Button, Card, Divider, Drawer, Grid, Icon } from '@app/components';
import { ROUTES, getPath } from '@app/utils';

import { HeaderProps } from './header.types';

export const Header = ({ menu }: HeaderProps) => {
  const links = [
    {
      title: `What\'s HTMLPLUS?`,
      url: getPath(ROUTES.INTRODUCTION_WHAT, {})
    },
    {
      title: `Why HTMLPLUS?`,
      url: getPath(ROUTES.INTRODUCTION_WHY, {})
    },
    {
      title: 'UI Components',
      url: getPath(ROUTES.COMPONENT_DETAILS, { component: 'aspect-ratio', framework: 'react' })
    }
  ];
  return (
    <header>
      <Card tile>
        <Grid alignItems="center" wrap="off">
          {menu && (
            <Grid.Item xs="auto" hideXlUp>
              <Drawer.Toggler connector="main">
                <Icon name="menu" size="lg" />
              </Drawer.Toggler>
            </Grid.Item>
          )}
          <Grid.Item>
            <Button block link to={getPath(ROUTES.HOME, {})}>
              <svg
                className="logo"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1000 1000"
                enableBackground="new 0 0 1000 1000"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M980.8,521.1L783.2,718.5c-12.2,12.2-32,12.2-44.2,0c-12.2-12.2-12.2-31.9,0-44.1L914.6,499L739,323.7c-12.2-12.2-12.2-31.9,0-44.1c12.2-12.2,32-12.2,44.2,0L980.8,477C993.1,489.2,993.1,508.9,980.8,521.1z M332.9,906.5c-9,15.7-28.9,21.1-44.5,12c-15.6-9-20.9-29.1-11.9-44.8L667.1,93.5c9-15.7,28.9-21.1,44.5-12c15.6,9.1,20.9,29.1,11.9,44.8L332.9,906.5z M261,718.5c-12.2,12.2-32,12.2-44.2,0L19.1,521.1C7,508.9,7,489.2,19.1,477l197.7-197.4c12.2-12.2,32-12.2,44.2,0c12.2,12.2,12.2,31.9,0,44.1L85.4,499L261,674.4C273.2,686.6,273.2,706.3,261,718.5z" />
                </g>
              </svg>
            </Button>
          </Grid.Item>
          <Grid.Item xs="grow" />
          <Grid.Item hideSmDown>
            {links.map((link) => (
              <Fragment key={link.title}>
                <Button size="sm" link to={link.url}>
                  {link.title}
                </Button>
                &nbsp; &nbsp;
              </Fragment>
            ))}
          </Grid.Item>
        </Grid>
      </Card>
      <Divider />
    </header>
  );
};
