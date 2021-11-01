
   
const eqArray = require("./eqArray");




const assertArraysEqual = function (arr1, arr2) {
  if (eqArray(arr1, arr2)) {
    console.log(`✅✅ ${arr1} === ${arr2}`)
  } else {
    console.log(`🛑🛑 ${arr1} !== ${arr2}`)
  }
}
let arr1 = [1, 2, 3, 4, 4]
let arr2 = [1, 2, 3, 4, 4]
assertArraysEqual (arr1, arr2)
module.exports = assertArraysEqual






 
