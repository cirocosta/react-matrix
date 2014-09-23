/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var scale = require('../utils/scale');
var Svg = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired
  },

  render () {
    return (
      <svg width={this.props.width}
           height={this.props.height}
           className="Matrix">
        {this.props.children}
      </svg>
    );
  }
});

module.exports = Svg;
