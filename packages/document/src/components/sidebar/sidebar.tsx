import React, { useEffect, useMemo } from 'react';

import { useRouter } from 'next/router';

import { Button, Icon } from '@app/components';
import * as Constants from '@app/constants';
import { components } from '@app/data';
import { useSidebar, useStore } from '@app/hooks';
import * as Utils from '@app/utils';

import { SidebarItem, SidebarProps } from './sidebar.types';

export const Sidebar = ({}: SidebarProps) => {
  const router = useRouter();

  const sidebar = useSidebar();

  const store = useStore();

  const items = useMemo(
    () => [
      {
        title: 'Introduction',
        icon: 'introduction',
        items: [
          {
            title: `What's ${Constants.PLATFORM_NAME}?`,
            url: Utils.getPath('INTRODUCTION_WHAT')
          },
          {
            title: `Why ${Constants.PLATFORM_NAME}?`,
            url: Utils.getPath('INTRODUCTION_WHY')
          }
        ]
      },
      {
        title: 'Getting started',
        icon: 'getting-started',
        items: [
          {
            title: 'Installation',
            url: Utils.getPath('INSTALLATION')
          },
          {
            title: 'Browser support',
            url: Utils.getPath('BROWSERS')
          }
        ]
      },
      {
        title: 'UI Components',
        icon: 'components',
        items: components.map((component) => ({
          title: component.title,
          url: Utils.getPath('COMPONENT_DETAILS', { framework: store.framework, component: component.key })
        }))
      },
      {
        title: 'UI Components API',
        icon: 'components',
        items: components.map((component) => ({
          title: component.title,
          url: Utils.getPath('API_DETAILS', { framework: store.framework, component: component.key })
        }))
      },
      {
        title: 'About',
        icon: 'htmlplus',
        items: [
          {
            title: 'Code Of Conduct',
            url: Utils.getPath('CODEOFCONDUCT')
          }
        ]
      }
    ],
    [store.framework]
  );

  const actives: SidebarItem[] = useMemo(() => {
    const run = (...items: SidebarItem[]): SidebarItem[] => {
      for (const item of items) {
        if (router.asPath.startsWith(item.url!!)) return [item];
        if (!item.items) continue;
        const result = run(...item.items);
        if (!result.length) continue;
        return [item, ...result];
      }
      return [];
    };
    return run(...items);
  }, [items, router.asPath]);

  const key = (item: SidebarItem) => item.title;

  const isActive = (item: SidebarItem) => {
    return actives.some((active) => (item.url ? active.url == item.url : key(item) == key(active)));
  };

  const isCollapse = (item: SidebarItem) => {
    return !sidebar.expands.some((x) => key(x) == key(item));
  };

  const menu = (items: SidebarItem[], parents: SidebarItem[] = []) => {
    return (
      <ul className="nav">
        {items.map((item) => (
          <li
            key={key(item)}
            className={Utils.classes({
              active: isActive(item),
              collapse: isCollapse(item),
              navItem: true
            })}
          >
            <Button text to={item.url || '#'} onClick={(event: MouseEvent) => toggle(event, item)}>
              {/* {item.icon && (
                <>
                  <Icon name={item.icon as any} /> &nbsp;
                </>
              )} */}
              {key(item)}
              {!!item.items?.length && <span className="nav-link-toggle" />}
            </Button>
            {!!item.items?.length && menu(item.items, [item, ...parents])}
          </li>
        ))}
      </ul>
    );
  };

  const toggle = (event: MouseEvent, item: SidebarItem) => {
    if (!item || item.url) return;
    event.preventDefault();
    const exists = sidebar.expands.some((expand) => key(expand) == key(item));
    if (exists) sidebar.setExpands(sidebar.expands.filter((expand) => key(expand) != key(item)));
    else sidebar.setExpands([...sidebar.expands, item]);
  };

  useEffect(
    () =>
      sidebar.setExpands(
        actives
          .slice(0, -1)
          .concat(sidebar.expands)
          .filter((item, index, items) => items.findIndex((x) => key(x) == key(item)) == index)
      ),
    [actives]
  );

  return <div className="sidebar">{menu(items)}</div>;
};
