const assert = require('assert');
const claculateNumber = require('./1-calcul');

describe("claculateNumber", function() {
  it("Should round the variables and return the sum, devide, add, subtract", function() {
    assert.equal(claculateNumber('SUM',1.4, 4.5), 6);
    assert.equal(claculateNumber('SUBTRACT', 1.4, 4.5),-4);
    assert.equal(claculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.equal(claculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});