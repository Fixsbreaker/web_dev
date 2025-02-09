// no error
let message = "hello";
message = 123456;

alert( 1 / 0 ); // Infinity


alert( NaN + 1 ); // NaN

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3


let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")


// let age = null;

// let age;

alert(age); // shows "undefined"

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

// -------------------------------
// let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya