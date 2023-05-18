// Test file for 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should calculate the sum of two numbers', () => {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

});
