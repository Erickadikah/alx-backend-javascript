# 0x01. ES6 Promises

<p>Promises came along to solve the problems of callback functions. A promise takes in two functions as parameters. That is, resolve and reject. Remember that resolve is success, and reject is for when an error occurs.</p>

## Example

const getData = (dataEndpoint) => {
   return new Promise ((resolve, reject) => {
     //some request to the endpoint;

     if(request is successful){
       //do something;
       resolve();
     }
     else if(there is an error){
       reject();
     }

   });
};

## What is Async and Await in JavaScript?

* The async keyword is used to define a function as asynchronous. When a function is defined as async, it always returns a promise.

* The await keyword is used to pause the execution of an async function until a promise is resolved. When you use await, the function will wait for the promise to resolve before moving on to the next line of code

* When an async function is called, it returns a promise. If the function returns a value, the promise will be resolved with that value. If the function throws an error, the promise will be rejected with that error.
