// Practice 1
function combine(word1, word2) {
  return `${word1} ${word2}`;
}
console.log(`combine('hi', 'there'): ${combine('hi', 'there')}`);


function isEven(n) {
  return n % 2 === 0;
}
console.log(`isEven(54): ${isEven(54)}`);
console.log(`isEven(999): ${isEven(999)}`);


function isOdd(n) {
  return n % 2 !== 0;
}
console.log(`isOdd(54): ${isOdd(54)}`);
console.log(`isOdd(999): ${isOdd(999)}`);


function areEqual(a, b) {
  return a === b;
}
console.log(`areEqual(5, 4): ${areEqual(5, 4)}`);
console.log(`areEqual(4, 4): ${areEqual(4, 4)}`);


function numberToString(n) {
  return (n).toString();
}
console.log(`numberToString(5): ${numberToString(5)}`);
console.log(`typeof(numberToString(5)): ${typeof(numberToString(5))}`);


function add(n1, n2) {
  return n1 + n2;
}
console.log(`add(77, 88): ${add(77, 88)}`);


function introduce(firstName, lastName) {
  console.log(`Hi my name is ${firstName} ${lastName}`);
}


function hypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
console.log(`hypotenuse(3, 4): ${hypotenuse(3, 4)}`);
console.log(`hypotenuse(6, 8): ${hypotenuse(6, 8)}`);


// Practice 2
function minimum(x, y) {
  return x < y ? x : y;
  // look up 'ternary statement'
}
console.log(`minimum(9, 15): ${minimum(9, 15)}`);
console.log(`minimum(22, 21): ${minimum(22, 21)}`);


function maximum(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
console.log(`maximum(9, 15): ${maximum(9, 15)}`);
console.log(`maximum(22, 21): ${maximum(22, 21)}`);
