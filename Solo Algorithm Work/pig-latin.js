/*
 * Translate sentence into pig latin:
 * If word begins with consonant, move to end and add 'ay' at the end.
 * If multiple consonants in a row at beginning, move entire cluster
 * then add 'ay' at the end.
 * If word begins with a vowel, maintain word but add 'way' to the end
 */

//Capitalize the first letter
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

//Translates individual words
function translatePigLatin(str) {
	var vowels = ['a','e','i','o','u'];
	var cluster = "";

	if (vowels.indexOf(str[0]) !== -1){
	  	return str + "way";
	} else {
		var strArr = str.split('');
		while(vowels.indexOf(strArr[0]) === -1) {
			cluster += strArr.splice(0,1);
		}
		return strArr.join('') + cluster + 'ay';
	}
}

//Translates the entire sentence
function translateSentence(sentence) {
	return sentence.split(' ').map(function(word){
		return translatePigLatin(word.toLowerCase());
	}).join(' ').capitalize();
}

translateSentence("The quick brown fox jumps over the lazy dog");