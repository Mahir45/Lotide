const mode = function(arr) {
  let largestNum = {}
  for (let element of arr) {
    if (!largestNum[element]) {
        largestNum[element] = 1
    }else {
      largestNum[element] += 1;
    }
  }
  let highestNum = 0
  let highestNumKey = 0
  for (let key in largestNum) {
  if (largestNum[key] > highestNum) {
    highestNum = largestNum[key]
    highestNumKey = key
  }
  }return highestNumKey;
  
}

console.log(mode([1,2,2,3,4]))