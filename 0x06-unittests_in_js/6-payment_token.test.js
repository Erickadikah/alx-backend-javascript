const chai = require('chai')
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token')

describe('getPaymentTokenFromAPI', () => {
    it('Successfull response from the API data', () => {
        const res = getPaymentTokenFromAPI()
       expect(res).to.be.an.instanceof(Promise);
    });
    //returns true 
    it('should return a json data object {data: "Successfull response from the API"}', () => {
      getPaymentTokenFromAPI(true) 
      .then((res) => {
        expect(res.data).to.be.equal('Successful response from the API');
        done();
      });
    });
    //test to make the  api doesnothing 
    it('should do nothing when not success', () => {
    getPaymentTokenFromAPI(false)
    .then((res) => {
    expect(res).to.equal('');
    });
   });
});