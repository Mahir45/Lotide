const assertEqual = require('./assertEqual');

const eqArray = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (let i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }console.log(false)
  }
  return true;
};



module.exports = eqArray;

