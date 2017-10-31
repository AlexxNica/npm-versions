'use strict';

import * as RegClient from 'npm-registry-client';
import * as semver from 'semver';
import * as chalk from 'chalk';

const packageName = (typeof process.argv[2] === 'string') && process.argv[2];
const client = new RegClient({});
const uri = "https://registry.npmjs.org/npm";
const params = {
  timeout: 1000,
  package: packageName,
  auth: {},
}

client.distTags.fetch(uri, params, function (error, data, raw, res) {
  const dataArray = (<any>Object).entries(data);
  const versionsListDummy: string[] = [];

  for (const prop in data) {
    versionsListDummy.push(`${data[prop]} - ${prop}`);
  };

  const versionsList = versionsListDummy.reduce(function (accumulator, currentValue) {
    return accumulator + '\n' + currentValue;
  });

  console.log();
  console.log((<any>chalk).grey('Argument passed through CLI: ' + process.argv[2]));
  console.log((<any>chalk).bold.blueBright(`LATEST VERSIONS OF THE PACKAGE '${packageName}':`));
      console.log((<any>chalk).greenBright(
        (<any>Object).values(data).sort(semver.rcompare)[0])
        + ' - Highest version regardless of channel: '
      );
  console.log(versionsList);
});
