import * as https from 'https';
import * as chalk from 'chalk';

const fetch = (options) => {
  const opts = options || {};

  return https.get(options.registryUrl, async (res) => {
    res.on('data', (d) => {
      process.stdout.write(d);
    });

  }).on('error', (e) => {
    console.error((<any>chalk).bold.red('# Summary'));
    console.error('Error: Could not connect to the registry.');
    console.error();
    console.error((<any>chalk).bold.red('# Message'));
    console.error(e.message);
    console.error();
    console.error((<any>chalk).bold.red('# Stack'));
    console.error(e.stack);
  });
};

export default fetch;
