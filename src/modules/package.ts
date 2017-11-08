/************
** IMPORTS **
************/
import fetch from './fetch';
import log from './log';

/* Default Options (used as a base, will be merged and overwritten by the options passed to function) */
const defaultOptions = {
  registryUrl: 'https://registry.npmjs.org/',
};

/* Function that will be exported */
const packageModule = {
  getPackage: async (options): Promise<any> => {
    options = Object.assign(defaultOptions,
      (typeof options === 'string' ? { packageName: options, } : options)
    );

    // Check if any package has been specified. Throw error if not.
    if (options.packageName.length === 0) {
      log.error('You need to pass at least one package name to the command.');
      process.exit(1);
    }

    return await fetch(options);
  },
}

/************
** EXPORTS **
************/
export default packageModule;
