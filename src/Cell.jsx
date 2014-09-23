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
    key: React.PropTypes.number.isRequired
  },

  render () {
    return (
      <rect className={"Cell " + this.props.state}
            x={this.props.x}
            y={this.props.y}
            width={this.props.size}
            height={this.props.size}
            key={this.props.key} />
    );
  }
});

module.exports = Cell;
