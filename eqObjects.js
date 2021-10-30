

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log ("✅✅Assertion Passed:");
  }
  else {
    console.log("🛑🛑Assertion Failed");
  }
  
};



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


  const eqObjects = function(object1, object2) {
    
    
    
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    }
    else {
      for (let i in object1) {
        if (Object.keys(object1[i]) !== Object.keys(object2[i])) {
          return false;
        }
        return true; 


      } 
    } 

    
        

        }

      
    
  
  const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba)





