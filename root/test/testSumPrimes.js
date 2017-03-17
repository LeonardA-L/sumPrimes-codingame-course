var sumPrimes = require('../sumPrimes');
var assert = require('assert');

describe('SumPrimes Function', function() {
  it('should return 2 when the parameter is 3', function() {
    assert.equal(isPrime(3), 2);
  });
  it('should return 17 when the parameter is 10', function() {
    assert.equal(isPrime(10), 17);
  });
  it('should return 328 when the parameter is 50', function() {
    assert.equal(isPrime(50), 328);
  });
  it('should return 1060 when the parameter is 100', function() {
    assert.equal(isPrime(100), 1060);
  });
  it('should return 1161 when the parameter is 103', function() {
    assert.equal(isPrime(103), 1161);
  });
  it('should return 5736396 when the parameter is 10000', function() {
    assert.equal(isPrime(10000), 5736396);
  });
});