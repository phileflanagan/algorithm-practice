// String Compression: Implement a method to perform basic string compression using the counts of repeated  characters. For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z).

(function testify(fn) {
  // testing testing, one two
  console.log("compress(aabcccccaaa) -> a2b1c5a3, but is: ", fn('aabcccccaaa'));
  console.log("compress(aaAAbcccccaaa) -> a2A2b1c5a3, but is: ", fn('aaAAbcccccaaa'));
  console.log("compress(abc) -> abc, but is: ", fn('abc'));
  console.log("compress(cccabh) -> cccabh, but is: ", fn('cccabh'));
  console.log("compress(cccabhqqqqq) -> c3a1b1h1q5 , but is: ", fn('cccabhqqqqq'));
})(compress);

function compress(str) {
  var strArr = str.split('');
  var charFreq = {};
  var result = "";
  var prevChar = strArr[0];
  while (strArr.length > 0) {
    var currChar = strArr.shift();
    if (currChar !== prevChar) {
      result += prevChar + charFreq[prevChar];
      delete charFreq[prevChar];
    }
    charFreq[currChar] ? charFreq[currChar]++ : charFreq[currChar] = 1;
    prevChar = currChar;
  }
  result += prevChar + charFreq[prevChar];
  return result.length < str.length ? result : str; 
}