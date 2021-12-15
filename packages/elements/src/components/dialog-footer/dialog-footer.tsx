import { Element } from '@htmlplus/element/decorators';

/**
 * @slot default - The default slot.
 */
@Element()
export class DialogFooter {
  render() {
    return (
      <slot />
    )
  }
}
