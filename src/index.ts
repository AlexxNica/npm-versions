'use strict';

import * as RegClient from 'npm-registry-client';
import * as semver from 'semver';
import * as chalk from 'chalk';

const packageName = process.env.CUSTOM_PACKAGE_NAME;
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
    versionsListDummy.push(`${prop} = ${data[prop]}`);
  };

  const versionsList = versionsListDummy.reduce(function (accumulator, currentValue) {
    return accumulator + '\n' + currentValue;
  });

  console.log();
  console.log((<any>chalk).blue(`LATEST VERSIONS OF THE PACKAGE '${packageName}':`));
  console.log(versionsList);
  console.log(
    // (<any>Object).values(data).sort(semver.rcompare)[0]
  );
});
