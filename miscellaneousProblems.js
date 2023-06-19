// Sum of Range 

function range(start, end, step = 1) {
    const result = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        result.push(i);
      }
    }
    return result;
  }
  
  function sum(numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
  




// Reversed Array

function reverseArray(array) {
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
      reversed.push(array[i]);
    }
    return reversed;
  }
  
  function reverseArrayInPlace(array) {
    const length = array.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
      let temp = array[i];
      array[i] = array[length - 1 - i];
      array[length - 1 - i] = temp;
    }
  }





// A list

function arrayToList(array) {
    let result = null;
    let temp = null;
    for (let i = 0; i < array.length; i++) {
      if (result == null) {
        result = { value: array[i], rest: null };
        temp = result;
      } else {
        temp["rest"] = { value: array[i], rest: null };
        temp = temp["rest"];
      }
    }
    return result;
  }
  
  function listToArray(list) {
    let result = [];
    let temp = list;
    while (temp != null) {
      result.push(temp["value"]);
      temp = temp["rest"];
    }
    return result;
  }
  
  function prepend(element, list) {
    return { value: element, rest: list };
  }
  
  function nth(list, position) {
    let i = 0;
    let temp = list;
    while (i !== position) {
      temp = temp["rest"];
      i = i + 1;
    }
    return temp["value"];
  }
  
  

  

  // Deep Comparison

  function deepComparison(obj1, obj2) {
    if ( obj1 !== null && obj2 !== null && typeof obj1 === 'object' && typeof obj2 === 'object' ) 
    {
      const obj1Properties = Object.keys(obj1);
      const obj2Properties = Object.keys(obj2);
  
      if (obj1Properties.length === obj2Properties.length) {
        let arePropertiesEqual = true;
  
        for (let property of obj1Properties) {
          if (obj2[property] !== null) {
            arePropertiesEqual = arePropertiesEqual && deepComparison(obj1[property], obj2[property]);
          } else {
            return false;
          }
        }
        return arePropertiesEqual;
      }
       else {
        return false;
      }
    } 
    else {
      return obj1 === obj2;
    }
  }
  