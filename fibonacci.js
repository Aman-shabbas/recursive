function fibonacci(term) {
  if (term === 1) {
    return 0;
  }

  if (term === 2) {
    return 1;
  }

  return fibonacci(term - 1 ) + fibonacci(term - 2);
}

function getMark(expectation, actualResult) {
  return expectation === actualResult ? '✅' : '❌';
}

function makeMessage(string, expectation, actualResult) {
  const context = "Term No: '" + string;
  const expectationSegment = " Expected output: " + ' "' + expectation + '"';
  const resultSegment = "\tActual Result: " + ' "' + actualResult + '"';
  const message = context + expectationSegment + resultSegment;
  return message;
}

function testIsEven(numOfTerms, expectation) {
  const actualResult = fibonacci(numOfTerms);
  const mark = getMark(expectation, actualResult)
  const message = makeMessage(numOfTerms, expectation, actualResult)
  console.log(mark, message);
}

testIsEven(1, 0);
testIsEven(2, 1);
testIsEven(3, 1);
testIsEven(4, 2);
testIsEven(9, 21);