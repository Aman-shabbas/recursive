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

function reverseNumber(number) {
 if (number < 10) {
  return number
 }
 const numString = number + "";
 const power = 10 ** (numString.length - 1)

 return reverseNumber(getRemainder(number, power)) * 10 + division(number, power)
}

function getMark(expectation, actualResult) {
  return expectation === actualResult ? '✅' : '❌';
}

function makeMessage(number, expectation, actualResult) {
  const context = "Number: '" + number;
  const expectationSegment = " Expected output: " + ' "' + expectation + '"';
  const resultSegment = "\tActual Result: " + ' "' + actualResult + '"';
  const message = context + expectationSegment + resultSegment;
  return message;
}

function testReverseNumber(number, expectation) {
  const actualResult = reverseNumber(number);
  const mark = getMark(expectation, actualResult)
  const message = makeMessage(number, expectation, actualResult)
  console.log(mark, message);
}

testReverseNumber(1234, 4321);
testReverseNumber(1, 1);
testReverseNumber(1221, 1221);
testReverseNumber(1122, 2211);