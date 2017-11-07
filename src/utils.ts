const utils = {
  getKeyByValue: async (obj: Object, value: string) => {
    /**
     * @obj = Full object to reSort.
     * @value = String of value to search for the corresponding key inside @obj.
     */
    console.log(obj);
    console.log(value);
    return await Object.keys(obj).find((key) => obj[key] === value);
  },

  getKeysByValues: async function(obj: Object, values: Array<string>) {
    /**
     * @obj = Full object to reSort.
     * @values = Array of values to search for the corresponding key inside @obj.
     */
    const result = [];
    for (const value of values) {
      result.push(this.getKeyByValue(obj, value).then((res) => {
        return res;
      }));
    }
    return await result;
  },

  reSortToArray: async function(obj: Object, values: Array<string>) {
    /**
     * @obj = Full object to reSort.
     * @values = Array of values sorted to use to reSort the object.
     */
    const result = [];
    for (const value of values) {
      this.getKeyByValue(obj, value).then((key) => {
        return result.push([key, value]);
      });
    }
    return await result;
  },

  getOnlyHostname: (url: string) => {
    return url.replace(/^(https?)|(:\/\/)|(www)|(\/)$/ig, '');
  },
}

export default utils;
