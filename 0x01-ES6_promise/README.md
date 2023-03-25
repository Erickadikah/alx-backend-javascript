# 0x01. ES6 Promises

<p>Promises came along to solve the problems of callback functions. A promise takes in two functions as parameters. That is, resolve and reject. Remember that resolve is success, and reject is for when an error occurs.</p>

## example

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
