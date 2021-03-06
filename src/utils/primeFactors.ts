const isPrime = (num: number): boolean => {
  for (let i: number = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeFactors = (n: number): number[] => {
  const primeResult = [];
  for (let i: number = 2; i <= n; ++i) {
    while (primeResult.length < n) {
      isPrime(i) && primeResult.push(i);
      i++;
    }
  }

  return primeResult;
};

export default primeFactors;
