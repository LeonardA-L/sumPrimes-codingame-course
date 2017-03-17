function isPrime (number) {
	return false;
	// For demo purposes:
	/*
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
    */
}

function sumPrimes (limit) {
	// Return the sum of all prime numbers from 2 to `limit`
	return 0;

	// For demo purposes:
	/*
	var s=0;
	for(var i=2; i<=limit; i++) {
		s+=isPrime(i)?i:0;
	}
	return s;
	*/
}

module.exports = sumPrimes;