import { Component, Property } from '@htmlplus/compiler/dist/client';
// import { } from './template.types';

/**
 * TODO
 * @development 
 * @slot default - The default slot.
 * @examples default
 */
@Component()
export class Template {

  /**
   * TODO
   */
  @Property()
  disabled?: boolean;

  /**
   * External Methods
   */

  /**
   * Internal Methods
   */

  /**
   * Watchers
   */

  /**
   * Events handler
   */

  /**
   * Lifecycles
   */

  render() {
    return (
      <slot />
    )
  }
}
