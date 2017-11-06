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

const regex = (arg) => {
  const regexFormula = /(?:[0-9]+)/gi;
  return arg.match(regexFormula).toString().replace(/\,/g, '');

};

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
          // console.log(semver.valid('0.3.13a'));
          // const parsedSortedValues = Object.values(parsedHtml).sort(semver.rcompare);
          const parsedSortedValues = Object.values(['1.5.0', '9.0.2.3', '0.3.13a', '14.59.9o.a.p.']).sort( (a, b): any => {
            const aFormatted = parseInt(regex(a), 10);
            const bFormatted = parseInt(regex(b), 10);
            return aFormatted - bFormatted;
            // const d = [];
            // d.push([a, regex(a)]);
            // d.push([b, regex(b)]);
            // console.log(d);
            // return regex(a) + regex(b);
            // console.log(`a: ${parseInt(regex(a), 10)}`);
            // console.log(`b: ${parseInt(regex(b), 10)}`);
            // if (aFormatted < bFormatted) {
            //   return b;
            // }
            // if (aFormatted > bFormatted) {
            //   return a;
            // }
            // return 0;
          });
          console.log(parsedSortedValues);
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
