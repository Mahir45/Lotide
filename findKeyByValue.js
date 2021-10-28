const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log ("✅✅Assertion Passed:");
  }
  else {
    console.log("🛑🛑Assertion Failed");
  }
  
};

const findKeyByValue = function(obj, value) {
  const array = Object.keys(bestTVShowsByGenre);
  const answer = 'The Wire';
  let foundKey = '';
  for (i = 0; i < array.length; i++) {
  if (bestTVShowsByGenre[array[i]] === answer) {
  foundKey = array[i];
   break;
}

}
return foundKey
}
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);