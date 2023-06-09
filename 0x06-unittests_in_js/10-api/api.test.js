const { expect } = require('chai');
const request = require('request');

describe('Index Page', () => {
  it('should respond with the correct status code', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it('should have the correct content of the body', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(body).to.contain('Welcome to the payment system');
    });
  });

  it('should have the corrent Content-Type', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });

  it('should have the corrent Content-Length', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(res.headers['content-length']).to.equal('29');
    });
  });
});

describe('Cart Page', () => {
  it('should have correst Status Code with num id param', () => {
    request('http://localhost:7865', (error, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it('should have the correct result with number id parameter', () => {
    request('http://localhost:7865/cart/12', (error, res, body) => {
      expect(body).to.contain('Payment methods for cart 12');
    });
  });

  it('should have the correct status code when non number id parameter is provided', () => {
    request('http://localhost:7865/cart/hello', (error, res, body) => {
      expect(res.statusCode).to.equal(404);
    });
  });

  it('should return the correct content-type given valid id parameter', () => {
    request('http://localhost:7865/cart/12', (error, res, body) => {
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
    });
  });

  it('should return the correct content in the body when non number id is provided', () => {
    request('http://localhost:7865/cart/hello', (error, res, body) => {
      expect(body).to.contain('Cannot GET /cart/hello');
    });
  });

  it('should return the correct content length', () => {
    request('http://localhost:7865/cart/12', (error, res, body) => {
      expect(res.headers['content-length']).to.equal('27');
    });
  });
describe('POST/Login', () => {
    it('should have correct Status Code', (done) => {
        // request('http://localhost:7865/login', (error, res, body) => {
        // expect(res.statusCode).to.equal(200);
        // expect(body).to.equal('Welcome to the payment system')
        request.post({
            url: "http://localhost:7865/login",
            json: true,
            body: { 
                userName: "Betty"
            },
        },
        (error, response, body) => {
        // checking the response body
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        //End  test
        done();
        });
    });
    
    });

describe("GET /available_payments", function () {
  it("call GET /available_payments, test the statuscode and return value", function (done) {
    request(
      "http://localhost:7865/available_payments",
      (error, response, body) => {
        expect(response.statusCode).to.deep.equal(200);
        expect(body).to.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}'
        );
        done();
      }
    );
  });
});
});

