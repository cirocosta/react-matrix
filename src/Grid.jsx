/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Row = require('./Row.jsx');

var Grid = React.createClass({
  propTypes: {
    matrix: React.PropTypes.array.isRequired,
    squareSize: React.PropTypes.number.isRequired,
    onCellClick: React.PropTypes.func
  },

  render () {
    var rows = this.props.matrix.map((row, i) =>
      <Row onCellClick={this.props.onCellClick}
           key={i}
           dataRow={row}
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
