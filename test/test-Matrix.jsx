/**
 * @jsx React.DOM
 */

'use strict';

jest.autoMockOff();

describe('Matrix', () => {
  var React;
  var TestUtils;
  var Matrix;

  beforeEach(() => {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    Matrix = require('../src/Matrix.jsx');
  });

  it('be requireable', function() {
  	expect(!!Matrix).toBe(true);
  });

  it('not be renderable without the required props', function() {
    expect(() => {
      TestUtils.renderIntoDocument(<Matrix />);
    }).toThrow();
  });

  it('be renderable when passing required props', function() {
    var instance = TestUtils
      .renderIntoDocument(<Matrix matrix={[[0]]} squareSize={10} />);

    expect(TestUtils.isCompositeComponent(instance)).toBe(true);
  });

  it('create the correct number of rects for a given matrix', () => {
    var matrix = [
      [0,0],
      [0,0]
    ];
    var instance = TestUtils.renderIntoDocument(<Matrix matrix={matrix} squareSize={10} />);
    var rects = TestUtils.
      scryRenderedDOMComponentsWithTag(instance, 'rect');

    expect(rects.length).toEqual(4);
  });

  it('handle clicks if callback passed', () => {
    var fn = jest.genMockFunction();
    var matrix = [
      [0,0],
      [0,0]
    ];
    var instance = TestUtils.renderIntoDocument(
      <Matrix matrix={matrix} squareSize={10} onCellClick={fn} />
    );
    var rects = TestUtils.
      scryRenderedDOMComponentsWithTag(instance, 'rect');
    TestUtils.Simulate.click(rects[1].getDOMNode());

    expect(fn).toBeCalled();
    expect(fn).toBeCalledWith({x: 1, y: 0, cellState: undefined});
  });

});
