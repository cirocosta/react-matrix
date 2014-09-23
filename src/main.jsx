/** @jsx React.DOM */

// require('../style/main.scss');
// require('../lib/react-matrix.css');

var React = require('react/addons');
var Matrix = require('../lib/react-matrix');
var update = React.addons.update;
var INITIAL_MATRIX = [
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0],
];

var App = React.createClass({
  getInitialState: () =>
    {matrix: INITIAL_MATRIX},

  componentDidMount () {
    setInterval(() => {
      var row = (Math.random() * INITIAL_MATRIX.length)|0;
      var column = (Math.random() * INITIAL_MATRIX[0].length)|0;
      var updateRow = {matrix: {}};

      updateRow.matrix[row] = {$apply: (x) => (x[column] = 1, x)};
      this.setState(update(
        {matrix: INITIAL_MATRIX},
        updateRow)
      );
    }, 100);
  },

  render: () =>
    <Matrix squareSize={20} matrix={this.state.matrix} />
});

React.renderComponent(
  <App />,
  document.getElementById('matrix')
);
