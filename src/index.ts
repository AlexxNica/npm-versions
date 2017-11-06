#!/usr/bin/env node
'use strict';

import * as yargs from 'yargs';
import * as chalk from 'chalk';
import * as semver from 'semver';
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
    (() => {
      // console.log(packages);
      for (let pkg of packages) {
        getPackage(pkg).then((html) => {
          const parsedHtml = JSON.parse(html);
          const parsedHtmlArray = Object.entries(parsedHtml);
          const packageResult = [];
          let packageResultObject = {};

          // parsedHtmlArray.forEach(([versionName, versionValue]) => {
          //   packageResult.push(`${(<any>chalk).bold.blueBright(versionName)}: ${versionValue}`);
          // });

          // const versionsList = packageResult.reduce((accumulator, currentValue) => {
          //   return `${accumulator} ${(<any>chalk).black('|')} ${currentValue}`;
          // });

          // console.log(
          //   Object.values(parsedHtml).sort(semver.rcompare)[0]
          // );

          console.log(`\`${pkg}\` - ${versionsList}`);
        });
      };
    })();
  })
  .argv;
