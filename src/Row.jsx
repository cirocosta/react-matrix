/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var scale = require('../utils/scale');
var Cell = require('./Cell.jsx');


var Row = React.createClass({
  propTypes: {
    dataRow: React.PropTypes.array.isRequired,
    squareSize: React.PropTypes.number.isRequired,
    key: React.PropTypes.number.isRequired,
  },

  // TODO(ciro) - generalize this
  STATES: {
    '0': 'available',
    '1': 'barrier',
    '2': 'path',
    '3': 'pipette',
    '4': 'component'
  },

  render () {
    var range = scale
      .linear([0, this.props.dataRow.length],
              [0, this.props.squareSize * this.props.dataRow.length]);

    var cells = this.props.dataRow.map((cel, j) => {
      return <Cell x={range(j)}
                   y={range(this.props.key)}
                   state={this.STATES[cel]}
                   size={this.props.squareSize}
                   key={this.props.key + 1 + j} />
    });

    return (
      <g className="Row">
        {cells}
      </g>
    );
  }
});

module.exports = Row;
