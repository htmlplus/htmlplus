import { Component } from '@htmlplus/element/client';

/**
 * @development
 * @slot default - The default slot.
 */
@Component()
export class CardHeader {
  render() {
    return (
      <slot />
    )
  }
}
