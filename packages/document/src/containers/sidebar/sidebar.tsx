import React, { useMemo, useState } from 'react';

import { Button, Icon } from '@app/components';
import * as Constants from '@app/constants';
import { components } from '@app/data';
import { useRouter } from '@app/hooks';
import * as Utils from '@app/utils';

import { SidebarItem, SidebarProps } from './sidebar.types';

export const Sidebar = ({}: SidebarProps) => {
  const framework = 'react';

  const router = useRouter();

  const [current, setCurrent] = useState<any[]>([]);

  const items = useMemo(
    () => [
      {
        title: 'Introduction',
        icon: 'introduction',
        items: [
          {
            title: `What's ${Constants.PLATFORM_NAME}?`,
            url: router.get('INTRODUCTION_WHAT')
          },
          {
            title: `Why ${Constants.PLATFORM_NAME}?`,
            url: router.get('INTRODUCTION_WHY')
          }
        ]
      },
      {
        title: 'Getting started',
        icon: 'getting-started',
        items: [
          {
            title: 'Installation',
            url: router.get('INSTALLATION')
          },
          {
            title: 'Browser support',
            url: router.get('BROWSERS')
          }
        ]
      },
      {
        title: 'UI Components',
        icon: 'components',
        items: components.map((component) => ({
          title: component.title,
          url: router.get('COMPONENT_DETAILS', { framework, component: component.key })
        }))
      },
      {
        title: 'UI Components API',
        icon: 'components',
        items: components.map((component) => ({
          title: component.title,
          url: router.get('COMPONENT_API', { framework, component: component.key })
        }))
      },
      {
        title: 'About',
        icon: 'htmlplus',
        items: [
          {
            title: 'Code Of Conduct',
            url: router.get('CODEOFCONDUCT')
          }
        ]
      }
    ],
    []
  );

  const isActive = (item: any) => {};

  const isCollapse = (item: any) => !current.some((x) => x == item);

  const toggle = (event: MouseEvent, item: any) => {
    if (!item || item.url) return;
    event.preventDefault();
    const exists = current.some((x) => x == item);
    if (exists) setCurrent(current.filter((x) => x != item));
    else setCurrent([...current, item]);
  };

  const menu = (items: SidebarItem[], ...parents: any[]) => {
    return (
      <ul
        className={Utils.classes({
          nav: true,
          collapse: isCollapse(parents?.[0])
        })}
      >
        {items.map((item) => (
          <li
            key={item.title}
            className={Utils.classes({
              navItem: true,
              active: isActive(item)
            })}
          >
            <Button text to={item.url || '#'} onClick={(event: MouseEvent) => toggle(event, item)}>
              {/* {item.icon && (
                <>
                  <Icon name={item.icon as any} /> &nbsp;
                </>
              )} */}
              {item.title}
              {!!item.items?.length && <span className="nav-link-toggle"></span>}
            </Button>
            {!!item.items?.length && menu(item.items, item, ...parents)}
          </li>
        ))}
      </ul>
    );
  };

  return <div className="sidebar">{menu(items)}</div>;
};
