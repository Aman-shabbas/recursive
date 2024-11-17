function _reverseString(string, index) {
  if (index === 0) {
    return string[0];
  }

  return  string[index] + _reverseString(string, index - 1);
}

function reverseString(string) {
  const reverse = _reverseString(string, string.length - 1);
  return reverse;
}

function isPalindrome(string) {
  const reverse = reverseString(string);
  return reverse === string; 
}

function getMark(expectation, actualResult) {
  return expectation === actualResult ? '✅' : '❌';
}

function makeMessage(strig, expectation, actualResult) {
  const context = "String: '" + strig;
  const expectationSegment = " Expected output: " + ' "' + expectation + '"';
  const resultSegment = "\tActual Result: " + ' "' + actualResult + '"';
  const message = context + expectationSegment + resultSegment;
  return message;
}

function testPalidrome(string, expectation) {
  const actualResult = isPalindrome(string);
  const mark = getMark(expectation, actualResult)
  const message = makeMessage(string, expectation, actualResult)
  console.log(mark, message);
}

testPalidrome("malayalam", true);
testPalidrome("aman", false);
testPalidrome("a", true);
testPalidrome("ababa", true);
