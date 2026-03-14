"use strict"; // treat all JS code as newer version js

// alert( 3 + 3 ) // we are using nodejs, so alert is not work on node but work on browser

console.log( 3 + 3 );

// Datatype in JS

let name = "nayan" // string
let age = 18 // age
let isLoggedIn = true // boolean
let state; // undefined
let value = null // null
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};


            // *** Primitive Datatypes ***
// number => 2 to power 53
// bigint
// string => ""/''
// boolean => true/false
// null => null is value but also it is standalone value (Empty Value)
// undefined => value not defined
// symbol => used for uniqueness

            // *** Non-Primitive Datatypes ***
// object

console.log(typeof "nayan");
console.log(typeof null); // Object
console.log(typeof undefined); // undefined

console.table([typeof null, typeof Object, typeof undefined, typeof 123, typeof true, typeof myHonda, typeof value])
