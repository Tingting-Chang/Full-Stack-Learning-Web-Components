/*******************************************************************************
Project Assignment 1: Create JavaScript Validation Functions
1. You can find this file in [jsbin](http://jsbin.com/valake/edit?js,console)
2. The whole validation functions are listed as following:
********************************************************************************/

(function(window){

  var validator = {};
  
  
  // 1. .isEmailAddress(input) Checks if the input parameter is an email address, consisting of three parts: An email address consists of two strings combined by an @ symbol.

  validator.isEmailAddress = function(input) {
    // console.log(input.indexOf("@"));
    try {
      if (!((input.indexOf("@") > 0) && (input.indexOf(".") > 0))) {
        throw "It is not a valid email address. A valid email address should consists of three parts: An email address consists of two strings combined by an @ symbol.";
      } else {
        return true;
      }
    } catch (err) {
      console.log("Following error occurred and handled: " + err);
    }
  };

  // console.log(validator.isEmailAddress("tt@gmail.com"));


  // 2. .isPhoneNumber(input) Checks if the input parameter is a valid phone number for your country.
  
  /************************************************************
  1. Landlines: In China, the length of phone numbers varies from city to city. It is usually written as (0XXX) YYYY YYYY（Some areas of the phone number in the format (0XXX) xxxx-xxx）, where 0 is the trunk code, XXX is the area code (2 or 3 digits) and YYYY YYYY is the local number (not necessarily 8 digits). For example, (0755) XXXX YYYY indicates a Shenzhen number. XXXXYYYY is dialed locally, 0755XXXXYYYY is dialed in other areas inside the country, while, for international calls to Shenzhen, the 0 is dropped and is written +86 755 XXXX YYYY.
  2. Mobiles: The 11 digit code is always written in full in the whole China e.g. 1WX YYYY ZZZZ. Each WX is assigned to a service provider while W is usually '3', '5' or '8'. The remaining 8 digits are the subscriber number.
  PS: The phone number in China is too complicated so I will validate some general phone number: 
    For landlines: XXXX YYYY for local number; 0XXX YYYY YYYY for trunk calling; +86 XXX YYYY YYYY for international call
    For mobiles: 1WX YYYY ZZZZ
  *************************************************************/
 
  validator.isPhoneNumber = function (input) {
    var length = input.length;

      try {
        if (!(((length) >= 8) && ((length) <= 14 ))) {
          throw "It is not a valid phone number in China";
        } else {
          if (input[0] === "0") {
            if (length % 12 === 0) {
              return true;
            } else {
              return false;
            }
          } else {
            if (input[0] === "1") {
              if (length % 11 === 0) {
                return true;  
              } else {
                return false;
              }
            } else {
              if ((input.substring(0, 3) === "+86") && (length === 14)) {
                return true;
              } else {
                if (length === 8) {
                  return true;  
                } else {
                  return false;
                }
              }
            }
          }
        }
      } catch (err) {
        console.log("Following error occurred and handled: " + err);
      }
  };

  // test 22222222; 075522228888; +8675522228888; 13822228888
  // console.log(validator.isPhoneNumber("22222222"));

  // 3.withoutSymbols(input) Returns the input parameter text with all symbols removed. Symbols refer to any non-alphanumeric character. A character is considered alphanumeric if it matches one of the following: a—z, A—Z, or 0—9. Ignore whitespace.
  // You can find it on [jsbin](http://jsbin.com/xaqabu/edit?js,console)
  validator.withoutSymbols = function (input) {
    
    function filterSymbol(input, isSymbol) {
      //map function for every element.
      var result = [];
      for (var i = 0; i < input.length; i++) {
        if (!isSymbol(input[i])) {
          result.push(input[i]);
        } 
      }
      return result;
    }

    function isSymbol(item) {
      //function to check whether one item is a symbol
      var alphaLower = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
      var alphaUpper = alphaLower.toUpperCase();
      // console.log(alphaUpper);
      var alphaNum = ["0 1 2 3 4 5 6 7 8 9"];
      
      if ((alphaUpper.indexOf(item) < 0) && (alphaLower.indexOf(item) < 0) && (alphaNum.indexOf(item) < 0)) {
          // console.log(item);
          return true;
      }
      return false;
    }

    var noSymbols = "";
    var arr = input.split("");
    // console.log(arr);

    var output = filterSymbol(arr, isSymbol);
    // console.log(output);

    for (var i = 0; i < output.length; i++) {
      noSymbols += output[i];
    }

    // console.log(noSymbols);
    return noSymbols;
  };

  // console.log(validator.withoutSymbols("Hi, john.doe@live.com., is that you?/"));


  // 4. .isDate(input) Checks if the input parameter text is a valid date. For your purposes, a valid date is any string that can be turned into a JavaScript Date Object.
  validator.isDate = function (input) {
    var date = new Date(input);
    var toString = Object.prototype.toString; // toString() can be used with every object and allows you to get its class. 

    try {
        if (toString.call(date) !== "[object Date]") {
          throw "Missing valid date object";
        }
        else {
          // It is a date
          if (isNaN(date.getTime())) {
            // Date is not valid
            return false; 
          } else {
            // Date is valid
            return true;
          }
        }  
    } catch (err) {
      console.log("Following error occurred and handled: " + err);
    }

  };

  // test "2012/09/11"; "hi"; 
  // console.log(validator.isDate("22222"));

  //5 .isBeforeDate(input, reference) Checks if the input parameter is a date that comes after the reference date. Both the input and the reference can be strings or Date Objects. This function relies on two valid dates; if two are not found, it should throw a new error.
  validator.isBeforeDate = function (input, reference) {
    // turn both date objects into numbers of million seconds
    var date1 = new Date(input);
    var date2 = new Date(reference);
    try {
        if (!(validator.isDate(input) && validator.isDate(reference))) {
          throw "Missing two valid date objects.";
        } else {
          if (date1.getTime() > date2.getTime()) {
            return false; 
          } else {
            return true;
        }
      }
    } catch (err) {
      console.log("Following error occurred and handled: " + err);
    }
  };

  // test
  // console.log(validator.isBeforeDate("10-10-2016", "4-5-2012"));  // returns false)
  // console.log(validator.isBeforeDate("10-10-2016", "10-12-2016"));  // returns true)
  // var dec25 = new Date("12-25-2016"),

  //     oct31 = new Date("10-31-2016");

  // console.log(validator.isBeforeDate(oct31, dec25));  // returns true

  // console.log(validator.isBeforeDate(dec25, oct31));  // returns false


  //6. .isAfterDate(input, reference) Checks if the input parameter is a date that comes before the reference date. Both the input and the reference can be strings or Date Objects. This function relies on two valid dates; if two are not found, it should throw a new error.

  validator.isAfterDate = function (input, reference) {
    // turn both date objects into numbers of million seconds
    var date1 = new Date(input);
    var date2 = new Date(reference);

    try {
        if (!(validator.isDate(input) && validator.isDate(reference))) {
          throw "Missing two valid date objects.";
        } else {
          if (date1.getTime() < date2.getTime()) {
            return false; 
          } else {
            return true;
        }
      }
    } catch (err) {
      console.log("Following error occurred and handled: " + err);
    }
  };

   // console.log(validator.isAfterDate("10-10-2016", "4-5-2012"));  // returns true)


   //7. .isBeforeToday(input) Checks if the input parameter is a date that comes before today. The input can be either a string or a Date Object. This function relies on one valid date; if one is not found, it should throw a new error.

  validator.isBeforeToday = function (input) {
    var date = new Date(input);

     try {
      if(!(validator.isDate(input))) {
        throw "Missing one valid date objects.";
      } else {
        if (date.getTime() < Date.now()) {
          return true;  
        } else {
          return false;
        }
      }
     } catch (err) {
        console.log("Following error occurred and handled: " + err);
     }
   };

   // test
  // console.log(validator.isBeforeToday("10-10-2016"));  // returns false)
  // console.log(validator.isBeforeToday("10-10-2018"));  // returns true)


  //8. .isAfterToday(input) Checks if the input parameter is a date that comes after today. The input can be either a string or a Date Object. This function relies on one valid date; if one is not found, it should throw a new error.

  validator.isAfterToday = function (input) {
    var date = new Date(input);

     try {
      if(!(validator.isDate(input))) {
        throw "Missing one valid date objects.";
      } else {
        if (date.getTime() > Date.now()) {
          return true;  
        } else {
          return false;
        }
      }
     } catch (err) {
        console.log("Following error occurred and handled: " + err);
     }
   };


  // 9. .isEmpty(input) Checks the input parameter and returns true if it is an empty string–a string with no length or characters that is represented as "" or only contains whitespace(s).
  // Check it out in [jsbin](http://jsbin.com/bodeno/edit?js,console)
  validator.isEmpty = function (input) {
     if (input === "") {
        return true;
      } else {
        if (input !== null) { 
          for (var i = 0; i < input.length; i++) {
            if (input[i] !== " ") {
              return false;
            }
          }
          return true;
        } else {
          return false;
        }
      }
    };


   // console.log(validator.isEmpty("Visiting new places is fun.")); // returns false
   // console.log(validator.isEmpty("")); // returns true;
   // console.log(validator.isEmpty(" ")); // returns true;
   // console.log(validator.isEmpty("  ")); // returns true;
   // console.log(validator.isEmpty(null)); // returns false;


  //10. .contains(input, words) Checks if the input text parameter contains one or more of the words within the words array. A word is defined as the following: having undefined, whitespace, or punctuation before and after it. The function should be case-insensitive.
  validator.contains = function (input, words) {
    
    var str = input.toLowerCase().split(" ");
    // console.log(str);

    for (var i = 0; i < words.length; i++) {
      if (input.indexOf(words[i]) > 0) {
        if ((input[input.indexOf(words[i]) - 1] === " ") || (input[input.indexOf(words[i]) - words[i].length] === " ")) {
          // console.log(input[input.indexOf(words[i]) - 1]);
          return true;
        }
      }
    }
    return false;
  };

  // console.log(validator.contains("Visiting new places is fun.", ["coconut"]));
  // console.log(validator.contains("Visiting new places is fun.", ["aces"]));
  // console.log(validator.contains("Visiting new places is fun.", ["places"]));
  // console.log(validator.contains('"Definitely," he said in a matter-of-fact tone.', ["matter", "definitely"]));


  //11. .lacks(input, words) Checks if the input text parameter does not contain any of the words within the words array. Use the “word” definition used in the above .contains description. The function should be case-insensitive. A function like this could be used for checking blacklisted words.
  validator.lacks = function (input, words) {
    
    var str = input.toLowerCase().split(" ");
    // console.log(str);

    for (var i = 0; i < words.length; i++) {
      if (input.indexOf(words[i]) > 0) {
        if ((input[input.indexOf(words[i]) - 1] === " ") || (input[input.indexOf(words[i]) - words[i].length] === " ")) {
          // console.log(input[input.indexOf(words[i]) - 1]);
          return false;
        }
      }
    }
    return true;
  };

  // console.log(validator.lacks("Visiting new places is fun.", ["coconut"]));
  // console.log(validator.lacks("Visiting new places is fun.", ["aces"]));
  // console.log(validator.lacks("Visiting new places is fun.", ["places"]));
  // console.log(validator.lacks('"Definitely," he said in a matter-of-fact tone.', ["matter", "definitely"]));

  //12. .isComposedOf(input, strings) Checks that the input text parameter contains only strings found within the strings array. Note that this function doesn’t use a strong word definition the way .contains and .lacks does. The function should be case-insensitive.
  validator.isComposedOf = function (input, strings) {
    var inputNew = validator.withoutSymbols(input);
    var inputArr = inputNew.toLowerCase().split("");
    // console.log(inputArr);
    var string = strings.join("").toLowerCase();
    // console.log(string);

    for (var i = 0; i < inputArr.length; i++) {
      if ((inputArr[i] !== ",")&&(inputArr[i] !== " ")) {
        if (string.indexOf(inputArr[i]) < 0) {
           // console.log(inputArr[i]);
          return false;
          }
        }
      }
    return true;
  };

  // console.log(validator.isComposedOf("10184", ["1", "2", "3", "4", "5", "6" ,"7", "8", "9", "0"]));
  // console.log(validator.isComposedOf("I am ready.", ["I", "I'm", "am", "not", "ready"]));
  // console.log(validator.isComposedOf("Iamnotready.", ["I", "I'm", "am", "not", "ready"]));


  //13. .isLength(input, n) Checks if the input parameter’s character count is less than or equal to the n parameter.
  validator.isLength = function (input, n) {
    if (input.length <= n) {
      return true;
    } else {
      return false;
    }
  };

  // console.log(validator.isLength("123456789", 6));
  // console.log(validator.isLength("123456789", 20));
  // console.log(validator.isLength("AHHHH", 25));
  // console.log(validator.isLength("This could be a tweet!", 140));


  //14. .isOfLength(input, n) Checks if the input parameter’s character count is greater than or equal to the n parameter.
  validator.isOfLength = function (input, n) {
    if (input.length >= n) {
      return true;
    } else {
      return false;
    }
  };

  // console.log(validator.isOfLength("123456789", 6));
  // console.log(validator.isOfLength("123456789", 20));
  // console.log(validator.isOfLength("AHHHH", 25));
  // console.log(validator.isOfLength("This could be a tweet!", 140));


  //15. .countWords(input) Counts the number of words in the input parameter. Refer to the definition of word used in the description of the .contains function above.
  validator.countWords = function (input) {
    function reframe(input, isSymbol) {
      //map function for every element.
      var result = [];
      for (var i = 0; i < input.length; i++) {
        if (!isSymbol(input[i])) {
          result.push(input[i]);
        } else {
          result.push(" ");
        }
      }
      return result;
    }

    function isSymbol(item) {
      //function to check whether one item is a symbol
      var alphaLower = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
      var alphaUpper = alphaLower.toUpperCase();
      // console.log(alphaUpper);
      var alphaNum = "0 1 2 3 4 5 6 7 8 9";
      
      if ((alphaUpper.indexOf(item) < 0) && (alphaLower.indexOf(item) < 0) && (alphaNum.indexOf(item) < 0)) {
          // console.log(item);
          return true;
      }
      return false;
    }

    var arr = reframe(input, isSymbol);
    // console.log(arr);
    var str = arr.join("").split(" ");
    // console.log(str);

    for (var i = 0; i < str.length; i++) {
      if (str[i] === "") {
        str.pop(str[i]);
      }
    }

    return str.length;

  };

    // console.log(validator.countWords("Hello."));
    // console.log(validator.countWords("Hard-to-type-really-fast!"));
    // console.log(validator.countWords(""));
    // console.log(validator.countWords("supercalifragilisticexpialidocious"));


  //16. .lessWordsThan(input, n) Checks if the input parameter has a word count less than or equal to the n parameter.
  validator.lessWordsThan = function (input, n) {
    var count = validator.countWords(input);

    if (count <= n) {
      return true;  
    } else {
      return false;
    }
  };

  // console.log(validator.lessWordsThan("hello.", 2));

  //17. .moreWordsThan(input, n) Checks if the input parameter has a word count greater than or equal to the n parameter.
  validator.moreWordsThan = function (input, n) {
    var count = validator.countWords(input);

    if (count >= n) {
      return true;  
    } else {
      return false;
    }
  };


  // 18. .isBetween(input, floor, ceil)
  // Checks that the input parameter matches all of the following:
  // input is greater than or equal to the floor parameter
  // input is less than or equal to the ceil parameter.
  validator.isBetween = function (input, floor, ceil) {
    if ((input >= floor) && (input <= ceil)) {
      return true;  
    } else {
      return false;
    }
  };

  // console.log(validator.isBetween(2.3, 2, 3));

  //19. .isAlphanumeric(input) Checks that the input parameter string is only composed of the following characters: a—z, A—Z, or 0—9. Unicode characters are intentionally disregarded.
  validator.isAlphanumeric = function (input) {
      function isSymbol(item) {
        //function to check whether one item is a symbol including whitespaces
        var alphaLower = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
        var alphaUpper = alphaLower.toUpperCase();
        // console.log(alphaUpper);
        var alphaNum = "0 1 2 3 4 5 6 7 8 9";
        
        // console.log(item);
        // console.log(alphaNum.indexOf(item));
        if ((alphaUpper.indexOf(item) < 0) && (alphaLower.indexOf(item) < 0) && (alphaNum.indexOf(item) < 0) || (item === " ")) {
            // console.log(item);
            return true;
        } else {
          return false;
        }
      }

      var arr = input.split("");
      // console.log(arr);

      if (arr.length > 0) {
        // console.log(arr.filter(isSymbol));
        if((arr.filter(isSymbol)).length <= 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
  };

  // console.log(validator.isAlphanumeric("Hello."));
  // console.log(validator.isAlphanumeric("slam poetry"));
  // console.log(validator.isAlphanumeric(""));
  // console.log(validator.isAlphanumeric("ArTᴉ$ʰARd"));
  // console.log(validator.isAlphanumeric("supercalifragilisticexpialidocious"));
  // console.log(validator.isAlphanumeric("1234567891011121"));
  // console.log(validator.isAlphanumeric("1234-5678-9101-1121"));
  // console.log(validator.isAlphanumeric("4427A693CF324D14"));
  // console.log(validator.isAlphanumeric("4427-A693-CF32-4D14"));



  //20. .isCreditCard(input) Checks if the input parameter is a credit card or bank card number. A credit card number will be defined as four sets of four alphanumeric characters separated by hyphens (-), or a single string of alphanumeric characters (without hyphens).
  validator.isCreditCard = function (input) {
    
    var arr = [];
    var str;
    if (input.indexOf("-") >= 0) {
      arr = input.split("-");
      str = arr.join("");
      console.log(arr);

      if (validator.isAlphanumeric(str) && (str.length === 16)) {
        return true;
      } else {
        return false;
      }
    } else {
      if ((validator.isAlphanumeric(input)) && (input.length === 16)) {
        return true;  
      } else {
        return false;
      }
    }
  };

  // console.log(validator.isCreditCard("1234-5678-9101-1121"));
  // console.log(validator.isCreditCard("1234567891011121"));
  // console.log(validator.isCreditCard("4427A693CF324D14"));
  // console.log(validator.isCreditCard("4427-A693-CF32-4D14"));
  // console.log(validator.isCreditCard("----------------"));
  // console.log(validator.isCreditCard("testcard"));


  //21. .isHex(input) Checks if the input string is a hexadecimal color, such as #3677bb. Hexadecimal colors are strings with a length of 7 (including the #), using the characters 0—9 and A—F. isHex should also work on shorthand hexadecimal colors, such as #333. The input must start with a # to be considered valid.
  validator.isHex = function (input) {
    function isHexElem(item) {
        //function to check whether one item is a symbol including whitespaces
        var alphaLower = "a b c d e f ";
        var alphaUpper = alphaLower.toUpperCase();
        // console.log(alphaUpper);
        var alphaNum = "0 1 2 3 4 5 6 7 8 9";
        
        // console.log(item);
        // console.log(alphaNum.indexOf(item));
        if ((alphaUpper.indexOf(item) < 0) && (alphaLower.indexOf(item) < 0) && (alphaNum.indexOf(item) < 0)) {
            // console.log(item);
            return true;
        } else {
          return false;
        }
      }

    var arr = input.split("");
    if (arr[0] === "#") {
      arr.shift(arr[0]);
      // console.log(arr);
      // console.log(arr.filter(isHexElem).length);

      if ((arr.filter(isHexElem).length === 0) && (arr.length === 3 || arr.length === 6)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }

  };

  // console.log(validator.isHex("#abcdef"));
  // console.log(validator.isHex("#bcdefg"));
  // console.log(validator.isHex("#bbb"));
  // console.log(validator.isHex("#1cf"));
  // console.log(validator.isHex("#1234a6"));
  // console.log(validator.isHex("#1234a68"));
  // console.log(validator.isHex("cc4488"));

  // 22. .isRGB(input)
  // Checks if the input string is an RGB color, such as rgb(200, 26, 131). An RGB color consists of:

  // Three numbers between 0 and 255
  // A comma between each number
  // The three numbers should be contained within “rgb(” and “)“.
  validator.isRGB = function (input) {
    var arr = [];
    var pre = input.slice(0, 4);
    var post = input.slice(input.length - 1);

    if ((pre === "rgb(") && (post === ")")) {
      arr = input.slice(4, input.length - 1).split(",");
      // console.log(arr);
      if (arr.filter(function (item) {
        if ((item >= 0) && (item <= 255)) {
          return true;
        } else {
          return false;
        }
      }).length === 3) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  // console.log(validator.isRGB("rgb(0,0,0)"));
  // console.log(validator.isRGB("rgb(0, 0, 0)"));
  // console.log(validator.isRGB("rgb(255, 255, 112)"));
  // console.log(validator.isRGB("rgba(0,0,0, 0)"));
  // console.log(validator.isRGB("rgb(0,300,0)"));
  // console.log(validator.isRGB("rgb(0,-14,0)"));

  // 23. .isHSL(input)
  // Checks if the input string is an HSL color, such as hsl(122, 1, 1). An HSL color consists of:3

  // Three numbers:
  //   1. the first number, Hue, is between 0 and 360
  //   2. the second and third numbers, Saturation and Lightness, are between 0 and 1
  //   3. A comma between each number
  //   4. The three numbers should be contained within “hsl(” and “)“.
  validator.isHSL = function (input) {
    var arr = [];
    var pre = input.slice(0, 4);
    var post = input.slice(input.length - 1);

    if ((pre === "hsl(") && (post === ")")) {
      arr = input.slice(4, input.length - 1).split(",");
      // console.log(arr);

      if ((arr[0] >= 0) && (arr[0] <= 360) && (arr[1] >= 0) && (arr[1] <= 1) && (arr[2] >= 0) && (arr[2] <= 1)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  // console.log(validator.isHSL("hsl(122, 1, 1)"));
  // console.log(validator.isHSL("hsl(0,0,0)"));
  // console.log(validator.isHSL("hsl(0, 0, 0)"));
  // console.log(validator.isHSL("hsl(255, 255, 112)"));
  // console.log(validator.isHSL("hsla(0,0,0, 0)"));
  // console.log(validator.isHSL("hsl(0,300,0)"));
  // console.log(validator.isHSL("hsl(0,-14,0)"));


  //24. .isColor(input) Checks if the input parameter is a hex, RGB, or HSL color type.
  validator.isColor = function (input) {
    if ((validator.isHex(input) === false) && (validator.isRGB(input) === false) && (validator.isHSL)(input) === false) {
      return false;
    } else {
      return true;
    }
  };

  // console.log(validator.isColor("#ccccff"));
  // console.log(validator.isColor("rgb(255,255,200)"));
  // console.log(validator.isColor("hsl(46,0.66,0.21)"));
  // console.log(validator.isColor("hsl(255,255,255)"));
  // console.log(validator.isColor("abc345"));
  // console.log(validator.isColor("#363"));


  // 25. .isTrimmed(input) Checks if the input parameter has leading or trailing whitespaces or too many spaces between words. Leading refers to before while trailing refers to after. This function will help validate cases where extra spaces were added accidentally by the user.
  validator.isTrimmed = function (input) {
    var result;
    var arr = input.split("");
    // console.log(arr);
    if ((arr[0] === " ") || (arr[arr.length - 1] === " ")) {
      // console.log(arr[0]);
      // console.log(arr[arr.length - 1]);
      return false;
    } else {
      for (var i = 0; i < arr.length; i++) {
        if ((arr[i] === " ") && (arr[i+1]) === " ") {
          // console.log(arr[i]);
          return false;
        }
      }
      return true;
    }
  };

  // console.log(validator.isTrimmed("   harmony and irony"));
  // console.log(validator.isTrimmed("harmony and irony      "));
  // console.log(validator.isTrimmed("harmony  and  irony"));
  // console.log(validator.isTrimmed("harmony and irony"));

window.validator = validator;

})(window);

