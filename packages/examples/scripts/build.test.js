require('dotenv').config();

const transform = require('./transform');

const code0 = transform(`
class {

  @State()
  inside = 0;

  @State()
  outside = 0;

  onClick() {
    this.inside = this.inside + 1;
  }

  onOutsideClick() {
    this.outside = this.outside + 1;
  }

  render() {
    return (
      <div class="container">
        <plus-card></plus-card>
      </div>
    )
  }
}
`);

console.log(0, code0.ports.javascript);