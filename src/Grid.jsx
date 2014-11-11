var React = require('react');
var Row = require('./Row.jsx');

var Grid = React.createClass({
  propTypes: {
    matrix: React.PropTypes.array.isRequired,
    squareSize: React.PropTypes.number.isRequired,
    onCellClick: React.PropTypes.func,
    cellStates: React.PropTypes.object
  },

  render () {
    var rows = this.props.matrix.map((row, i) =>
      <Row onCellClick={this.props.onCellClick}
           num={i}
           key={i}
           dataRow={row}
           cellStates={this.props.cellStates}
           squareSize={this.props.squareSize} />
    );

    return (
      <g>
        {rows}
      </g>
    );
  }
});

module.exports = Grid;
