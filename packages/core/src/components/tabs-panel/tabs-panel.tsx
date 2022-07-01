import { Attributes, Element, Property, State } from '@htmlplus/element';
import { createLink } from '@app/services';

const { Inject } = createLink();

/**
 * TODO: This component contains the contents of each tab and when the tab is activated the panel is displayed.
 * @slot default - The default slot.
 */
@Element()
export class TabsPanel {

  /**
   * Provides your own value.
   */
  @Property()
  value?: any;

  @State()
  @Inject()
  tunnel?: any;

  @Attributes()
  get attributes() {
    return {
      'active': this.tunnel && this.tunnel === this.value
    }
  }

  render() {
    return (
      <slot />
    )
  }
}