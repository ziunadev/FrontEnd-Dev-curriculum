import * as Utils from "./utils.js";

// print("Hello World");


// Desctructuring

// Object Desctructuring
var obj = {
  name: "Putra",
  division: "frontend"
};

var {name, division} = obj;

console.log(`${name}, ${division}`);

// Array Desctructuring
var arr = [1, 2];

var [el1, el2] = arr;
console.log(`[${el1}, ${el2}]`);

// Desctructuring function from imported module
var {print, func1} = Utils;
console.log(Utils);

print("object");
Utils.func1();
Utils.ini_variable(
  function (required_param,...param1) {
    console.log(`ini hof, print: ${param1[0]}, param2: ${param1[1]}, param3: ${required_param}`);
  }
);


// Bactic
// Rest -> Make given params into an array