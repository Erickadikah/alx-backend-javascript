const chai = require("chai");
const expect = chai.expect;
const request = require('supertest');
const app = require('./api');

describe('Index Page', function() {
  it('should have correct status code 200', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('should return 200 status code and correct message', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.text).to.contain('Welcome to the payment system');
        done();
      });
  });

  it('should have the correct Content-Type', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
        done();
      });
  });

  it('should have the correct Content-Length', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.headers['content-length']).to.equal('29');
        done();
      });
  });
});


