var React = require('react');
var cx = require('./cx');

var Cell = React.createClass({
  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    size: React.PropTypes.number.isRequired,
    cellState: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  handleClick () {
    this.props.onClick && this.props.onClick({
      x: this.props.x/this.props.size,
      y: this.props.y/this.props.size,
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
            width={this.props.size}
            height={this.props.size}
            onClick={this.handleClick} />
    );
  }
});

module.exports = Cell;
