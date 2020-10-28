var React = require("react");
var Component = React.Component;

export default class Shape extends Component {
  constructor() {
    super();
    this.color = "color";
  }
  drawShape() {}
  calculateArea() {}
}

module.exports = Shape;
