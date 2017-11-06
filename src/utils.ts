const utils = {
  getKeyByValue: (object, value) => {
    return Promise.resolve(Object.keys(object).find((key) => {
      return object[key] === value
    }));
  }
}

export default utils;
