var sumPrimes = require('../sumPrimes');
var assert = require('assert');

console.log(sumPrimes(3))
console.log(sumPrimes(10))
console.log(sumPrimes(50))
console.log(sumPrimes(100))
console.log(sumPrimes(103))
console.log(sumPrimes(10000))

describe('SumPrimes Function', function() {
  it('should return true when the parameter is 5', function() {
    assert.equal(isPrime(5), true);
  });
});