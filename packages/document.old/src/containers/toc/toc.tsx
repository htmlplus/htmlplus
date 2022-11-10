import { useEffect, useMemo, useRef, useState } from 'react';

import { paramCase } from 'change-case';
import create from 'zustand';

import * as Utils from '@app/utils';

import { TocItemProps } from './toc.types';

interface UseTocItem {
  isActive?: boolean;
  element?: HTMLElement;
  entry?: IntersectionObserverEntry;
  id?: string;
  key?: string;
  level?: number;
  observer?: IntersectionObserver;
  title?: string;
  top?: number;
}

interface UseToc {
  items: UseTocItem[];
  add: (item: UseTocItem) => void;
  remove: (item: UseTocItem) => void;
  scrollTo: (item: UseTocItem) => void;
  update: (item: UseTocItem, entry: IntersectionObserverEntry) => void;
}

const useToc = create<UseToc>((set, get) => ({
  items: [],
  add: (item: UseTocItem) => {
    let items = get().items.concat(item);

    for (const item of items) {
      item.top = item.element?.getBoundingClientRect().top;
    }

    items = items.sort((a, b) => ((a.top ?? 0) < (b.top ?? 0) ? -1 : 0));

    set({ items });

    item.observer = new IntersectionObserver(([entry]) => get().update(item, entry));

    item.observer.observe(item.element!);
  },
  remove: (item: UseTocItem) => {
    item.observer?.disconnect();
    const items = get().items.filter((x) => x.key != item.key);
    set({ items });
  },
  scrollTo: (item: UseTocItem) => {
    item.element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
    setTimeout(() => (window.location.hash = `#${item.id}`), 500);
  },
  update(item: UseTocItem, entry: IntersectionObserverEntry) {
    item.entry = entry;
    const entries = get().items.filter((item) => item.entry?.isIntersecting);
    if (!entries.length) return;
    const items = get().items;
    items.forEach((item) => (item.isActive = item === entries[0]));
    set({ items: [...items] });
  }
}));

export const Toc = () => {
  const toc = useToc();
  useEffect(() => {
    let clear: any;
    const timeout = () => {
      if (document.readyState != 'complete') {
        clear = setTimeout(timeout, 250);
        return;
      }
      const item = toc.items.find((item) => item.id && location.hash.endsWith(item.id));
      if (!item) return;
      toc.scrollTo(item);
    };
    timeout();
    return () => clearTimeout(clear);
  }, []);
  if (!toc.items.length) return null;
  return (
    <div className="toc">
      <p>Contents</p>
      {toc.items.map((item) => (
        <a
          className={Utils.classes({
            ['active']: item.isActive,
            [`level-${item.level}`]: true
          })}
          key={item.key}
          onClick={() => toc.scrollTo(item)}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

Toc.Item = ({ children, level }: TocItemProps) => {
  const element = useRef(null);

  const [isReady, setIsReady] = useState(false);

  const toc = useToc();

  const item: UseTocItem | undefined = useMemo(() => {
    if (!isReady) return;
    return {
      element: element.current!,
      id: paramCase(children?.toString() ?? ''),
      key: Math.random().toString(),
      level,
      title: children?.toString()
    };
  }, [isReady]);

  const onClick = (event: any) => {
    event.preventDefault();
    if (item) toc.scrollTo(item);
  };

  useEffect(() => setIsReady(!!element.current));

  useEffect(() => {
    if (!item) return;
    toc.add(item);
    return () => toc.remove(item);
  }, [item]);

  return (
    <>
      <a className="toc-item" aria-hidden="true" ref={element} onClick={onClick}>
        <div>#</div>
      </a>
      {children}
    </>
  );
};
