# Data Types, Variables, and Arrays

### Learning Objectives
- Understand what arrays are used for.
- Create arrays using array literal syntax.
- Become familiar with native array methods.
- Iterate through arrays using for loops and array iteration methods.

## Arrays

Unfortunately, strings and numbers are not enough for most programming purposes.
What is needed are collections of data that we can use efficiently, Arrays.

Arrays are great for:

* Storing data
* Enumerating data, i.e. using an index to find them
* Quickly reordering data

Arrays, ultimately, are a data structure that is similar in concept to a list. Each item in an array is called an element, and the collection can contain data of the same or different types. In JavaScript, they can dynamically grow and shrink in size.


```javascript
var friends = ['Moe', 'Larry', 'Curly'];
=> ['Moe', 'Larry', 'Curly']
```

Items in an array are stored in sequential order, and indexed starting at `0` and ending at `length - 1`.

```javascript
// First friend
var firstFriend = friends[0];
 => 'Moe'
// Get the last friend
var lastFriend = friends[2]
=> 'Curly'
```

We can even use strings like arrays:

```javascript
var friend = "bobby bottleservice";
// pick out first character
friend[0]
//=> 'b'
friend.length
```


## Working with Arrays

Using the JavaScript Keyword `new`, is one way of creating arrays:

```javascript
var a = new Array();
=> undefined

a[0] = 'dog';
=> "dog"

a[1] = 'cat';
=> "cat"

a[2] = 'hen';
=> "hen"

a
=> ['dog', 'cat', 'hen']

a.length;
=> 3
```

A more convenient notation is to use an array literal:

```javascript
var a = ['dog', 'cat', 'hen'];

a.length;
=> 3
```

#### Length method

The `length` method works in an interesting way in Javascript. It is always one more than the highest index in the array.

So `array.length` isn't necessarily the number of items in the array. Consider the following:

```javascript
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
a.length; // 101
```

**Remember**: the length of the array is one more than the highest index.

#### Getting data from an array

If you query a non-existent array index, you get `undefined`:

```javascript
var a = ['dog', 'cat', 'hen'];
=> undefined

typeof a[90];
=> undefined
```

#### Array helper methods

Arrays come with a number of methods. Here's a list of some popular helpers:

- `a.toString()` - Returns a string with the `toString()` of each element separated by commas.

- `a.pop()` - Removes and returns the last item.

- `a.push(item1, ..., itemN)` - `Push` adds one or more items to the end.

- `a.reverse()` - Reverse the array.

- `a.shift()` - Removes and returns the first item.

- `a.unshift([item])` - Prepends items to the start of the array.

Remember, though, you'll never remember _every_ method.  Explore the the [full documentation for array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and other helper methods given to you for particular objects.

## Independent Practice 1 - Array Basics

1. Create a new Github repository called `js_array_exercises`.
2. Clone this repo to your local machine and create an `index.html` file with HTML boilerplate.
3. Create a `index.js` file and use a `script` tag to link it to your HTML file. This can be either in the `head` or `body` element.
4. In your `index.js` file, implement the following functions. Be sure to call these functions to test them out.

#### `includes(arr, item)`
Returns true if `item` is included in `arr` and false if not.

**Parameters**
- `arr`: array
- `item`: anything

**Returns**
- boolean, whether or not `item` is included in `arr`.

---

#### `reverse(str)`
Returns the reverse of the provided string.

**Parameters**
- `str`: string

**Returns**
- string, the reversed string.

---

#### `isPalindrome(str)`
Returns true if `str` is a palindrome and false if not.

**Parameters**
- `str`: string

**Returns**
- boolean, whether or not the string is a palindrome.

---

#### `remove(arr, item)`
Returns a new array with item removed leaving the original `arr` unchanged.

**Parameters**
- `arr`: array
- `item`: anything

**Returns**
- array, a new array that does not include `item`.

---

#### `addToEnd(arr, item)`
Returns a new array that is a duplicate of `arr` with `item` added to the end. Original `arr` should remain unchanged.

**Parameters**
- `arr`: array
- `item`: anything

**Returns**
- array, a new array with `item` added to the end.

---

## Iterating Through an Array

Iterating through the elements of an array, one at a time, is a very common practice in programming.

We can use a `for` loop to iterate over the elements of an array like this:

```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
for (var i = 0; i < teams.length; i++) {
	console.log(teams[i]);
}
```

JavaScript arrays have several advanced _iterator methods_.

Several of these methods require a function be supplied as an argument, and the code you write in the function will be applied to _each_ item in the array, individually.

As an example, lets look at the `forEach` method that we can use instead of a `for` loop to iterate the elements:

```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
teams.forEach(function(el) {
    console.log(el);
});
```

This function would print the following to the console:

```javascript
Bruins
Cal Bears
Ravens
Ducks
```

Notice how much clearer this syntax is than that of the `for` loop?

Here are some other iterator methods for you to research and practice with:

- `Array.every()`
- `Array.some()`
- `Array.filter()`
- `Array.map()`


## Independent Practice 2 - Iterating Through Arrays

Implement the following functions in the same `index.js` file.

#### `sum(arr)`
Returns the sum of all of the numbers in the array.

**Parameters**
- `arr`: array of only numbers

**Returns**
- number, the sum of all the numbers in the array.

---

#### `multiply(arr)`
Returns the product of all of the numbers in the array.

**Parameters**
- `arr`: array of only numbers

**Returns**
- number, the product of all the numbers in the array.

---

#### `createArray(item, i)`
Returns an array of length `i` with `item` in each slot.

**Parameters**
- `item`: anything
- `i`: number (integer)

**Returns**
- array, an array of length `i` with `item` at every index.

---

#### `divisibleBy(arr, num)`
Returns an array of numbers from `arr` that are divisible by `num`.

**Parameters**
- `arr`: array of numbers
- `num`: number

**Returns**
- array, an array numbers from `arr` that are divisible by `num`

---

#### `duplicates(arr)`
Returns a new array that includes any items that appear more than once in `arr`.

**Parameters**
- `arr`: array

**Returns**
- array, an array containing the duplicates of `arr`.

---
