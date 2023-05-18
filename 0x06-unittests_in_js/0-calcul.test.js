const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("claculateNumber", function() {
  it("Should round the variables and return the sum", function() {
    assert.equal(calculateNumber(2.1, 3.4), 5);
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1.4, 4.5), 6);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(0, 3.7), 4);
  });
});
