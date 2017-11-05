// var jsonPromise = new Promise(function (resolve, reject) {
//   resolve(JSON.parse(`{
//     "heading": "<h1>A story about something</h1>",
//     "chapterUrls": [
//       "chapter-1.json",
//       "chapter-2.json",
//       "chapter-3.json",
//       "chapter-4.json",
//       "chapter-5.json"
//     ]
//   }`));
// });

// jsonPromise.then(function (data) {
//   console.log('It worked!\n', data);
// }).catch(function (err) {
//   console.log('It failed!\n', err);
// }).then(function(){
//   console.log('Aftermath.');
// }).then(function(){
//   console.log('Another aftermath!');
// })

import * as querystring from 'querystring';
import * as https from 'https';

const options = {
  hostname: 'registry.npmjs.org',
  port: 443,
  path: '/-/package/babel-eslint/dist-tags',
  method: 'GET',
  headers: {
    'Accept': 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*',
  }
};

const req = https.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`problem with request: ${e.message}`);
});

req.end();

export default req;
