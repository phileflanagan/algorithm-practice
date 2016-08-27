/*
 * Phil and Joe - Pair Programming
 * Algorithm Practice Session
 * Find the missing number from 1-100
 * from an unsorted array of integers
 */

// Generate Mock Data
var numberSet = [];
var mockShuffled = [];
for(var i = 1; i <= 100; i++) {
   numberSet.push(i);
}
while(numberSet.length > 1) {
  // Mock Data Missing One Integer
  mockShuffled.push(numberSet.splice((Math.random() * numberSet.length), 1)[0]);
}

// Method 1: Brute Force
(function bruteForce(arr) {
  var missingNum;
  for(var i = 1; i < arr.length; i++) {
    if (arr.indexOf(i) === -1){
      console.log(i);
      return i;
    }
  }

console.log("All numbers accounted for");
 return -1;
})(mockShuffled);

// Method 2: Sorted Array
(function sortFirst(arr){
  arr.sort(function(a,b) {
      return a - b;
  });

  for(var i = 1; i < arr.length; i++){
    if(arr[i-1] !== i) {
      console.log(i);
      return i;
    }
  }

  console.log("All numbers accounted for");
  return -1;
}(mockShuffled));
