var sumPrimes = require('../sumPrimes');
var assert = require('assert');

describe('SumPrimes Function', function() {
  it('should return 5 when the parameter is 3', function() {
    assert.equal(sumPrimes(3), 5);
  });
  it('should return 17 when the parameter is 10', function() {
    assert.equal(sumPrimes(10), 17);
  });
  it('should return 328 when the parameter is 50', function() {
    assert.equal(sumPrimes(50), 328);
  });
  it('should return 1060 when the parameter is 100', function() {
    assert.equal(sumPrimes(100), 1060);
  });
  it('should return 1264 when the parameter is 103', function() {
    assert.equal(sumPrimes(103), 1264);
  });
  it('should return 5736396 when the parameter is 10000', function() {
    assert.equal(sumPrimes(10000), 5736396);
  });
});