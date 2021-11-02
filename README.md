# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mahir45/lotide`

**Require it:**

`const _ = require('@mahir45/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `middle(...)`: returns the middle values in a array

* `tail(...)`: return the tail of an array

* `head(...)`: returns the first element of an array

`assertArraysEqual(...)`: returns true if passed arrays are equal and false if they are not

`assertEqual(...)`: compares two primitive values and returns true if they are equal

`assertObjectsEqual(...)`: takes two objects as parameters and returns true if they are equal

`countLetters(...) `: takes a string and returns an object with all listed unique letters and their counts

`countOnly(...)`: takes an array and a paramater - returns an object with the counts of matching elements in the array

`eqArrays(...)`: takes two arrays and returns true if they are equal

`eqObjects(...)`: takes two objects and returns true if they are equal
`findKeyByValue:(...)` takes and object and an argument and returns a key from the object if it matches the passed value

`findKeys(...)`: takes an object and a callback, returns first truthy value using the callback as a filter

`letterPositions(..)`: takes a string/sentence and returns an object with all the letter indexes

`map(...)`: takes an array and a callback and returns a newarray with elements of the original array which pass the callback function


`takeUntil(...)`: takes an array and a callback function, it returns the first part of the input array, which is decided with the callback function

`without`(...): takes an array and returns a new array without the "argument" element