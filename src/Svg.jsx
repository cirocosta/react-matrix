var React = require('react');
var Svg = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
    className: React.PropTypes.string
  },

  render () {
    return (
      <svg width={this.props.width}
           height={this.props.height}
           className={this.props.className ? this.props.className : 'Matrix'}>
        {this.props.children}
      </svg>
    );
  }
});

module.exports = Svg;
