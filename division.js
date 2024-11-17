function division(dividant, divisor) {
  if (dividant < divisor || divisor === 0) {
    return 0;
  }

  return 1 + division(dividant - divisor, divisor);
}


function getMark(expectation, actualResult) {
  return expectation === actualResult ? '✅' : '❌';
}

function makeMessage(string, substring, expectation, actualResult) {
  const context = "Divident: '" + string + "' Divisor '" + substring + "'";
  const expectationSegment = " Expected output: " + ' "' + expectation + '"';
  const resultSegment = "\tActual Result: " + ' "' + actualResult + '"';
  const message = context + expectationSegment + resultSegment;
  return message;
}

function testIsPrime(divident, divisor, expectation) {
  const actualResult = division(divident, divisor);
  const mark = getMark(expectation, actualResult)
  const message = makeMessage(divident, divisor, expectation, actualResult)
  console.log(mark, message);
}


testIsPrime(12, 3, 4);
testIsPrime(3, 1, 3);
testIsPrime(8, 3, 2);
testIsPrime(10, 5, 2);