
const eqArrays = require('./eqArrays');


const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`${arr1} === ${arr2}`)
  } else {
    console.log (`${arr1} !== ${arr2}`)
  }
}


const places = ["ground", "control", "to", "major", "tom"];
  const map = function(value1, value2){ // arg1 is the array itself while
     // arg2 is the callback function
    const answer = [] // an empty array to out results in
    for (let item of value1) {
    answer .push(value2(item))
   return answer
    }
  }
  const results1 = map(places, word => word[0]);
console.log(results1);