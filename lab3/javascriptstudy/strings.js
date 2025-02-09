let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;






function sum(a, b) {
    return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.






let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines






// let guestList = "Guests: // Error: Unexpected token ILLEGAL
//   * John";






// let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // a multiline list of guests, same as above








let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true









let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );






// let str = `Hello`;

alert( str[-2] ); // undefined
alert( str.at(-2) ); // l






for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}





//   let str = 'Hi';

str[0] = 'h'; // error
alert( str[0] ); // doesn't work




let str = 'Hi';

str = 'h' + str[1]; // replace the string

alert( str ); // hi








let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)









let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12







let str = "Widget with id";

if (str.indexOf("Widget") != -1) {
    alert("We found it"); // works now!
}







alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false








alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"








alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"







alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"






let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0





let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // 'gif'




