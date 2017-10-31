'use strict';

import * as RegClient from 'npm-registry-client';
import * as semver from 'semver';

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
  const versionsList: string[] = [];


  for (const prop in data) {
    versionsList.push(`${prop} = ${data[prop]}`);
  }

  console.log();
  console.log(`Latest versions of the package ${packageName}:`);
  console.log();
  // console.log(semver.maxSatisfying(['5.4.1', '4.0.1', '1.0.0'], '*'));
  console.log(
    // (<any>Object).values(data).sort(semver.rcompare)[0]
  );
});
