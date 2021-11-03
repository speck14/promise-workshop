/* 
  * Create a function `alwaysThrows` that throws an `Error` withtext `"OH NOES"`;
  * Create a function `iterate` that prints the first argument(an integer) to it and then returns that argument + 1;
  * Create a promise chain using `Promise.resolve` that wraps your iterate method, 
    then a series of iterations that attempts to perform `iterate` a total of 10 times.
  * Attach a rejection handler at the bottom of your chain to print the`error.message` using `console.log`.
  * Insert a call to `alwaysThrows` after your 5th call of `iterate`
*/
'use strict'

function alwaysThrows () {
  throw new Error('OH NOES');
}

function iterate(num) {
  console.log(num);
  return num+= 1;
}

Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(err => console.log(err.message))