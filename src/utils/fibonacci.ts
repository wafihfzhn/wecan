const fibonacciSequence = (n: number) => {
  const result = [];

  let firstNum = 0,
    secNum = 1;

  for (var i = 0; i < n; i++) {
    const temp = firstNum;
    firstNum = secNum;
    secNum = temp + secNum;
    result.push(temp);
  }

  return result;
};

export default fibonacciSequence;
