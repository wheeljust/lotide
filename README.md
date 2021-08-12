# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @wheeljust/lotide`

**Require it:**

`const _ = require('@wheeljust/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: 
  * **description:** strict equal assertion only.
  
* `assertArraysEqual:` 
  * **description:** deep equal array only assertion.

* `assertObjectsEqual:` 
  * **description:** deep equal object assertion.

* `eqArrays:` 
  * **description:** Returns true when a set of given arrays are deeply equal

* `eqObjects:` 
  * **description:** Returns true when a set of two given objects are deeply equal

* `head:` 
  * **description:** Returns only the first element of an array

* `tail:` 
  * **description:** Returns a new array that excludes the first element
  
* `middle:` 
  * **description:** Middle returns the element(s) in the middle of an array
    * For arrays with an even number length, middle will return 2 numbers
    * For arrays with an odd number length, middle will return 1 number
    * For arrays with 2 or fewer elements, there is no middle, so function returns empty array []

* `flatten:` 
  * **description:** Pass any array to the function, including nested arrays, and the function will return an array where there is no nesting.  All of the primitive elements will still be in the array, but in un-nested format.

* `map:` 
  * **description:** Map applies a callback mapping function to an array, then eturns the newly mapped array. This is a simpler version of the array method 'map'.

* `without:` 
  * **description:** Returns a new array without the values that are specified in the itemsToRemove array, this is similar to the array method known as reject.

* `takeUntil:` 
  * **description:** This function takes in an array and returns the elements in order up until the stopping condition is met. The stop condition is passed the the function in the form of a callback.

* `countLetters:` 
  * **description:** Returns an object indicating the number of times each letter appears in the string argument.

* `letterPositions:` 
  * **description:** Returns an object with arrays of all of the index positions for each character in a given string.

* `countOnly:` 
  * **description:** Returns an object, the object contains the count of each specified parameter in the itemsToCount argument that is passed to the function.
    * allItems: an array of values to iterate through.
    * itemsToCount: an object specifying what values to keep count of.

* `findKey:` 
  * **description:** Return the key of the first instance where the key-value matches the requirement of the callback function. If no matching value is found then returns undefined.

* `findKeyByValue:` 
  * **description:** Returns the key from the object if the search value matches any of the values in the object.  If no matches, returns undefined.