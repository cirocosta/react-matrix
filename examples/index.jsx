var SQUARE_SIZE = 20;
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

var STATES = {
  '0': 'available',
  '1': 'barrier'
};

function prettyMatrix (arr) {
  var repr = [];

  for (var i in arr)
    repr.push(arr[i])

  return repr.join('\n');
}

var App = React.createClass({
  getInitialState: function () {
    return {
      matrix: INITIAL_MATRIX
    }
  },

  handleCellClick: function (cellState) {
    var y = (cellState.x);
    var x = (cellState.y);
    var updateRow = {matrix: {}};

    updateRow.matrix[x] = {$apply: function (x) {
      return (x[y] = 1, x);
    }};

    this.setState(update(
      {matrix: INITIAL_MATRIX},
      updateRow)
    );
  },

  render: function () {
    return (
      <div>
        <Matrix squareSize={SQUARE_SIZE}
                matrix={this.state.matrix}
                onCellClick={this.handleCellClick}
                cellStates={STATES} />
        <pre>{prettyMatrix(this.state.matrix)}</pre>
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('matrix')
);

window.React = React;
