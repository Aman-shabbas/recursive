function division(dividant, divisor) {
  if (dividant < divisor || divisor === 0) {
    return 0;
  }

  return 1 + division(dividant - divisor, divisor);
}

function getRemainder(divident, divisor) {
  if (divident < divisor || divisor === 0) {
    return divident;
  }

  return getRemainder(divident - divisor, divisor);
}

function isDivisible(divident, divisor) {
  return getRemainder(divident, divisor) === 0;
}

function isPrime(primeCandidate, divisor) {
  if (divisor === 1) {
    return true;
  }

  if (isDivisible(primeCandidate, divisor) || primeCandidate < 2) {
    return false;
  }

  return isPrime(primeCandidate, divisor - 1);
}

function getMark(expectation, actualResult) {
  return expectation === actualResult ? '✅' : '❌';
}

function makeMessage(primeCandidate, expectation, actualResult) {
  const context = "Prime Candidate: '" + primeCandidate;
  const expectationSegment = " Expected output: " + ' "' + expectation + '"';
  const resultSegment = "\tActual Result: " + ' "' + actualResult + '"';
  const message = context + expectationSegment + resultSegment;
  return message;
}

function testIsPrime(primeCandidate, expectation) {
  const actualResult = isPrime(primeCandidate);
  const mark = getMark(expectation, actualResult)
  const message = makeMessage(primeCandidate, expectation, actualResult)
  console.log(mark, message);
}

testIsPrime(1, false);
testIsPrime(3, true);
testIsPrime(2, true);
testIsPrime(5, true);
testIsPrime(7, true);
testIsPrime(9, false);
testIsPrime(8, false);
testIsPrime(12, false);
testIsPrime(23, true);