/* 
Fetch JSON from [http://](http://) and console.log it.
NOTE: these instructions don't include URL to send request. Look in the issues, it's: 
  http://localhost:1337

There are several things you will want to know:
  * `q-io`'s `http` module has a `read` method which returns a promise for the content of a successful 
  (status 200) HTTP request.
  * Parse the returned JSON and `console.log` it for much win.
*/
'use strict'

const http = require('q-io/http');

http.read('http://localhost:1337').then((json) => {
  console.log(JSON.parse(json));
}).catch(err => console.log(err));
