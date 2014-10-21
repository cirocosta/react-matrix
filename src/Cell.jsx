/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var cx = require('./cx');

var Cell = React.createClass({
  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    size: React.PropTypes.array.isRequired,
    cellState: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  handleClick () {
    this.props.onClick && this.props.onClick({
      x: this.props.x/this.props.size[0],
      y: this.props.y/this.props.size[1],
      cellState: this.props.cellState
    });
  },

  render () {
    var classes = {'Cell': true};

    this.props.cellState && (classes[this.props.cellState] = true);

    return (
      <rect className={cx(classes)}
            x={this.props.x}
            y={this.props.y}
            width={this.props.size[0]}
            height={this.props.size[1]}
            onClick={this.handleClick} />
    );
  }
});

module.exports = Cell;
