const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log ("✅✅Assertion Passed:");
  }
  else {
    console.log("🛑🛑Assertion Failed");
  }
  
};
assertEqual("6", "2");
  assertEqual(1, 1);

const findKey = function (object, callback) {
  let objectAsArray = object.entries(object)
  for (let item of objectAsArray) // loop through array
  if (callback(item)[0]) {
    return item[0] //return the item we need
  }
}
