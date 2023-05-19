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
        if (err) {
          done(err); // Handle the error and pass it to done()
        } else {
          done(); // Test passed, call done() without an error
        }
      });
  });

  it('should have the correct Content-Type', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        if (err) {
          done(err);
        } else {
          expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
          done();
        }
      });
  });

  it('should have the correct Content-Length', function(done) {
    request(app)
      .get('/')
      .end(function(err, res) {
        if (err) {
          done(err);
        } else {
          expect(res.headers['content-length']).to.equal('29');
          done();
        }
      });
  });

  it('should return 404 status code when :id is not a number', function(done) {
    const id = 'abc';
    request(app)
      .get(`/cart/${id}`)
      .expect(404)
      .end(function(err, res) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('should return statusCode 200 when :id is a number', function(done) {
    const id = 123;
    request(app)
      .get(`/cart/${id}`)
      .expect(200)
      .end(function(err, res) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});
