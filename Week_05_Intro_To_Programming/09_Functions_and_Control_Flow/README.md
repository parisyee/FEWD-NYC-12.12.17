# Lesson 09 - Functions and Control Flow

### Objectives
*After this lesson, students will be able to:*

- Understand what functions are used for in computer programming.
- Identify the components of a javascript function and describe their purposes.
- Write simple functions in javascript.
- Utilize control flow to create more powerful and complex functions.

## Lesson Notes

[View slides here](https://docs.google.com/presentation/d/1pBUQVaVVSvwjZ09X3HUl_6ODwwiRYpOny29T-u-Stb4/edit?usp=sharing)

## Independent Practice 1 - Basic Functions

1. Create a new Github repository called `js_functions_and_control_flow`.
2. Clone this repo to your local machine and create an `index.html` file with HTML boilerplate.
3. Create a `index.js` file and use a `script` tag to link it to your HTML file. This can be either in the `head` or `body` element.
4. In your `index.js` file, implement the following functions. Be sure to call these functions to test them out.

#### `combine(word1, word2)`
Joins two strings with a space.
**Parameters**
- `word1`: string
- `word2`: string

**Returns**
- string, joined the words joined with a space

---

#### `isEven(n)`
Returns true if n is even and false if it is odd.
**Parameters**
- `n`: number

**Returns**
- boolean, the number is even

---

#### `isOdd(n)`
Returns true if n is odd.
**Parameters**
- `n`: number

**Returns**
- boolean, the number is odd

---

#### `areEqual(a, b)`
Returns true if a and b are equal
**Parameters**
- `a`: number
- `b`: number

**Returns**
- boolean, the numbers are equal

---

#### `numberToString(Number)`
Converts a number a string.
**Parameters**
- `n`: number

**Returns**
- string, the number as a string

---

#### `add(n1, n2)`
Returns the sum of n1 and n2
**Parameters**
- `n1`: number
- `n2`: number

**Returns**
- number, the sum of n1 and n2

---

#### `introduce(firstName, lastName)`
Prints `'Hi my name is [firstName lastName]'` for given values.
**Parameters**
- `firstName`: string
- `lastName`: string

**Returns**
- undefined, does not return anything, just prints to console.

---

#### `hypotenuse(a, b)`
Returns the value of the hypotenuse of a right triangle with legs `a` and `b`.
**Parameters**
- `a`: number
- `b`: number

**Returns**
- number, the value of the hypotenuse

---

#### volume(a, b, c)
Returns the volume of a rectangular prism with sides of length `a`, `b` and `c`.
**Parameters**
- `a`: number
- `b`: number
- `c`: number

**Returns**
- number, the value of the volume

---

#### fahrenheitToCelsius(temp)
Returns the Celsius conversion of a Fahrenheit temperature.
**Parameters**
- `temp`: number

**Returns**
- number, the Celsius temperature

---

#### celsiusToFahrenheit(temp)
Returns the Fahrenheit conversion of a Celsius temperature.
**Parameters**
- `temp`: number

**Returns**
- number, the Fahrenheit temperature

---
#### `troll(sentence)`
Returns a string with every instance of the substring 'crossfit' replaced with the string 'jellyfish fishing'.
**Parameters**
- `message`: strings

**Returns**
- string, the new message

## Independent Practice 2 - Control Flow

Implement the following functions in the same `index.js` file.

#### `calculate(operation, x, y)`
Prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4". Returns the result.
**Parameters**
- `operation`: string, "add", "subtract", "multiply", or "divide"
- `x`: number
- `y`: number

**Returns**
- number, the result

---

#### `minimum(x, y)`
Returns the smallest value of two numbers.
**Parameters**
- `a`: number
- `b`: number

**Returns**
- number, the smallest number

---

#### `maximum(x, y)`
Returns the largest value of two numbers.
**Parameters**
- `a`: number
- `b`: number

**Returns**
- number, the largest number

---

#### `letterGrade(score, total)`
Returns a letter grade. "A": 90-100% "B": 80-89% "C": 70-79% "D": 60-69% "F": 0-59%
**Parameters**
- `score`: number
- `total`: number, maximum possible score

**Returns**
- string, the score represented as a letter grade

---

#### convertTemperature(temp, scale)
Returns the Fahrenheit conversion of a temperature if `scale` is `'f'` and returns the Celsius conversion of a temperature if `scale` is `'c'`.
**Parameters**
- `temp`: number
- `scale`: string

**Returns**
- number, the converted temperature
