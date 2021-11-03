/* 
We don’t have any specific task we’d like to assign to you for this lesson.
Feel free to explore all three functions at your own pace. When you are
preparing to submit though, make sure you are using at least catch and one
of Promise.resolve and Promise.reject
*/
'use strict'

//Random number between 100-1000, in increments of 100
function getNum() {
 return (Math.floor(Math.random() * 10) + 1) * 100
};
let message = `Random error message  #${getNum()}`;
//Using Promise.reject to get the error message
let promise = Promise.reject(new Error(message));
promise.catch((err) => console.log(err.message));
//Using Promise.resolve
//const promiseWithResolve = Promise.resolve('Success');
