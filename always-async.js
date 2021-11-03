/* 
In this lesson, we are going to prove to ourselves that promises are always
asynchronous.

1)create a Promise
2)Immediately fulfill the promise with value of 'PROMISE VALUE'
3)After the creation of the promise, pass console.log as success handler to the promise
5)Print out 'MAIN PROGRAM' with console.log
6)If your script is successful, you should see “MAIN PROGRAM” before
“PROMISE VALUE”. (because .then isn't called until the next turn of the event loop, even though in this case Promise is resolved synchronously)
*/
'use strict'

const promise = new Promise((fullfil, reject) => {
  fullfil('PROMISE VALUE')
});
promise.then(console.log);
console.log('MAIN PROGRAM');