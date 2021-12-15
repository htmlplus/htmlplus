import { Element } from '@htmlplus/element/decorators';

/**
 * @development
 */
@Element()
export class Ripple {
  render() {
    return (
      <slot />
    )
  }
}
