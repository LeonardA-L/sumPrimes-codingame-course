var isPrime = require('../isPrime');
var assert = require('assert');

describe('isPrime Function', function() {
  describe('Test with prime numbers', function() {
    it('should return true when the parameter is 5', function() {
      assert.equal(isPrime(5), true);
    });
    it('should return true when the parameter is 3', function() {
      assert.equal(isPrime(3), true);
    });
    it('should return true when the parameter is 11', function() {
      assert.equal(isPrime(11), true);
    });
    it('should return true when the parameter is 23', function() {
      assert.equal(isPrime(23), true);
    });
    it('should return true when the parameter is 47', function() {
      assert.equal(isPrime(47), true);
    });
  });
  describe('Test with non prime numbers', function() {
    it('should return false when the parameter is 1', function() {
      assert.equal(isPrime(1), false);
    });
    it('should return false when the parameter is 2', function() {
      assert.equal(isPrime(2), false);
    });
    it('should return false when the parameter is 15', function() {
      assert.equal(isPrime(15), false);
    });
    it('should return false when the parameter is 52', function() {
      assert.equal(isPrime(52), false);
    });
    it('should return false when the parameter is 121', function() {
      assert.equal(isPrime(121), false);
    });
  });
});
