#!/usr/bin/env node
'use strict';

import * as yargs from 'yargs';
import * as chalk from 'chalk';
import * as semver from 'semver';
import { Options } from './DefaultInterfaces';
import utils from './utils';
import log from './log';
import packageModule from './package';

const packages = yargs.argv._;
const options: Options = {};

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
      for (let pkg of packages) {
        packageModule.getPackage(pkg).then((html) => {
          const parsedHtml = JSON.parse(html);
          const parsedHtmlArray = Object.entries(parsedHtml);
          const parsedSortedValues = Object.values(parsedHtml).sort(semver.rcompare);
          const packageResult = [];
          let packageResultObject = {};

          utils.reSortToArray(
            parsedHtml,
            parsedSortedValues
          ).then((packagesSorted) => {
            const pkgResult = [];
            for (const res of packagesSorted) {
              const versionName = res[0];
              const versionValue = res[1];
              pkgResult.push(`${(<any>chalk).bold.blueBright(versionName)}: ${versionValue}`);
            }
            return pkgResult;
          }).then((packagesFormatted) => {
            const versionsList = packagesFormatted.reduce((accumulator, currentValue) => {
              return `${accumulator} ${(<any>chalk).black('|')} ${currentValue}`;
            });
            log.log(`${(<any>chalk).bold.yellowBright(pkg)} -> ${versionsList}`);
          }).catch((error) => {
            log.log(`Error: ${error}`);
          });
        });
      };
    })();
  })
  .argv;
