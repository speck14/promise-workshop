/* 
Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
executor after a delay of 300ms, using setTimeout.

Then, print the contents of the promise after it has been fulfilled by passing
console.log to then.
*/
'use strict'

const promise = new Promise(function(fulfill, reject) {
  setTimeout(() => fulfill('FULFILLED!'), 300)
  //ignoring error handling for now
});
//value of fulfill ('FULFILLED!') is passed in to .then as value
promise.then((value) => {
  console.log(value);
});