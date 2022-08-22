import { Attributes, Bind, Element, Event, EventEmitter, Property } from '@htmlplus/element';

@Element()
export class Switch {
  /**
   * Puts the switch in checked state.
   * @model
   */
  @Property({ reflect: true })
  checked?: boolean;

  /**
   * Disables the switch.
   */
  @Property({ reflect: true })
  disabled?: boolean; 

  /**
   * Switches the location of yes and no options.
   */
  @Property({ reflect: true })
  reverse?: boolean;

  /**
   * When the switch state is changed this event triggers.
   * @model
   */
  @Event({ cancelable: true })
  plusChange!: EventEmitter<void>;

  @Attributes()
  get attributes() {
    return {
      'aria-checked': `${!!this.checked}`,
      'aria-disabled': `${!!this.disabled}`,
      'role': 'switch',
      'tabindex': '0',
      'onClick': this.onClick,
      'onKeyDown': this.onKeyDown
    }
  }

  toggle() {
    const { defaultPrevented } = this.plusChange();
    if (defaultPrevented) return;
    this.checked = !this.checked;
  }

  @Bind()
  onClick(event) {
    event.preventDefault();
    if (this.disabled) return;
    this.toggle();
  }

  @Bind()
  onKeyDown (event) {
    if (event.key != ' ' && event.key != 'Enter') return;
    event.preventDefault();
    this.toggle();
  }

  render() {
    return (
      <div class="root" part="on">
        <div class="slot on" part="on">
          <slot name="on" />
        </div>
        <div class="handle" part="handle">
          <slot name="handle" />
        </div>
        <div class="slot off" part="off">
          <slot name="off" />
        </div>
      </div>
    )
  }
}