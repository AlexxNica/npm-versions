import fetch from './fetch';
import log from './log';

const defaultOptions = {
  registryUrl: 'https://registry.npmjs.org/',
  packageName: '',
};

const getPackage = (options): Promise<any> => {
  options = Object.assign(defaultOptions, (typeof options === 'string' ? { packageName: options, } : options));

  if (options.packageName.length === 0) {
    log.error('You need to pass at least one package name to the command.');
    process.exit(1);
  }

  options.registryUrl = options.registryUrl || defaultOptions.registryUrl;

  // const options = {
  //   registryUrl: 'https://registry.npmjs.org/',
  //   packageName: packageName,
  // };

  return fetch(options);
};

export default getPackage;
