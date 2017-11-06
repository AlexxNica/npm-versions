import fetch from './fetch';
import * as semver from 'semver';
import * as chalk from 'chalk';
import log from './log';

const getPackage = (packageName) => {
  if(packageName.length === 0) {
    return log.error('You need to pass at least one package name to the command.');
  }

  const options = {
    registryUrl: 'https://registry.npmjs.org/',
    packageName: packageName,
  };

  return fetch(options).then((html)=>{console.log(html);});
    // .then( (html) => {
    //   console.log(html);
    // });
};

export default getPackage;
