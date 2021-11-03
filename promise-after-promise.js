/* 
Two functions will be provided as global functions that you can use: first
and second.

Call the first function in your program. first() will return a promise that
will be fulfilled with a secret value.

Call the second with the fulfilled value of first. Return the promise returned
by second in your onFulfilled callback.

Finally, print the fulfilled value of that new promise with console.log
*/
'use strict'

const firstPromise = first();
//first() has been called, second() will return another promise, secondPromise
const secondPromise = firstPromise.then((value) => second(value)); //returning second() with return value of first() passed in using implicit return

secondPromise.then(console.log);

/*
Alternatively:
first().then(second).then(console.log)
*/