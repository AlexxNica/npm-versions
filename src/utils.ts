const utils = {
  getKeyByValue: async (obj: Object, value: string) => {
    /**
     * @obj = Full object to reSort.
     * @value = String of value to search for the corresponding key inside @obj.
     */
    return await Object.keys(obj).find((key) => obj[key] === value);
  },

  getKeysByValues: async (obj: Object, values: Array<string>) => {
    /**
     * @obj = Full object to reSort.
     * @values = Array of values to search for the corresponding key inside @obj.
     */
    const result = [];
    for (const value of values) {
      result.push(Object.keys(obj).find((key) => obj[key] === value));
    }
    return await result;
  },

  reSortToArray: async (obj: Object, values: Array<string>) => {
    /**
     * @obj = Full object to reSort.
     * @values = Array of values sorted to use to reSort the object.
     */
    const result = [];
    let objFind = '';
    for (const value of values) {
      objFind = Object.keys(obj).find((key) => obj[key] === value);
      result.push([objFind, value]);
    }
    return await result;
  },

  getOnlyHostname: (url: string) => {
    return url.replace(/^(https?)|(:\/\/)|(www)|(\/)$/ig, '');
  },
}

export default utils;
