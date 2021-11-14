import React, { useEffect, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from '@app/components';
import { useStore } from '@app/hooks';
import * as Utils from '@app/utils';
import { TocItemProps } from './toc-item.types';

export const TocItem: React.FC<TocItemProps> = observer((props) => {

  const { children, level } = props;

  const store = useStore();

  const element = useRef(null);

  const key = Utils.toKebabCase((children[0]?.props?.children || children || '').toString());

  const scrollTo = () => {

    if (!element.current) return;

    element.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  const onClick = (event) => {

    event && event.preventDefault();

    scrollTo();

    setTimeout(() => window.location.hash = `#${key}`, 500);
  }

  useEffect(() => {

    let depth = level;

    if (!depth) {

      const value = parseInt(element.current.parentElement.localName.replace('h', ''));

      if (!isNaN(value)) depth = value;
    }

    store.toc.add({
      key,
      level: depth,
      value: children,
      scrollTo: onClick
    });

    const observer = new IntersectionObserver((entries) => store.toc.update(key, entries[0]));

    observer.observe(element.current);

    return () => {

      observer.disconnect();

      store.toc.remove(key);
    }
  }, []);

  const classes = Utils.classes(
    'toc-item'
  );

  return (
    <div className={classes} ref={element}>
      <Button
        link
        to={`#${key}`}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
});
