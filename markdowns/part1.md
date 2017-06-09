The goal today is to write a function that returns the sum of all prime numbers up to a limit. We will do this in two steps: first we're going to write an `isPrime` function that checks wether or not a number is prime, and then the actual `sumPrimes` function.

# Check if a number is prime

Write an `isPrime` function that takes a number as parameter and returns true if this number is prime, false if it isn't.

*Reminder:* A prime number:

* Can only be divided by `1` and itself
* Is greater than `1`

@[Write the isPrime function]({"stubs": ["isPrime.js"], "command": "/project/target/node_modules/mocha/bin/mocha test/testIsPrime.js"})

# Sum all primes

Write a `sumPrimes` function to sum all prime numbers up to the parameter `limit` *included*. Copy you `isPrime` function from the last assignment to make use of it

@[Write the sumPrimes function]({"stubs": ["sumPrimes.js"], "command": "/project/target/node_modules/mocha/bin/mocha test/testSumPrimes.js"})