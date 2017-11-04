const log = {
  verboseLevel: 0,
  error: function (message: string) {
    return this.verboseLevel >= 0 && console.error(`error - ${this.verboseLevel}\n${message}`);
  },
  warn: function (message: string) {
    return this.verboseLevel >= 0 && console.warn(`warn - ${this.verboseLevel}\n${message}`);
  },
  info: function (message: string) {
    return this.verboseLevel >= 1 && console.info(`info - ${this.verboseLevel}\n${message}`);
  },
  debug: function (message: string) {
    return this.verboseLevel >= 2 && console.debug(`debug - ${this.verboseLevel}\n${message}`);
  },
  log: function (message: string) {
    return this.verboseLevel >= 0 && console.log(`log - ${this.verboseLevel}\n${message}`);
  },
};

namespace log {
  export interface log {
    verboseLevel: number;
  }
}

export default log;
