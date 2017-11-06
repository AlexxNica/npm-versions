import fetch from './fetch';
import log from './log';

const getPackage = (options): Promise<any> => {
  if(options.packageName.length === 0) {
    log.error('You need to pass at least one package name to the command.');
    process.exit(1);
  }

  options.registryUrl = options.registryUrl || 'https://registry.npmjs.org/';

  // const options = {
  //   registryUrl: 'https://registry.npmjs.org/',
  //   packageName: packageName,
  // };

  return fetch(options);
};

export default getPackage;
