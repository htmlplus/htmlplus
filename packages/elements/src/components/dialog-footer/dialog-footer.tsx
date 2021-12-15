import { Component } from '@htmlplus/element/client';

/**
 * @slot default - The default slot.
 */
@Component()
export class DialogFooter {
  render() {
    return (
      <slot />
    )
  }
}
