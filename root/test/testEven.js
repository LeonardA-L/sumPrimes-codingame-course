var isEven = require('../functions');
var assert = require('assert');

describe('isEven Function', function() {
  describe('Even', function() {
    it('should return true when the parameter is even', function() {
      assert.equal(isEven(2), true);
    });
  });
  describe('Odd', function() {
    it('should return false when the parameter is odd', function() {
      assert.equal(isEven(3), false);
    });
  });
});
