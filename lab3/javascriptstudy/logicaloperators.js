result = a || b;

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false


if (1 || 0) { // works just like if( true || false )
    alert( 'truthy!' );
}


let hour = 9;

if (hour < 10 || hour > 18) {
    alert( 'The office is closed.' );
}


// let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert( 'The office is closed.' ); // it is the weekend
}


alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)


let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder


alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false


// let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    alert( 'The time is 12:30' );
}

result = value1 && value2 && value3;

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0


alert( 1 && 2 && null && 3 ); // null

alert( 1 && 2 && 3 ); // 3, the last one

let x = 1;

(x > 0) && alert( 'Greater than zero!' );


// let x = 1;

if (x > 0) alert( 'Greater than zero!' );


alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false


