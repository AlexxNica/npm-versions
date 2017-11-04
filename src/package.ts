import * as RegClient from 'npm-registry-client';
import * as semver from 'semver';
import * as chalk from 'chalk';
import log from './log';

const getPackage = (packageName) => {
  if(packageName.length === 0) {
    return log.error('You need to pass at least one package name to the command.');
  }
  log.log('here ->'+packageName.length+'<-');

  const client = {
    init: new RegClient({}),
    uri: 'https://registry.npmjs.org/npm',
    params: {
      timeout: 1000,
      package: packageName,
      auth: {},
    },
  };

  return client.init.distTags.fetch(client.uri, client.params, (error, data, raw, res) => {
    const dataArray = (<any>Object).entries(data);
    const versionsListDummy: string[] = [];

    for (const prop in data) {
      versionsListDummy.push(`${(<any>chalk).bold.blueBright(prop)}: ${data[prop]}`);
    };

    const versionsList = versionsListDummy.reduce((accumulator, currentValue) => {
      return `${accumulator} ### ${currentValue}`;
    });

    console.log();
    console.log(`Latest verisons of the package \`${packageName}:\``);
    console.log(versionsList);
  });

};

export default getPackage;
