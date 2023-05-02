function getNumberPrime(numTerm: number) {
  let primeNumbers = [];
  let numberStart = 2;
  while (primeNumbers.length < numTerm) {
    if (isPrime(numberStart)) {
      primeNumbers.push(numberStart);
    }
    numberStart++;
  }
  console.log(primeNumbers);
  return primeNumbers[numTerm - 1];
}

function isPrime(num: number) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export { getNumberPrime };
