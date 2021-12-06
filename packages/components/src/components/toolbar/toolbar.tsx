import { Component, Property } from '@htmlplus/compiler/dist/client';

/**
 * @development 
 * @slot default - The default slot.
 */
@Component()
export class Toolbar {

  /**
   * TODO
   */
  @Property()
  gutter?: number;

  /**
   * TODO
   */
  @Property()
  gutterX?: number;

  /**
   * TODO
   */
  @Property()
  gutterY?: number;

  /**
   * TODO
   */
  @Property({ reflect: true })
  wrap?: boolean = true;
  
  render() {
    return (
      <div>
        {this.gutterX}
        <slot />
      </div>
    )
  }
}
