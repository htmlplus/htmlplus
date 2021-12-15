import { Element } from '@htmlplus/element/decorators';

/**
 * @slot default - The default slot.
 */
@Element()
export class DialogHeader {
  render() {
    return (
      <slot />
    )
  }
}
