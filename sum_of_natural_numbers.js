function sumOfNNaturalNumbers(x) {
  if (x === 0) {
    return 0;
  }

  return x + sumOfNNaturalNumbers(x -1 );
}


function getMark(expectation, actualResult) {
  return expectation === actualResult ? '✅' : '❌';
}

function makeMessage(string, substring, expectation, actualResult) {
  const context = "Multiplicant: '" + string + "' Divisor '" + substring + "'";
  const expectationSegment = " Expected output: " + ' "' + expectation + '"';
  const resultSegment = "\tActual Result: " + ' "' + actualResult + '"';
  const message = context + expectationSegment + resultSegment;
  return message;
}

function testFibonacci(numOfTerms, expectation) {
  const actualResult = sumOfNNaturalNumbers(numOfTerms);
  const mark = getMark(expectation, actualResult)
  const message = makeMessage(numOfTerms, expectation, actualResult)
  console.log(mark, message);
}

testFibonacci(5, 15);
testFibonacci(4, 10);
testFibonacci(2, 3);
testFibonacci(1, 1);

