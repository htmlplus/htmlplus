import React, { useMemo, useState } from 'react';
import { Button, Icon, Text } from '@app/components';
import { useRouter } from '@app/hooks';
import * as Utils from '@app/utils';
import { SidebarItem, SidebarProps } from './sidebar.types';

export const Sidebar: React.FC<SidebarProps> = (props) => {

  const { items = [] } = props;

  const router = useRouter();

  const [current, setCurrent] = useState([]);

  const actives = useMemo(
    () => {

      const run = (input, ...parent) => {

        if (Array.isArray(input)) {

          let result = [];

          input.map((item) => {

            const items = run(item, ...parent);

            if (items.length) result = items;
          });

          return result;
        }
        else if (input.items) {

          return run(input.items, input, ...parent);
        }
        else {

          const route = input.route;

          if (!route) return [];

          if (router.isActive(route.to, route.params)) return [input, ...parent];

          return [];
        }
      }

      const result = run(items, null).filter((item) => item);

      setCurrent(result);

      return result;
    },
    [items, router.asPath]
  );

  const isActive = (item) => actives.some((active) => item === active);

  const isExpand = (parent) => {

    if (!parent) return true;

    return current.some((item) => item === parent);
  }

  const toggle = (item, ...parents) => {

    const indexOf = current.findIndex((x) => x === item);

    if (indexOf !== -1) {

      setCurrent([...current.slice(indexOf + 1)]);
    }
    else {

      setCurrent([item, ...parents]);
    }
  }

  const menu = (items: Array<SidebarItem>, level = 0, ...parents) => {

    const isCollapsed = !isExpand(parents[0]);

    return (
      <ul
        className={Utils.classes({
          ['menu']: true,
          [`level-${level}`]: true,
          ['collapsed']: false // TODO isCollapsed
        })}
      >
        {items.map((item) => (
          <li
            key={item.title}
            className={Utils.classes({
              'item': true,
              'active': isActive(item)
            })}
          >
            <Text size="body">
              {item.route && (
                <Button text {...item.route}>{item.title}</Button>
              )}
              {!item.route && (
                // TODO
                <div style={{ fontWeight: 400 }} onClick={() => toggle(item, ...parents)}>
                  <span>
                    {item.icon && (
                      <>
                        <Icon name={item.icon as any} />
                        &nbsp;
                      </>
                    )}
                    {item.title}
                  </span>
                  {/* TODO */}
                  {/* <Icon name={isExpand(item) ? 'animations' : 'aspect-ratio'} /> */}
                </div>
              )}
            </Text>
            {!!item.items?.length && menu(item.items, level + 1, item, ...parents)}
          </li>
        ))}
      </ul>
    );
  };

  const classes = Utils.classes(
    'sidebar'
  );

  return (
    <div className={classes}>
      {menu(items)}
    </div>
  );
};
