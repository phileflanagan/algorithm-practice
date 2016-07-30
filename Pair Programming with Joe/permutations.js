/*
 * Algorithm Practice - Pair Programming
 * Phil Flanagan && Joe Hull
 * Find all permutations of a given string.
 */


(function test(fn){
  //Test 'ABC'
  console.log("All permutations of 'ABC' should be 'ABC' 'ACB' BAC' 'BCA' 'CAB' 'CBA'");
  console.log("But returned", fn('ABC'));

  //Test 'HTTP'
  console.log("All permutations 'HTTP' should be 'HTTP' 'HTPT' 'HPTT' 'PTTH' 'PHTT' 'PTHT' 'TTHP' 'TTPH' 'TPHT' 'THPT' 'TPTH'");
  console.log("But returned", fn('HTTP'));
}(permute));

function permute(str){
  if (str.length === 1) return str;

  var allPermutations = [];
  var strArr = str.split('');
  allPermutations.push(strArr.join(''));

  for(var j = 0; j < str.length; j++) {
    for(var i = 0; i < strArr.length-1; i++) {
      var letterHolder = strArr[i];
      strArr[i] = strArr[i+1];
      strArr[i+1] = letterHolder;
      if(allPermutations.indexOf(strArr.join('')) === -1) {
        allPermutations.push(strArr.join(''));
      }
    }
  }

  return allPermutations.sort();
}
