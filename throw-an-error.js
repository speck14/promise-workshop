/* 
Some invalid JSON will be available on process.argv[2].

  * Build a function called `parsePromised` that creates a promise,performs `JSON.parse` in a `try`/`catch` block, 
and fulfills or rejects the promise depending on whether an error is thrown.
**Note:** your function should synchronously return the promise!
  * Build a sequence of steps like the ones shown above that catches any thrown errors and logs them to the console.
*/
'use strict'
const input = process.argv[2];

function parsePromised(data) {
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(data));
    } 
    catch(e) {
      reject(e);
    }
  });
}

parsePromised(input).catch(err => console.log(err.message));
//Official solution used a onReject function, called in a .then(null, onReject)