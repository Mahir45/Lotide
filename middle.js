const middle = function(array) {
  if (array.length % 2 === 0) {

    let midEven = array[Math.floor((array.length - 1)/ 2)];
    let midNum = array[Math.floor((array.length) / 2)];
    return [midEven, midNum]
  } else {
    let midNum = array[Math.floor((array.length) / 2)];
  
    return midNum
  }
}

console.log(middle([1, 2, 7, 3]))