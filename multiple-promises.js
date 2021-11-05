/* 
Create a function all that accepts two promises as arguments. This all
function should do all of the following:

Create an internal promise in whatever way you see fit.

Create a counter variable with initial value of 0.

Attach then fulfillment handlers to both promises and increment the internal
counter when the handlers are called.

When the counter reaches 2, fulfill the internal promise with an array
containing both values.

Finally return that internal promise to the user.

After you finish writing your all function, pass getPromise1() and
getPromise2() into your new function and then attach console.log as a
fulfillment handler to the promise returned by your function. These two
promise-returning functions will be provided to you in the global scope.
*/
'use strict'

function all(promiseOne, promiseTwo) {
  let counter = 0;
  let fulfillArr = [];
  return new Promise((fulfill, reject) => {
    promiseOne.then((returnVal) => {
      //solution only verifies if returned promises are in order: [promiseOne, promiseTwo]
      //That means .push won't work here, need to use array indices to ensure order
      fulfillArr[0]= returnVal;
      counter++;
      //counter check needs to be in the fulfillment handlers, because they're being performed asynchronously
      if (counter >= 2) {
        fulfill(fulfillArr)
      }
    });
    promiseTwo.then((returnVal) => {
      fulfillArr[1]= returnVal;
      counter++;
      if (counter >= 2) {
        fulfill(fulfillArr)
      }
    });
  })
};
all(getPromise1(), getPromise2()).then(console.log);
