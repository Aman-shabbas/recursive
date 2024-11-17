function multiply(x, y) {
  if (y === 0) {
    return 0;
  }

  return x + multiply(x, y - 1);
}

function getMark(expectation, actualResult) {
  return expectation === actualResult ? '✅' : '❌';
}

function makeMessage(num1, num2, expectation, actualResult) {
  const context = "Multiplicant: '" + num1 + "' Multiplier '" + num2 + "'";
  const expectationSegment = " Expected output: " + ' "' + expectation + '"';
  const resultSegment = "\tActual Result: " + ' "' + actualResult + '"';
  const message = context + expectationSegment + resultSegment;
  return message;
}

function testMultiply(num1, num2, expectation) {
  const actualResult = multiply(num1, num2);
  const mark = getMark(expectation, actualResult)
  const message = makeMessage(num1, num2, expectation, actualResult)
  console.log(mark, message);
}

testMultiply(3, 4, 12);
testMultiply(4, 3, 12);
testMultiply(1, 3, 3);
testMultiply(3, 0, 0);
testMultiply(0, 3, 0);