/*
 * Write a function given a string of letters
 * that are are an incomplete segment of the alphabet
 * and find the missing letters up to the final letter
 * of the incomplete segment
 */

(function test(fn){
	console.log('findMissingLetters(bcdx) should return aefghijklmnopqrstuvw and returns', fn('bcdx'));
	console.log('findMissingLetters(abcf) should return e and returns', fn('abcdf'));
})(findMissingLetters);

function findMissingLetters(str) {
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var alphabetSpan = alphabet.substr(0,alphabet.indexOf(str[str.length-1])+1);
	var missingLetters = "";
	for(var i = 0; i < alphabetSpan.length; i++) {
		if(str.indexOf(alphabetSpan[i]) === -1) {
			missingLetters += alphabetSpan[i];
		}
	}
	return missingLetters;
}

findMissingLetters('bcdx');
