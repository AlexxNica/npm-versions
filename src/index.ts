'use strict';

import * as RegClient from 'npm-registry-client';

var client = new RegClient({});
var uri = "https://registry.npmjs.org/npm";
var params = { timeout: 1000, }

client.distTags.fetch(uri, params, function (error, data, raw, res) {
  // error is an error if there was a problem.
  // data is the parsed data object
  // raw is the json string
  // res is the response from couch
  console.log('### DATA ###');
  console.log(data);
  console.log('### DATA ###');
  console.log();
  console.log('### RAW ###');
  console.log(raw);
  console.log('### RAW ###');
});
