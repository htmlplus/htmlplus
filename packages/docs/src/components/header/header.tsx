import React from 'react';
import { Button, Icon, PlusDrawerToggler, PlusGrid, PlusGridItem,Text } from '@app/components';
import * as Constants from '@app/constants';
import * as Utils from '@app/utils';
import { HeaderProps } from './header.types';

export const Header: React.FC<HeaderProps> = ({ menu }) => {

  const classes = Utils.classes(
    'header'
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

  return (
    <div className={classes}>
      <PlusGrid alignItems="center" wrap="off" gutterX="md">
        {menu && (
          <PlusGridItem xs="auto" hideLgUp>
            <PlusDrawerToggler connector="main">
              <Icon name="menu" />
            </PlusDrawerToggler>
          </PlusGridItem>
        )}
        <PlusGridItem>
          <Button link to="ROUTE:HOME">
            <img src="/assets/logo/logo.svg" width="135px" />
          </Button>
        </PlusGridItem>
        <PlusGridItem xs="grow" />
        {links.map((link) => (
          <PlusGridItem key={link.title} hideSmDown>
            <Button size="sm" link {...link.route}>
              <Text weight="bold">{link.title}</Text>
            </Button>
          </PlusGridItem>
        ))}
      </PlusGrid>
    </div>
  );
};
