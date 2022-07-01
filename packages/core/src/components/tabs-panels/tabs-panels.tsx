import { Element, Property, Watch } from '@htmlplus/element';
import { createLink } from '@app/services';

const { Inject, reconnect } = createLink((instance) => {
  return instance.connector ? `Tabs:${instance.connector}` : undefined
});

/**
 * TODO: This component contains panels.
 * @slot default - The default slot.
 */
@Element()
export class TabsPanels {

  /**
   * Panels are not always used inside tabs.They may be used outside, in which you can use this property to connect them to their corresponding tabs.
   */
  @Property()
  connector?: string;

  // TODO: it's bridge
  @Inject()
  tunnel?: any;

  /**
   * Watchers
   */

  @Watch('connector')
  watcher() {
    reconnect(this);
  }

  render() {
    return (
      <slot />
    )
  }
}
