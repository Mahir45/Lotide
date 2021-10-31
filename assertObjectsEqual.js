const eqObjects = function(object1, object2) {
    
 
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let i in object1) {
  
      if (object1[i] !== object2[i]){
        return false;
      }
      }  
      
      return true;
  }
  
    
    }


    const assertObjectsEqual = function(actual, expected) {
      const inspect = require('util').inspect; 
      const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
    

