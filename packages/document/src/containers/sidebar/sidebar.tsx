import React, { useEffect, useMemo } from 'react';
import create from 'zustand'

import { Button, Icon } from '@app/components';
import * as Constants from '@app/constants';
import { components } from '@app/data';
import { useRouter } from '@app/hooks';
import * as Utils from '@app/utils';

import { SidebarItem, SidebarProps } from './sidebar.types';

// TODO
const useSidebar = create<any>((set: any) => ({
  current: [],
  setCurrent: (current: any) => set({ current }),
}))

export const Sidebar = ({ }: SidebarProps) => {
  const router = useRouter();

  const { framework = 'react' } = router.query;

  const { current, setCurrent } = useSidebar();

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
          url: router.get('API_DETAILS', { framework, component: component.key })
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

  const actives: SidebarItem[] = useMemo(() => {
    const run = (...items: SidebarItem[]): SidebarItem[] => {
      for (const item of items) {
        if (router.asPath == item.url) return [item];
        if (!item.items) continue;
        const result = run(...item.items);
        if (!result.length) continue;
        return [item, ...result];
      }
      return [];
    };
    return run(...items);
  }, [items, router.asPath]);

  const isActive = (item: SidebarItem) => actives.some((active) => active == item);

  const isCollapse = (item: SidebarItem) => !current.some((x) => x.title == item.title);

  const menu = (items: SidebarItem[], parents: SidebarItem[] = []) => {
    return (
      <ul className="nav">
        {items.map((item) => (
          <li
            key={item.title}
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
              {item.title}
              {!!item.items?.length && <span className="nav-link-toggle"></span>}
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
    const exists = current.some((x) => x == item);
    if (exists) setCurrent(current.filter((x) => x != item));
    else setCurrent([...current, item]);
  };

  useEffect(() => setCurrent([...current, ...actives.slice(0, -1)]), [actives]);

  return <div className="sidebar">{menu(items)}</div>;
};
