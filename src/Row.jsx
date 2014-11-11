'use strict';

var React = require('react');
var scale = require('../utils/scale');
var Cell = require('./Cell.jsx');


var Row = React.createClass({
  propTypes: {
    dataRow: React.PropTypes.array.isRequired,
    squareSize: React.PropTypes.number.isRequired,
    num: React.PropTypes.number.isRequired,
    onCellClick: React.PropTypes.func,
    cellStates: React.PropTypes.object
  },

  render () {
    var range = scale
      .linear([0, this.props.dataRow.length],
              [0, this.props.squareSize * this.props.dataRow.length]);

    var cells = this.props.dataRow.map((cel, j) => {
      return <Cell x={range(j)}
                   y={range(this.props.num)}
                   cellState={this.props.cellStates && this.props.cellStates[cel]}
                   size={this.props.squareSize}
                   onClick={this.props.onCellClick}
                   key={this.props.num + 1 + j} />
    });

    return (
      <g className="Row">
        {cells}
      </g>
    );
  }
});

module.exports = Row;
