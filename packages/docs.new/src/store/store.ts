import { TocStore } from './store.toc';
import { UiStore } from './store.ui';

export class Store {

  toc: TocStore;

  ui: UiStore;

  constructor() {

    this.toc = new TocStore(this);

    this.ui = new UiStore(this);
  }
}
