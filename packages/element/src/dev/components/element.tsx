import { Attributes, Element, Property, Watch } from '@htmlplus/element';

@Element()
export class MyElement {

  @Property({ reflect: true })
  value: number = 9;

  @Attributes()
  get attributes() {
    return {
      onClick: () => this.value++
    };
  }

  @Watch(['value'])
  watcher(...args) {
    console.log("@Watch(['value'])", args);
  }

  render() {
    console.log('renderd in the component');
    return (
      <div>
        <slot /> {this.value}
      </div>
    );
  }
}
