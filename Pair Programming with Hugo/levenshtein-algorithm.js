var _ = require('underscore');

//_.times(5, sayHello);

// One Away: There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away. 
// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bake -> false 


(function test(fn) {
  _.each([
    ['pale', 'ple', true],
    ['pales', 'pale', true],
    ['pale', 'bale', true],
    ['pale', 'bake', false],
    ['pale', 'paless', false],
    ['pale', 'pale', true]
  ], function(args) {
    console.log(args[0] + ', ' + args[1] + ' should be: ' + args[2], ' and is ', fn(args[0], args[1]))
  })
})(oneAway);


function oneAway(a, b) {
  if (wrongLength(a, b)) {
    return false;
  } else if (a === b) {
    return true;
  } else if (a.length === b.length) {
    return canBeReplacedWithSingleChar(a, b);
  } else if (canRemoveCharFromBiggerStringToMatch(a, b)) {
    return true;
  } else if (canAddCharToLilStringToMatch(a,b)) {
    // console.log('o noes')
    return true;
  } else {
    return null; // oh noes!
  }
}

function canBeReplacedWithSingleChar(a,b) { 
  if (a.length === b.length) {
    var replaceCount = 0;
    for(var i = 0; i < a.length; i++) {
      if(a[i] !== b[i]) {
        replaceCount++;
        if (replaceCount > 1) return false;
      }
    }
    return true;
  } else {
    return false;
  }
}


function wrongLength(a,b) {
  if (Math.abs(a.length - b.length) > 1) {
    return true;
  }
}

function canRemoveCharFromBiggerStringToMatch(a, b) {
  var biggieAndSmally = biggerAndLil(a, b);
  var biggieStr = biggieAndSmally[0];
  var lilStr = biggieAndSmally[1];
  var copyThingy;
  var result = false;
  _(biggieStr.length).times(function(i) {
    copyThingy = biggieStr.split('');
    copyThingy.splice(i, 1)
    if (copyThingy.join('') === lilStr) {
      result = true;
    }
  })
  return result;
}

function canAddCharToLilStringToMatch(a, b) {
  var biggieAndSmally = biggerAndLil(a, b);
  var biggieStr = biggieAndSmally[0];
  var lilStr = biggieAndSmally[1];
  
  while (lilStr) {
    var lilStrSp = lilStr.split('');
    // lilStrSp.splice(0, 1);
    var toRemove = biggieStr.indexOf(lilStrSp.splice(0, 1)[0]);
    lilStr = lilStrSp.join('');
    if(toRemove !== -1) {
      var biggieStrSpSpl = biggieStr.split('').splice(toRemove,1);
      biggieStr =  biggieStrSpSpl.join('');
    }
  }
  
  if(biggieStr.length === 1) {
    return true;
  } else {
    return false;
  }
}

function biggerAndLil (a, b) {
  if (b.length > a.length) {
    return [b, a];
  } else {
    return [a, b];
  }
}