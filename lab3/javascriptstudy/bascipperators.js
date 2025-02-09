let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values


alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)


let s = "my" + "string";
alert(s); // mystring

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"

alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings


let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5


let x = 2 * 2 + 1;

alert( x ); // 5


let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

let n = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n ); // 16

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3

let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1


let counter = 1;
let a = ++counter; // (*)

alert(a); // 2

let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1

let counter = 0;
counter++;
++counter;
alert( counter ); // 2, the lines above did the same

let counter = 0;
alert( ++counter ); // 1

let counter = 0;
alert( counter++ ); // 0


let counter = 1;
alert( 2 * ++counter ); // 4

let counter = 1;
alert( 2 * counter++ ); // 2, because counter++ returns the "old" value


let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)

// -----------------------------------------------------------

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1


let a = 2;

let x = 1 + (a *= 2); // 5



"" + 1 + 0 // 1
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2  // NaN
"  -9  " + 5 //   -9  5
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 // -2


let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3

