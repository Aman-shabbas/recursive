function isEven(number) {
  if (number < 2 && number > -2) {
    return number === 0;
  }

  const modifier = number > 0 ? -2 : 2;
  return isEven(number + modifier);
}

function getMark(expectation, actualResult) {
  return expectation === actualResult ? '✅' : '❌';
}

function makeMessage(string, expectation, actualResult) {
  const context = "Even Candidate: '" + string;
  const expectationSegment = " Expected output: " + ' "' + expectation + '"';
  const resultSegment = "\tActual Result: " + ' "' + actualResult + '"';
  const message = context + expectationSegment + resultSegment;
  return message;
}

function testIsEven(number, expectation) {
  const actualResult = isEven(number);
  const mark = getMark(expectation, actualResult)
  const message = makeMessage(number, expectation, actualResult)
  console.log(mark, message);
}

testIsEven(2, true);
testIsEven(-2, true);
testIsEven(3, false);
testIsEven(-3, false);
testIsEven(4, true);
testIsEven(8, true);
testIsEven(5, false);
testIsEven(1, false);
testIsEven(10, true);
testIsEven(-10, true);