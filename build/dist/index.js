#!/usr/bin/env node
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var RegClient = require("npm-registry-client");
var yargs = require("yargs");
// const packageName = (typeof process.argv[2] === 'string') && process.argv[2];
/* const client = new RegClient({});
const uri = 'https://registry.npmjs.org/npm';
const params = {
  timeout: 1000,
  // package: packageName,
  auth: {},
} */
var options = {
    client: new RegClient({}),
    uri: 'https://registry.npmjs.org/npm',
    params: {
        timeout: 1000,
        // package: packageName,
        auth: {},
    },
};
yargs
    .usage('Usage: <packageName> [otherPackages...] [options]')
    .example('', '')
    .count('verbose')
    .alias('v', 'verbose')
    .demandCommand(1)
    .command('$0', 'the default command', function (yargs) {
    console.log('this command will be run by default');
})
    .argv;
console.log(yargs.argv);
var log = {
    warn: function (args) {
        return 'warn';
    },
    info: function (args) {
        return 'info';
    },
    debug: function (args) {
        return 'debug';
    }
};
console.log(log.constructor);
// if (typeof actions[action] !== 'function') {
//   throw new Error('Invalid action.');
// }
// return actions[action]();
log.warn('Showing only important stuff');
log.info('Showing semi-important stuff too');
log.debug('Extra chatty mode');
//# sourceMappingURL=index.js.map