/**
 * @jsx React.DOM
 */

'use strict';


jest.dontMock('../src/Matrix.jsx');

describe('LikeButton', () => {
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
});
