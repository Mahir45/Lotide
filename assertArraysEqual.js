const eqArrays = require('./eqArrays');
 {
   const assertArraysEqual = function (actual, expected) 
   const answer = eqArrays(actual, expected);
  if (actual === expected) {
    console.log ("✅✅Assertion Passed:");
  }
  else {
    console.log("🛑🛑Assertion Failed");
  }
  
};
module.exports = assertArraysEqual 
