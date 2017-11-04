#!/usr/bin/env node
'use strict';

import * as yargs from 'yargs';
import getPackage from './package';
import log from './log';

const packages = yargs.argv._;

export default yargs
  .usage('Usage: <packageName> [otherPackages...] [options]')
  .example('', '')
  .count('verbose')
  .alias('v', 'verbose')
  .demandCommand(1)
  .command('$0', 'the default command', (yargs): any => {
    if (typeof packages === 'undefined' || !packages.length){
      return log.error('You need to pass at least one package name to the command.');
    }
    (async () => {
      // console.log(packages);
      for (let pkg of packages) {
        console.log(getPackage(pkg));
        // await getPackage(pkg).then(function(versionsList){
        //   console.log();
        //   console.log(`Latest verisons of the package :`);
        //   console.log(versionsList);
        // })
        // .catch((reason) => {
        //   console.warn('Handle rejected promise (' + reason + ') here.');
        // });
      };
    })();
  })
  .argv;
