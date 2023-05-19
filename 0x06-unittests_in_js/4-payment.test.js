const Utils = require('./utils');
const chai = require('chai');
const sinon = require('sinon')
const sendPaymentRequestToApi = require('./4-payment');

// const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
const calcstub = sinon.stub(Utils, 'calculateNumber')
calcstub.returns(10)
//sinon.stub
describe('sendPaymentRequestToApi', function() {
  it('should log the correct total', function() {
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    chai.expect(spy.calledWith('The total is: 10')).to.be.true;
    chai.expect(calcstub.calledWith('SUM', 100, 20)).to.be.true;
    spy.restore();
    calcstub.restore();//stops tracking function
     // Restore the spy after the test
  });
});