const chai = require('chai');
const expect = chai.expect;
const claculateNumber = require('./2-calcul_chai');

describe("claculateNumber", function() {
  it("Should round the variables and return the sum, devide, add, subtract", function() {
    expect(claculateNumber('SUM',1.4, 4.5)).to.equal(6);
    expect(claculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(claculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(claculateNumber('DIVIDE', 1.4, 0)).to.equal ('Error');
  });
});