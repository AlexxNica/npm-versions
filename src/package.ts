import * as fetch from './fetch';
import * as semver from 'semver';
import * as chalk from 'chalk';
import log from './log';

const getPackage = (packageName) => {
  if(packageName.length === 0) {
    return log.error('You need to pass at least one package name to the command.');
  }

  const options = {
    registryUrl: 'https://registry.npmjs.org/npm',
  };

  console.log(fetch);

  // const clientFetch = client.init.distTags.fetch(client.uri, client.params, (error, data, raw, res) => {
  //   const dataArray = (<any>Object).entries(data);
  //   const versionsListDummy: string[] = [];

  //   for (const prop in data) {
  //     versionsListDummy.push(`${(<any>chalk).bold.blueBright(prop)}: ${data[prop]}`);
  //   };

  //   const versionsList = versionsListDummy.reduce((accumulator, currentValue) => {
  //     return `${accumulator} ${(<any>chalk).black('|')} ${currentValue}`;
  //   });
  //   return versionsList;
  // }).then(function() {
  //   return console.log(clientFetch);
  // }).catch(function() {
  //   return console.log('Failed');
  // });
};

export default getPackage;
