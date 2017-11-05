import * as https from 'https';
import * as chalk from 'chalk';

const fetch = (options) => {
  const opts = options || {};
  const requestOptions = {
    hostname: '',
    port: 443,
    path: '',
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*',
    },
  }

  if (
    (typeof options.registryUrl === 'undefined' || options.registryUrl.length === 0)
    || (typeof options.packageName === 'undefined' || options.packageName.length === 0)
  ){
    return console.error('Error! The registry URL and package name must be set correctly.');
  }

  options.registryUrl = options.registryUrl.replace(/^(https)|(:\/\/)|(www)|(\/)$/ig, '');
  options.registryPath = `/-/package/${options.packageName}/dist-tags`;
  requestOptions.hostname = options.registryUrl;
  requestOptions.path = options.registryPath;

  const req = https.request(requestOptions, (res) => {
    res.setEncoding("utf8");
    var body = '';
    res.on('data', (d) => {
      body += d;
    });

    res.on('end', () => {
      var parsed = JSON.parse(body);
      console.log(parsed);
    });

    // console.log(parsedOne);

  }).on('error', (e) => {
    console.error((<any>chalk).bold.red('# Summary'));
    console.error('Error: Could not connect to the registry.');
    console.error();
    console.error((<any>chalk).bold.red('# Message'));
    console.error(e.message);
    console.error();
    console.error((<any>chalk).bold.red('# Stack'));
    console.error(e.stack);
  }).end();
};

export default fetch;
