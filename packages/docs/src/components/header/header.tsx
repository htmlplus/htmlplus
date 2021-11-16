import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Drawer,
  Grid,
  Icon,
} from '@app/components';
import * as Constants from '@app/constants';
import * as Utils from '@app/utils';

import { HeaderProps } from './header.types';

export const Header: React.FC<HeaderProps> = ({ menu }) => {

  const [shrink, setShrink] = useState(false);

  const classes = Utils.classes(
    'header',
    { shrink },
  );

  const links = [
    {
      title: `What\'s ${Constants.PLATFORM_NAME}?`,
      route: {
        to: 'ROUTE:INTRODUCTION:WHAT',
      },
    },
    {
      title: `Why ${Constants.PLATFORM_NAME}?`,
      route: {
        to: 'ROUTE:INTRODUCTION:WHY',
      },
    },
    {
      title: 'UI Components',
      route: {
        to: 'ROUTE:COMPONENT:DETAILS',
        params: { key: 'aspect-ratio' }
      },
    },
  ];

  useEffect(() => {

    const onScroll = () => {

      setShrink((isShrink) => {

        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        if (!isShrink && (scrollTop > 30 || scrollTop > 30)) return true;

        if (isShrink && scrollTop < 10 && scrollTop < 10) return false;

        return isShrink;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={classes}>
      <Card className="container" tile>
        <Grid alignItems="center" wrap="off" gutterX="md">
          {menu && (
            <Grid.Item xs="auto" hideLgUp>
              <Drawer.Toggler connector="main">
                <Icon name="menu" />
              </Drawer.Toggler>
            </Grid.Item>
          )}
          <Grid.Item>
            <Button block link to="ROUTE:HOME">
              <img className="logo" src="/assets/logo/logo.svg" />
            </Button>
          </Grid.Item>
          <Grid.Item xs="grow" />
          {links.map((link) => (
            <Grid.Item key={link.title} hideSmDown>
              <Button size="sm" link {...link.route}>
                {link.title}
              </Button>
            </Grid.Item>
          ))}
        </Grid>
      </Card>
    </div>
  )
}
