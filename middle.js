
const middle = function(array) {
  if (array.length % 2 === 0) {
    if (array.length <= 2) {
      return [];
    }
    let midEven = array[Math.floor((array.length - 1)/ 2)];
    let midNum = array[Math.floor((array.length) / 2)];
    return [midEven, midNum]
  } else {
    let midNum = array[Math.floor((array.length) / 2)];
  
    return midNum
  }
}
let arr1 = [1,6]
console.log(middle(arr1))


module.exports = middle
