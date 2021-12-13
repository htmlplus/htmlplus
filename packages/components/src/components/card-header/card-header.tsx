import { Component } from '@htmlplus/compiler/client';

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
