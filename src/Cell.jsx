/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Cell = React.createClass({
  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    size: React.PropTypes.number.isRequired,
    state: React.PropTypes.string.isRequired,
    key: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func
  },

  handleClick () {
    this.props.onClick && this.props.onClick({
      x: this.props.x/this.props.size,
      y: this.props.y/this.props.size,
      state: this.props.state
    });
  },

  render () {
    return (
      <rect className={"Cell " + this.props.state}
            x={this.props.x}
            y={this.props.y}
            width={this.props.size}
            height={this.props.size}
            onClick={this.handleClick}
            key={this.props.key} />
    );
  }
});

module.exports = Cell;
