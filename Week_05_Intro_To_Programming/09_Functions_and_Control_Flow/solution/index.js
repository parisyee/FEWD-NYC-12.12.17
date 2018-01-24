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


function fahrenheitToCelsius(temp) {
  return (temp - 32) * (5/9);
}
console.log(`fahrenheitToCelsius(32): ${fahrenheitToCelsius(32)}`);
console.log(`fahrenheitToCelsius(68): ${fahrenheitToCelsius(68)}`);


function celsiusToFahrenheit(temp) {
  return (temp * 9/5) + 32;
}
console.log(`celsiusToFahrenheit(100): ${celsiusToFahrenheit(100)}`);
console.log(`celsiusToFahrenheit(37): ${celsiusToFahrenheit(37)}`);


function hypotenuse(a, b) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
console.log(`hypotenuse(3, 4): ${hypotenuse(3, 4)}`);
console.log(`hypotenuse(6, 8): ${hypotenuse(6, 8)}`);


function volume(a, b, c) {
  return a * b * c;
}


function troll(str) {
  return str.replace(/[Cc]rossfit/g, 'jellyfish fishing');
}
console.log(`troll('I love crossfit!'): ${troll('I love crossfit!')}`);
console.log(`troll('My crossfit instructor is so crossfit'): ${troll('My crossfit instructor is so crossfit')}`);

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


function calculate(operation, x, y) {
  if (operation === '+') {
    return x + y;
  } else if (operation === '-') {
    return x - y;
  } else if (operation === '*') {
    return x * y;
  } else if (operation === '/') {
    return x / y;
  }
}
console.log(`calculate('+', 5, 6): ${calculate('+', 5, 6)}`);
console.log(`calculate('/', 77, 7): ${calculate('/', 77, 7)}`);


function letterGrade(score, total) {
  var percentage = (score / total) * 100;
  var grade;

  if (percentage >= 90) {
    grade = 'A';
  } else if (percentage < 90 && percentage >= 80) {
    grade = 'B';
  } else if (percentage < 80 && percentage >= 70) {
    grade = 'C';
  } else if (percentage < 70 && percentage >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  return grade;
}
console.log(`letterGrade(44, 55): ${letterGrade(44, 55)}`);
console.log(`letterGrade(218, 500): ${letterGrade(218, 500)}`);


function convertTemperature(temp, scale) {
  if (scale === 'f') {
    return fahrenheitToCelsius(temp);
  } else if (scale === 'c') {
    return celsiusToFahrenheit(temp);
  }
}
console.log(`convertTemperature(98, 'f'): ${convertTemperature(98, 'f')}`);
console.log(`convertTemperature(100, 'c'): ${convertTemperature(100, 'c')}`);
