module.exports = function(limit) {
  // determine whether any given number is prime
  function isPrime(candidate) {
    for (let i = 2; i <= Math.sqrt(candidate); i++) {
      // if evenly divisible by any integer along the way => not prime
      if (candidate % i === 0 || candidate === 1) {
        return false;
      }
    }
    return true;
  }

  let primeSum = 0;
  let candidates = 2;
  while (candidates < limit) {
    if (isPrime(candidates)) {
      primeSum += candidates;
    }
    candidates++;
  }
  return primeSum;
};
