/**
 * @jsx React.DOM
 */

'use strict';

if (process.env.NODE_ENV !== 'test')
  require('./Matrix.scss');

var React = require('react');
var Svg = require('./Svg.jsx');
var Grid = require('./Grid.jsx');

var Matrix = React.createClass({
  propTypes: {
    squareSize: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.array]).isRequired,
    matrix: React.PropTypes.array.isRequired,

    onCellClick: React.PropTypes.func,
    cellStates: React.PropTypes.object,
    move: React.PropTypes.bool
  },

  render () {
    if (!Array.isArray(this.props.squareSize))
      this.props.squareSize = [this.props.squareSize, this.props.squareSize];

    var width = this.props.squareSize[0] * this.props.matrix[0].length;
    var height = this.props.squareSize[1] * this.props.matrix.length;

    return (
      <Svg width={width}
           height={height - this.props.squareSize[1]}>
        <Grid className="Grid"
              move={this.props.move}
              onCellClick={this.props.onCellClick}
              matrix={this.props.matrix}
              squareSize={this.props.squareSize}
              cellStates={this.props.cellStates} />
      </Svg>
    );
  }
});

module.exports = Matrix;
