/* 
Let’s build a simple script to prove to ourselves that promises may only
resolve one time and all future attempts to resolve them will simply be ignored.

1) create a promise using Promise constructor
2)In the promise’s executor, immediately attempt to fulfill the promise with a
value of 'I FIRED'.
3)Then, after the fulfill call, immediately try to reject the promise with an
Error created with parameter 'I DID NOT FIRE'.
4)Create a onRejected function with error param that console.logs Error's message
5)Pass console.log and onRejected as success and rejection handlers, respectively
6)Your script should only log "I FIRED" and shouldn't log "I DID NOT FIRE"
*/
'use strict'

const promise = new Promise((fulfill, reject) => {
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
});

function onRejected (error) {
  console.log(error.message);
};

promise.then(console.log, onRejected);