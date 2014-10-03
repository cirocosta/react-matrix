/**
 * @jsx React.DOM
 */

'use strict';

jest.autoMockOff();

describe('Matrix', () => {
  var scale;

  beforeEach(() => {
    scale = require('../utils/scale');
  });

  it('should be requirable', function() {
    expect(!!scale.linear).toBe(true);
  });

  describe('range', function() {
    it('should equal d3', function() {
      var rangeU = scale.linear([0, 10], [0, 20]);

      expect(rangeU(1)).toEqual(2);
    });

    it('should equal d3', function() {
      var domain = [10,20];
      var range = [10,60];
      var rangeU = scale.linear(domain, range);

      expect(rangeU(10)).toEqual(10);
    });

    it('should equal d3', function() {
      var domain = [50,39];
      var range = [0,60];
      var rangeU = scale.linear(domain, range);

      expect(rangeU(10)|0).toEqual(218);
    });
  });

});
