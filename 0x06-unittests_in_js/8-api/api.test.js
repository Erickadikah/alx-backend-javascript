const chai = require("chai");
const expect = chai.expect;
const request = require('request');


describe('Index Page', function() {
  it('should have correct status code 200', function(done) {
    request('http://localhost:7865/', (error, response, body) => {
      if (error) throw error;
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system')
      done();
    });
      // .get('/')
      // .expect(200)
      // .end(function(err, res) {
      //   if (err) return done(err);
      //   done();
      });
  });