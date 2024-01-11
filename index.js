function myEach(collection, callback) {
    for (const key in collection) {
      callback(collection[key]);
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (item) => {
      result.push(callback(item));
    });
    return result;
  }
  
  function myReduce(collection, callback, initialValue) {
    if (collection.length === 0) {
      return initialValue;
    }
  
    let accumulator = initialValue === undefined ? collection[0] : initialValue;
    const startIdx = initialValue === undefined ? 1 : 0;
  
    for (let i = startIdx; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], collection);
    }
  
    return accumulator;
  }
  
  
  function myFind(collection, callback) {
    for (const key in collection) {
      if (callback(collection[key])) {
        return collection[key];
      }
    }
    return undefined;
  }
  
  function myFilter(collection, callback) {
    const result = [];
    myEach(collection, (item) => {
      if (callback(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  function myFirst(collection, n = 1) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  }
  
  function myLast(collection, n = 1) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
  }
  
  function myKeys(obj) {
    return Object.keys(obj);
  }
  
  function myValues(obj) {
    return Object.values(obj);
  }