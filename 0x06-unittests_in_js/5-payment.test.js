// const Utils = require('./utils');
const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleSpy;// accesssed by both methods to calculate for both function to get expected output

  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleSpy.restore();
  });

  it('should log the correct total for 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    sinon.assert.calledOnce(consoleSpy);
  });

  it('should log the correct total for 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    sinon.assert.calledOnce(consoleSpy);
  });
});
