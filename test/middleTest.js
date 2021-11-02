const middle = require('../middle');
const { it } = require('mocha');
const { assert } = require('chai');


describe("#middle", () => {
  it("returns 2 for the middle of [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), 2);
  });
  it("returns '4' && '6' for the middle of [5, 6, 4, 8 ]", () => {
    assert.deepEqual(middle([5, 6, 4, 8]), [6, 4]); 
  });
});





