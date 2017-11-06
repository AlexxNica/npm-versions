const log = {
  verboseLevel: 0,
  error: function(message: string) {
    return this.verboseLevel >= 0 && console.error(message);
  },
  warn: function(message: string) {
    return this.verboseLevel >= 0 && console.warn(message);
  },
  info: function(message: string) {
    return this.verboseLevel >= 1 && console.info(message);
  },
  debug: function(message: string) {
    return this.verboseLevel >= 2 && console.debug(message);
  },
  log: function(message: string) {
    return this.verboseLevel >= 0 && console.log(message);
  },
};

export default log;
