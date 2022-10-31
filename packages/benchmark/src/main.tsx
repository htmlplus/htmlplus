import { Element, State } from "@htmlplus/element";

const ADJECTIVES = [
  "pretty",
  "large",
  "big",
  "small",
  "tall",
  "short",
  "long",
  "handsome",
  "plain",
  "quaint",
  "clean",
  "elegant",
  "easy",
  "angry",
  "crazy",
  "helpful",
  "mushy",
  "odd",
  "unsightly",
  "adorable",
  "important",
  "inexpensive",
  "cheap",
  "expensive",
  "fancy",
];

const COLORS = [
  "red",
  "yellow",
  "blue",
  "green",
  "pink",
  "brown",
  "purple",
  "brown",
  "white",
  "black",
  "orange",
];

const NOUNS = [
  "table",
  "chair",
  "house",
  "bbq",
  "desk",
  "car",
  "pony",
  "cookie",
  "sandwich",
  "burger",
  "pizza",
  "mouse",
  "keyboard",
];

@Element()
export class MainElement {
  @State()
  rows = [];

  @State()
  selected = undefined;

  id = 1;

  get label() {
    return (
      ADJECTIVES[this.random(ADJECTIVES.length)] +
      " " +
      COLORS[this.random(COLORS.length)] +
      " " +
      NOUNS[this.random(NOUNS.length)]
    );
  }

  add() {
    this.rows = this.rows.concat(this.generate(1000));
  }

  clear() {
    this.rows = [];
    this.selected = undefined;
  }

  generate(count) {
    const rows = [];

    for (let i = 0; i < count; i++)
      rows.push({
        id: this.id++,
        label: this.label,
      });

    return rows;
  }

  random(max) {
    return Math.round(Math.random() * 1000) % max;
  }

  remove(id) {
    const index = this.rows.findIndex((row) => row.id == id);
    this.rows = this.rows.slice(0, index).concat(this.rows.slice(index + 1));
  }

  run() {
    this.rows = this.generate(1000);
    this.selected = undefined;
  }

  runLots() {
    this.rows = this.generate(10000);
    this.selected = undefined;
  }

  select(id) {
    this.selected = id;
  }
  
  swapRows() {
    if (this.rows.length <= 998) return; 
    
    const row1 = this.rows[1];

    const row998 = this.rows[998];

    const rows = this.rows.map((row, index) => {
      if (index === 1) return row998;
      if (index === 998) return row1;
      return row;
    });

    this.rows = rows;
  }

  update() {
    const rows = [...this.rows];

    for (let i = 0; i < rows.length; i += 10) {
      rows[i].label += " !!!";
    }

    this.rows = rows;
  }

  onClick(event) {
    const { action, id } = event.target.dataset;
    if (action && id) {
      this[action](id);
    }
  }

  render() {
    return (
      <>
        <link href="/css/currentStyle.css" rel="stylesheet" />
        <div className="container">
          <div className="jumbotron">
            <div className="row">
              <div className="col-md-6">
                <h1>HTMLPLUS keyed</h1>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-sm-6 smallpad">
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      id="run"
                      onClick={this.run.bind(this)}
                    >
                      Create 1,000 rows
                    </button>
                  </div>
                  <div className="col-sm-6 smallpad">
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      id="runlots"
                      onClick={this.runLots.bind(this)}
                    >
                      Create 10,000 rows
                    </button>
                  </div>
                  <div className="col-sm-6 smallpad">
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      id="add"
                      onClick={this.add.bind(this)}
                    >
                      Append 1,000 rows
                    </button>
                  </div>
                  <div className="col-sm-6 smallpad">
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      id="update"
                      onClick={this.update.bind(this)}
                    >
                      Update every 10th row
                    </button>
                  </div>
                  <div className="col-sm-6 smallpad">
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      id="clear"
                      onClick={this.clear.bind(this)}
                    >
                      Clear
                    </button>
                  </div>
                  <div className="col-sm-6 smallpad">
                    <button
                      type="button"
                      className="btn btn-primary btn-block"
                      id="swaprows"
                      onClick={this.swapRows.bind(this)}
                    >
                      Swap Rows
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table
            className="table table-hover table-striped test-data"
            onClick={this.onClick.bind(this)}
          >
            <tbody>
              {this.rows.map((item) => (
                <tr
                  id={item.id}
                  className={item.id == this.selected ? "danger" : ""}
                >
                  <td className="col-md-1">{item.id}</td>
                  <td className="col-md-4">
                    <a data-action="select" data-id={item.id}>
                      {item.label}
                    </a>
                  </td>
                  <td className="col-md-1">
                    <a>
                      <span
                        className="glyphicon glyphicon-remove"
                        aria-hidden="true"
                        data-action="remove"
                        data-id={item.id}
                      ></span>
                    </a>
                  </td>
                  <td className="col-md-6"></td>
                </tr>
              ))}
            </tbody>
          </table>
          <span
            className="preloadicon glyphicon glyphicon-remove"
            aria-hidden="true"
          ></span>
        </div>
      </>
    );
  }
}
