# react-matrix

> React Component for representing Matrixes.

## Example

https://cirocosta.github.io/react-matrix

![React Matrix](http://i.imgur.com/NbGbjEA.png)

```javascript
React.createClass({
  getInitialState: function () {
    return {
      matrix: [
        [0,0,0,0,0],
        [0,1,0,1,0],
        [0,1,1,1,0],
        [0,0,1,0,0],
        [0,0,0,0,0],
      ]
    }
  },

  render: function () {
    return (
      <Matrix squareSize={20} matrix={this.state.matrix} />
    );
  }
});
```

