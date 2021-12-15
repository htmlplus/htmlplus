import { Element } from '@htmlplus/element/decorators';

/**
 * @development
 * @slot default - The default slot.
 */
@Element()
export class CardHeader {
  render() {
    return (
      <slot />
    )
  }
}
