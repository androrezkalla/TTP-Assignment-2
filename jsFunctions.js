// forEach
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// Map
function myMap(arr, callback) {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(callback(arr[i], i, arr));
  }
  return array;
}

// Filter
function myFilter(arr, callback) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }

// Some
function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        return true;
      }
    }
    return false;
  }

  // Every

  function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i], i, arr)) {
        return false;
      }
    }
    return true;
  }

  // Reduce
  function myReduce(arr, callback, initialValue) {
    let accumulator;
    let startIndex;
    if (initialValue !== undefined) {
      accumulator = initialValue;
      startIndex = 0;
    } else {
      accumulator = arr[0];
      startIndex = 1;
    }
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
  }
  
  
  // Includes
  function myIncludes(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
    return false;
  }
  
  // IndexOf
  function myIndexOf(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  // Push
  function myPush(arr, elementToAdd) {
    arr[arr.length] = elementToAdd;
    return arr.length;
  }
  
  // LastIndexOf
  function myLastIndexOf(arr, target) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  
  // Object.Keys
  function grabKeys(inputObject) {
    let keysArr = [];
    for (const key in inputObject) {
        keysArr.push(String(key));
    }
    return keysArr;
}
  
  // Object.Values
function grabValues(inputObject) {
    let valuesArr = [];
    for (const key in inputObject) {
        valuesArr.push(inputObject[key]);
    }
    return valuesArr;
};
  