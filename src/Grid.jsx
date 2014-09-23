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
  },

  render () {
    var rows = this.props.matrix.map((row, i) =>
      <Row key={i}
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
