const utils = {
  getKeyByValue: async (obj: Object, value: string) => {
    return await Object.keys(obj).find((key) => obj[key] === value);
  },
  getKeysByValues: async (obj: Object, values: Array<string>) => {
    const result = [];
    for (const value of values) {
      result.push(Object.keys(obj).find((key) => obj[key] === value));
    }
    return await result;
  },
  reSortToArray: async (obj: Object, values: Array<string>) => {
    /**
     * @obj = Full object to reSort;
     * @values = Sorted array to use to reSort the object.
     */
    const result = [];
    let objFind = '';
    let lol = 'test';
    for (const value of values) {
      objFind = Object.keys(obj).find((key) => obj[key] === value);
      result.push([objFind, value]);
    }
    return await Promise.all([result, lol]);
  },
  mergeArrays: async (firstArray: Array<string>, secondArray: Array<string>) => {

  },
}

export default utils;
