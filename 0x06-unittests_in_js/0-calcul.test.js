// Test file for 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should calculate 1 + 3 = 4', function(){
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('should calculate 1 + 3.7 = 5', function(){
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('should calculate 1.2 + 3.7 = 5', function(){
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('should calculate 1.5 + 3.7 = 4', function(){
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  });
