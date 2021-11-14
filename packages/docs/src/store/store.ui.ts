import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import nookies from 'nookies';
import { Store } from './store';
import { Framework, Layout } from './store.ui.types';

export class UiStore {
  framework: Framework = 'react';

  layout?: Layout;

  constructor(readonly root: Store) {
    makeAutoObservable(this, {
      root: false,
      layout: observable,
      framework: observable,
    });

    // TODO
    this.setFramework((nookies.get(null).framework as any) || 'react');
  }

  setFramework(value: Framework) {
    this.framework = value;

    // TODO
    nookies.set(null, 'framework', value, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  }

  setLayout(value: Layout) {
    this.layout = value;
  }
}
