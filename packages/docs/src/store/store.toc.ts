import { makeAutoObservable, observable } from 'mobx';
import { Store } from './store';
import { TocItem } from './store.toc.types';

export class TocStore {
  items: Array<TocItem> = [];

  constructor(readonly root: Store) {
    makeAutoObservable(this, {
      root: false,
      items: observable,
    });
  }

  add(item: TocItem) {
    this.items.push(item);

    if (item.key && `#${item.key}` !== window.location.hash) return;

    setTimeout(() => {
      item.active = true;

      item.scrollTo();
    }, 1000);
  }

  remove(key: string) {
    this.items = this.items.filter((item) => item.key !== key);
  }

  update(key: string, entry) {
    const active = this.items.find((item) => item.entry?.isIntersecting);

    const item = this.items.find((item) => item.key === key);

    if (item) {
      item.entry = entry;
    }

    const entries = this.items.filter((item) => item.entry?.isIntersecting);

    let next;

    if (entries.length) {
      next = entries[0];
    } else {
      if (!active || !active.entry) return;

      const top = active.entry.target.getBoundingClientRect().top;

      const toDown = top < 0;

      const index = this.items.findIndex((item) => item.key === active.key);

      next = this.items[toDown ? index : index - 1];
    }

    if (!next) return;

    this.items.map((item) => (item.active = item.key === next.key));
  }
}
