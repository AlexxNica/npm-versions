import * as https from 'https';
import * as chalk from 'chalk';
import utils from './utils';

const fetch = (options) => {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      hostname: '',
      port: 443,
      path: '',
      method: 'GET',
      headers: {
        // https://github.com/npm/npm-registry-client#requests
        'Accept': 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*',
      },
    }

    if (
      (typeof options.registryUrl === 'undefined' || options.registryUrl.length === 0)
      || (typeof options.packageName === 'undefined' || options.packageName.length === 0)
    ) {
      return console.error('Error! The registry URL and package name must be set correctly.');
    }

    requestOptions.hostname = utils.getOnlyHostname(options.registryUrl);
    requestOptions.path = `/-/package/${options.packageName}/dist-tags`;

    const req = https.request(requestOptions, (res) => {
      const body = [];

      res.setEncoding('utf8');
      res.on('data', (d) => {
        body.push(d);
      });
      res.on('end', () => resolve(body.join('')));
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
  });
};

export default fetch;
