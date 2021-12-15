import { Component } from '@htmlplus/element/client';

/**
 * @slot default - The default slot.
 */
@Component()
export class DialogHeader {
  render() {
    return (
      <slot />
    )
  }
}
