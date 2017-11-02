#!/usr/bin/env node
'use strict';

import * as RegClient from 'npm-registry-client';
import * as semver from 'semver';
import * as chalk from 'chalk';
import * as yargs from 'yargs';

// const packageName = (typeof process.argv[2] === 'string') && process.argv[2];
/* const client = new RegClient({});
const uri = 'https://registry.npmjs.org/npm';
const params = {
  timeout: 1000,
  // package: packageName,
  auth: {},
} */

const options = {
  client: new RegClient({}),
  uri: 'https://registry.npmjs.org/npm',
  params: {
    timeout: 1000,
    // package: packageName,
    auth: {},
  },
}

yargs
  .usage('Usage: <packageName> [otherPackages...] [options]')
  .example('', '')
  .count('verbose')
  .alias('v', 'verbose')
  .demandCommand(1)
  .command('$0', 'the default command', (yargs): any => {
    console.log('this command will be run by default')
  })
  .argv;

console.log(yargs.argv);

const log = {
  verboseLevel: yargs.argv.verbose,
  warn: function (message) {
    return console.warn(`warn - ${this.verboseLevel}\n${message}`);
  },

  info: function (message) {
    return console.info(`info - ${this.verboseLevel}\n${message}`);
  },

  debug: function (message) {
    return console.debug(`debug - ${this.verboseLevel}\n${message}`);
  },

  error: function (message) {
    return console.error(`error - ${this.verboseLevel}\n${message}`);
  },
};

log.warn('Showing only important stuff');
log.info('Showing semi-important stuff too');
log.debug('Extra chatty mode');

// commander
//   .version('0.0.1')
//   .arguments('<packageName> [otherPackages...]')
//   .option('--no-unstable', 'exclude unstable versions');

// commander.action((packageName, otherPackages) => {
//   // Check if at least one package has been specified.
//   // console.log(packageName);
//   console.log(process.argv.slice(2).length);
//   if (typeof packageName === 'undefined') {
//     console.error('no package specified!');
//     process.exit(1);
//   }

//   // (typeof packageName === 'undefined') || console.error('part1!') || console.log('part2');

//   console.log('npm-versions %s', packageName);
//   if (otherPackages) {
//     otherPackages.forEach((packageName) => {
//       console.log('npm-versions %s', packageName);
//     });
//   }
// });

// // Command handler
// commander.on('--help', () => {
//   console.log('  Examples:');
//   console.log('');
//   console.log('    $ custom-help --help');
//   console.log('    $ custom-help -h');
//   console.log('');
// });

// commander.parse(process.argv);

// client.distTags.fetch(uri, params, (error, data, raw, res) => {
//   const dataArray = (<any>Object).entries(data);
//   const versionsListDummy: string[] = [];

//   for (const prop in data) {
//     versionsListDummy.push(`${data[prop]} - ${prop}`);
//   };

//   const versionsList = versionsListDummy.reduce((accumulator, currentValue) => {
//     return accumulator + '\n' + currentValue;
//   });

//   //return versionsList;
//   console.log();
//   console.log((<any>chalk).grey('Argument passed through CLI: ' + process.argv[2]));
//   console.log((<any>chalk).bold.blueBright(`LATEST VERSIONS OF THE PACKAGE '${packageName}':`));
//   console.log((<any>chalk).greenBright(
//     (<any>Object).values(data).sort(semver.rcompare)[0])
//     + ' - Highest version regardless of channel '
//   );
//   console.log(versionsList);
// });


/*****************/
/* Code Examples */
/*****************/

/* Avoiding duplicate warnings */
// function emitMyWarning() {
//   if (!emitMyWarning.warned) {
//     emitMyWarning.warned = true;
//     process.emitWarning('Only warn once!');
//   }
// }
// emitMyWarning();
// Emits: (node: 56339) Warning: Only warn once!
// emitMyWarning();
// Emits nothing

/* Emit a warning using an Error object. */
// const myWarning = new Error('Something happened!');
// Use the Error name property to specify the type name
// myWarning.name = 'CustomWarning';
// myWarning.code = 'WARN001';
// process.emitWarning(myWarning);
// Emits: (node:56338) [WARN001] CustomWarning: Something happened!

/* Error emitter */
// process.emitWarning('Something happened!', {
//   code: 'MY_WARNING',
//   detail: 'This is some additional information'
// });

/* Error handling */
// process.on('warning', (warning) => {
//   console.warn(warning.name);    // 'Warning'
//   console.warn(warning.message); // 'Something happened!'
//   console.warn(warning.code);    // 'MY_WARNING'
//   console.warn(warning.stack);   // Stack trace
//   console.warn(warning.detail);  // 'This is some additional information'
// });
