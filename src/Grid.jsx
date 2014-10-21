/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Row = require('./Row.jsx');
var cx = require('./cx');

var Grid = React.createClass({
  propTypes: {
    matrix: React.PropTypes.array.isRequired,
    squareSize: React.PropTypes.array.isRequired,
    onCellClick: React.PropTypes.func,
    cellStates: React.PropTypes.object,
    move: React.PropTypes.bool
  },

  render () {
    var classes = cx({
      Grid: true,
      move: this.props.move
    });

    var rows = this.props.matrix.map((row, i) =>
      <Row onCellClick={this.props.onCellClick}
           key={i}
           dataRow={row}
           cellStates={this.props.cellStates}
           squareSize={this.props.squareSize} />
    );

    return (
      <g className={classes}
         style={{transform: 'translateY(-' + this.props.squareSize[1] + 'px)'}}>
        {rows}
      </g>
    );
  }
});

module.exports = Grid;
