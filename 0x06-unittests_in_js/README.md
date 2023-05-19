# Unittest in JS

## Resources:books:
Read or watch:
* [Mocha documentation](https://intranet.hbtn.io/rltoken/4Q4X0Q8QX6X3X2Q2Q4Q4jw)
* [Chai](https://intranet.hbtn.io/rltoken/4Q4X0Q8QX6X3X2Q2Q4Q4jw)
* [Sinon](https://intranet.hbtn.io/rltoken/4Q4X0Q8QX6X3X2Q2Q4Q4jw)
* [Express](https://intranet.hbtn.io/rltoken/4Q4X0Q8QX6X3X2Q2Q4Q4jw)
* [Request](https://intranet.hbtn.io/rltoken/4Q4X0Q8QX6X3X2Q2Q4Q4jw)
* [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://intranet.hbtn.io/rltoken/4Q4X0Q8QX6X3X2Q2Q4Q4jw)
* [Unit Testing with NodeJS](https://intranet.hbtn.io/rltoken/4Q4X0Q8QX6X3X2Q2Q4Q4jw)
* [Introduction to Express](https://intranet.hbtn.io/rltoken/4Q4X0Q8QX6X3X2Q2Q4Q4jw)

---
## Mocha, Chai, Sinon

### [0. Basic test with Mocha and Node assertion library](./package.json)
* Install Mocha and Node assertion library

### [1. Combining descriptions](./1-calcul_chai.js)
* Write a test file with the following requirements:

### [2. Basic test using Chai assertion library](./2-calcul_chai.js)

* Write a test file with the following requirements:

### [3. Spies](./3-payment.js)

* Write a test file with the following requirements:

### [4. Stubs](./4-payment.js)

* Write a test file with the following requirements:

### [5. Hooks](./5-payment_token.test.js)

* Write a test file with the following requirements:

### [6. Async tests with done](./6-payment_token.test.js)

* Write a test file with the following requirements:

## [7.Skip tests](./7-skip.test.js)

## [8. Basic Integration testing](./8-api/api.js)
in this task we will add a new route:
used SuperTest to test the route mostly for Node.js HTTP servers
```bash
npm install supertest --save-dev
```
this was the test HTTP request:
```bash
const request = require('supertest');
const app = require('./api');
