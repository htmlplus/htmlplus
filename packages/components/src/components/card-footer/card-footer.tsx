import { Component } from '@htmlplus/compiler/dist/client';

/**
 * @development
 * @slot default - The default slot.
 */
@Component()
export class CardFooter {
  render() {
    return (
      <slot />
    )
  }
}
