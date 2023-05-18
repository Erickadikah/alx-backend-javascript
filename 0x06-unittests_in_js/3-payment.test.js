const sinon = require("sinon");
const Utils = require('./utils');
const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

describe('sendPaymentRequestToApi', function() {
  it('should log the correct total', function() {
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    chai.expect(spy.calledWith('The total is: 120')).to.be.true;
    chai.expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    spy.restore();
    calculateNumberSpy.restore();//stops tracking function
     // Restore the spy after the test
  });
});

// sendPaymentRequestToApi(100, 20);
// console.log(calculateNumberSpy.calledWith('SUM', 100, 20));