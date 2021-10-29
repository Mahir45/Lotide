const eqArrays = require('./eqArrays');
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅ ${arr1} === ${arr2}`)
  } else {
    console.log(`🛑🛑 ${arr1} !== ${arr2}`)
  }
}
 
 
 
 const takeUntil = function(array, callback) {
  let truthy = []
  for (let i of array){
    if (callback === false){
      truthy.push(i)
    } break;
  } return truthy;
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
