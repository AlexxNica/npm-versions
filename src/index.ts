'use strict';

import * as RegClient from 'npm-registry-client';
import * as semver from 'semver';
import * as chalk from 'chalk';
import * as commander from 'commander';

// const packageName = (typeof process.argv[2] === 'string') && process.argv[2];
const client = new RegClient({});
const uri = "https://registry.npmjs.org/npm";
const params = {
  timeout: 1000,
  // package: packageName,
  auth: {},
}

commander
  .version('0.0.1')
  .usage('<packageName> [otherPackages...] [options]')
  .arguments('<packageName> [otherPackages...]')
  .option('--no-unstable', 'exclude unstable versions');

commander.action(function(packageName, otherPackages) {
  // Check if at least one package has been specified.
  console.log(packageName);
  if (typeof packageName === 'undefined') {
    console.error('no package specified!');
    process.exit(1);
  }

  console.log('npm-versions %s', packageName);
  if (otherPackages) {
    otherPackages.forEach(function(packageName) {
      console.log('npm-versions %s', packageName);
    });
  }
});

// Command handler
commander.on('--help', function () {
  console.log('  Examples:');
  console.log('');
  console.log('    $ custom-help --help');
  console.log('    $ custom-help -h');
  console.log('');
});

commander.parse(process.argv);

// client.distTags.fetch(uri, params, function(error, data, raw, res) {
//   const dataArray = (<any>Object).entries(data);
//   const versionsListDummy: string[] = [];

//   for (const prop in data) {
//     versionsListDummy.push(`${data[prop]} - ${prop}`);
//   };

//   const versionsList = versionsListDummy.reduce(function (accumulator, currentValue) {
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
