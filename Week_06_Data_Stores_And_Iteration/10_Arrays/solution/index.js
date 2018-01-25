// INCLUDES
function includes(arr, item) {
  return arr.indexOf(item) !== -1;
}
console.log(`includes([1,2,3,4], 3): ${includes([1,2,3,4], 3)}`);
console.log(`includes([1,2,3,4], 'salmon'): ${includes([1,2,3,4], 'salmon')}`);


// REVERSE
function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(`reverse('hi there'): ${reverse('hi there')}`);


// IS PALINDROME
function isPalindrome(str) {
  return str === reverse(str);
}
console.log(`isPalindrome('racecar'): ${isPalindrome('racecar')}`);
console.log(`isPalindrome('butter'): ${isPalindrome('butter')}`);


// REMOVE
function remove(arr, item) {
  if (arr.includes(item)) {
    var dup = arr.concat();
    dup.splice(arr.indexOf(item), 1);
    return dup;
  }
}
console.log(`remove([1,2,3,4], 2): ${remove([1,2,3,4], 2)})`);


// ADD TO END
function addToEnd(arr, item) {
  return arr.concat(item);
}
console.log(`addToEnd([1,2,3], 4): ${addToEnd([1,2,3,4])}`);


// SUM
function sum(arr) {
  var total = 0;
  arr.forEach(function(num) {
    total += num;
  });
  return total;
}
console.log(`sum([1,2,3,4]): ${sum([1,2,3,4])}`);


// MULTIPLY
function multiply(arr) {
  var product = 1;
  arr.forEach(function(num) {
    product *= num;
  });
  return product;
}
console.log(`multiply([1,2,3,4]): ${multiply([1,2,3,4])}`);


// CREATE ARRAY
function createArray(item, i) {
  var index = 0;
  var arr = [];
  while (index < i) {
    arr.push(item);
    index++;
  }
  return arr;
}
console.log(`createArray('eggs', 3): ${createArray('eggs', 3)}`);


// DIVISIBLE BY
function divisibleBy(arr, num) {
  var results = [];
  arr.forEach(function(i) {
    if (i % num === 0 && !results.includes(i)) {
      results.push(i);
    }
  });
  return results;
}
console.log(`divisibleBy([6,9,4,5,1,19,27,9], 3): ${divisibleBy([6,9,4,5,1,19,27,9], 3)}`);


// DUPLICATES
function duplicates(arr) {
  var dups = [];
  arr.forEach(function(reference, i) {
    for (var j = i + 1; j < arr.length; j++) {
      if (reference === arr[j] && !dups.includes(reference)) {
        dups.push(reference);
      }
    }
  });
  return dups;
};
console.log(`duplicates([6,9,4,5,1,1,1,19,27,9]): ${duplicates([6,9,4,5,1,1,1,19,27,9])}`);
