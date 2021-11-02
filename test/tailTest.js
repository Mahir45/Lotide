const tail = require('../tail');
const { it } = require('mocha');
const { assert } = require('chai');

// let people = ["you", "are", "goofy",]
// tail (people)

describe("#tail", () => {
  it("returns 3 for length of [1, 2, 3]", () => {
    assert.deepEqual((tail([1, 2, 3])).length, 2);
  });
  it("returns '6' for ['5', '6']", () => {
    assert.deepEqual((tail(['6', '5'])).length, 1); 
  }); 
  
});