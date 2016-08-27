

(function(window){

  var utilities = {};


  utilities.isArray = Array.isArray || function(arr) {

  return Object.prototype.toString.call(arr) === '[object Array]';

  };

//1. .by(list, n, callback) Write a function that operates similarly to .forEach. Your function should iterate and call the callback parameter for each element or property of a list at the interval specified by the n parameter. It should not call callback on values greater than the list’s number of elements.
  utilities.by = function (list, n, callback) {
    
    for (var i = 0; i < list.length; i++) {
      if (i % n !== 0) {
        callback(arr[i], i, list);
      }
    }
  };

  // var log = function (val, index, list) {
  //     console.log(val);
  // };

  // console.log(utilities.by([1,2,3,4,5,6], 2, log));


//2. .keys(object) Write a function that will create an array of all the keys of an object. Remember that a key is the name of an object’s property.
  utilities.keys = function (object) {

    return Object.keys(object);
  };

  // console.log(utilities.keys({count: 5, length: 10, total: 16}));

//3. .values(object) Write a function that will create an array of all the values of an object. Remember that a value is the stored data at a specific key of an object. 
  utilities.values = function (object) {
    return Object.keys(object).map(function (item) {
      return object[item];
    });
  };

  // console.log(utilities.values({count: 5, length: 10, total: 16}));

//4. .pairs(object) Write a function that will create an array of all the keys and values of an object in the order of [key, value, key, value] for as many key/value pairs as exist in the object.
  utilities.pairs = function (object) {
    function map(obj, callback) {
      var result = [];

      for(var p in obj) {
        // console.log(p);
        // console.log(obj[p]);
        result.push(callback(p, obj[p]));
      }
      return result;
    }

    var arr = [], result = [];
    var length = Object.keys(object).length;
    console.log(length);

      arr = map(object, function (prop, val) {
      var arr = [];
      arr.push(prop + "");
      arr.push(val);
      return arr; 
    });

    result = arr.reduce(function (previous_value, current_value, current_index, array) {
      return previous_value.concat(current_value);
    });

    // console.log(result);
    return result;
  };

  // console.log(utilities.pairs({count: 5, length: 10, total: 16}));


//5. .shuffle(array) Write a function that returns a randomly re-arranged copy of the elements in its parameter array.
  utilities.shuffle = function (array) {

      var current = arr.length;
      var random, temp;
    
      while (0 !== current) {
        random = Math.floor(Math.random() * current);
        console.log(random);
        current -= 1;
    
        temp = arr[current];
        arr[current] = arr[random];
        arr[random] = temp;
      }
      return arr;
  };

  // var arr = [2, 11, 37, 43];
  // console.log(utilities.shuffle(arr));

//6. .pluralize(n, word, pluralWord) Write a function that will return the plural of a word depending on the value of the n parameter. If n is 1, return the non-plural word (parameter word); otherwise, add an “s” to the plural word. If the pluralWord parameter is provided, instead of adding an “s,” return the pluralWord.
  utilities.pluralize = function (n, word, pluralWord) {
    if (n === 1) {
      return word;  
    } else {
      if (pluralWord) {
        return pluralWord;
      } else {
        return word + "s";
      }
    }
  };

  // console.log(utilities.pluralize(1, "lion"));
  // console.log(utilities.pluralize(2, "lion"));
  // console.log(utilities.pluralize(5, "lion"));
  // console.log(utilities.pluralize(0, "lion"));
  // console.log(utilities.pluralize(1, "lioness"));
  // console.log(utilities.pluralize(2, "lioness"));
  // console.log(utilities.pluralize(2, "lioness", "lionesses"));


//7. .toDash(str) Write a function for converting a camelCase string to a dashed string. Camel case presents words with no spaces separating them and with each word’s first letter capitalized except the first word, which is lower case.
  utilities.toDash = function (str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        console.log(str[i]);
        result += "-" + str[i].toLowerCase();
      } else {
        result += str[i];
      }
    }
    return result;
  };

  // console.log(utilities.toDash("hotDog"));
  // console.log(utilities.toDash("spaceStationComplex"));
  // console.log(utilities.toDash("myFirstFunction"));


//8. .toCamel(str) Write a function for converting a dashed string to a camelCase string.
  utilities.toCamel = function (str) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "-") {
        str = str.replace(str[i] + str[i+1], str[i+1].toUpperCase());
        // console.log(str);
      }
    }
    return str;
  };

  // console.log(utilities.toCamel("hot-dog"));
  // console.log(utilities.toCamel("space-station-complex"));
  // console.log(utilities.toCamel("my-first-function"));

//9. .has(obj, search) Write a function that searches all values of the parameter obj and returns “true” if any are equal to the search parameter. Otherwise has should return “false.”
  utilities.has = function (obj, search) {
    var arr = utilities.values(obj);
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === search) {
        return true;
      }
    }
    return false;
  };

  // console.log(utilities.has({count: 5, length: 10, total: 16}, 4));
  // console.log(utilities.has({count: 5, length: 10, total: 16}, 5));

  //10. .pick(obj, keys) Write a function that returns a new object by picking all key/value pairs from the parameter obj. The keys that are picked will be determined by the array parameter keys.
  utilities.pick = function (obj, keys) {
    var result = {};

      for (var i = 0; i < keys.length; i++) {
          if (keys[i] in obj) {
            // console.log(keys[i]);
            result[keys[i]] = obj[keys[i]];
          }
      }
    return result;
  };

  var data = {

   type: "transformer",

   index: 19,

   siblings: 19,

   access: "full"

  };

  // console.log(utilities.pick(data, ["type", "index"]));      // returns {type: "transformer", index: 19}
  // console.log(utilities.pick(data, ["siblings", "index"]));  // returns {siblings: 19, index: 19};
  // console.log(utilities.pick(data, ["access", "animals"]));  // returns {access: "full"};





})(window);
