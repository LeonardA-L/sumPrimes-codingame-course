function isPrime (number) {
	return false;
	// For demo purpose:
	/*
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
    */
}

module.exports = isPrime;