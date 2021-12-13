import { Component } from '@htmlplus/compiler/client';

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
