const assert= require('chai').assert;
//const replaceString=require("../Functional/ReplaceString");
// describe("test cases for replace string",function(){
//     it("username must contain letters only",function(){
//        assert.isString(replaceString,"user name is string")
//     });

//     it("username atleast three character long",function(){
//         assert.isAtLeast(replaceString.length,3,"username must contain more than 3 characters");
//     });
//     it("username can not accept numberic and special symbol",function(){
//         assert.isNotString(replaceString);
//     })
// });

// const WindChill=require("../Functional/WindChill");
//  describe("test cases for ​ WindChill Temperature",function(){
//      it("Temperature can not be larger than 50 in absolute value",function(){
//         assert.isBelow(Math.abs(WindChill["temperature"]),50,"temperature can not be larger than 50 in absolute value");
//      });

//      it("wind speed can not be larger than 120",function(){
//         assert.isBelow(WindChill["windspeed"],120,"wind speed can not be larger than 120");
//      });
//      it("wind speed must be be greater than 3",function(){
//          assert.isAbove(WindChill["windspeed"],3,"wind speed must be be greater than 3");
//      });

// });

// const quadratic=require("../Functional/QuadraticRoots");
// describe("test case for checking given question is quadratic or not",function(){
//     it("ax^2+bx+c in this equation a can not be zero",function(){
//         assert.isAbove(Math.abs(quadratic["a"]),0,"ax^2+bx+c in this equation a can not be zero");
//     });
// });

// const stopwatch=require("../Functional/Stopwatch");
// describe("test cases for stopwatch input parameter",function(){
//     it("start input must be equal to 1",function(){
//         assert.equal(stopwatch["start"],1,"start input must be equal to 1");
//     });
//     it("stop input must be equal to 0",function(){
//         assert.equal(stopwatch["stop"],0,"stop input must be equal to 0");
//     });
//     it("start input can not be equal to 1",function(){
//         assert.notEqual(stopwatch["start"],1,"start input can not be equal to 1");
//     });
//     it("stop input can not be equal to 0",function(){
//         assert.notEqual(stopwatch["stop"],0,"start input can not be equal to 0");
//     });
// });

// const permutationInput=require("../Functional/Permutation");
// describe("test case for string permutation",function(){
//     it("user input must contain only alphabets",function(){
//         assert.isString(permutationInput,"user input must contain only letters");
//     });
//     it("user input can not contain special symbol or numbers",function(){
//         assert.isNotString(permutationInput,"user input can not contain special symbol or numbers");
//     });
// });

// const distanceCorodinate=require("../Functional/Distance");
// describe("test case for coordinate of point",function(){
//     it("x coordinate must be number in its absolute value",function(){
//         assert.isNumber(Math.abs(distanceCorodinate["x"]),"x coordinate must be number in its absolute value");
//     });

//     it("y coordinate must be number in its absolute value",function(){
//         assert.isNumber(Math.abs(distanceCorodinate["y"]),"y coordinate must be number in its absolute value");
//     });

//     it("x coordinate  can not be special symbol or letter",function(){
//         assert.isNotNumber(Math.abs(distanceCorodinate["x"]),"x coordinate  can not be special symbol or letter");
//     });

//     it("y coordinate  can not be special symbol or letter",function(){
//         assert.isNotNumber(Math.abs(distanceCorodinate["y"]),"y coordinate  can not be special symbol or letter");
//     });
// });

// const inputParamter=require("../Functional/SumOfThree");
// describe("test case for sum of three numbers adds to zero",function(){
//     it("size of array must be number",function(){
//         assert.isNumber(inputParamter["size"],"size of array must be number");
//     })
    
//     it("size of array can not be special symbol or letter",function(){
//         assert.isNotNumber(inputParamter["size"],"size of array can not be special symbol or letter");
//     });
// });

// const bianrySerach=require("../Algorithms/BinarySearchWordFile");
// describe("test case for string binary search reading data from file",function(){

//     it("serach key should be string",function(){
//         assert.isString(bianrySerach,"search key should be string");
//     });
//     it("search key should not be special symbol or numbers",function(){
//         assert.isNotString(bianrySerach,"search key should not be special symbol or numbers");
//     });
// });