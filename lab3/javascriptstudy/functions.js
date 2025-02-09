

function showMessage() {
    alert( 'Hello everyone!' );
}

function showMessage() {
    alert( 'Hello everyone!' );
}

showMessage();
showMessage();

function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable

    alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function



// let userName = 'John';

function showMessage() {
    let message = 'Hello, ' + userName;
    alert(message);
}

showMessage(); // Hello, John


let userName = 'John';

function showMessage() {
    userName = "Bob"; // (1) changed the outer variable

    let message = 'Hello, ' + userName;
    alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function


function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)


function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer

    alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann


function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given


function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
    alert( 'Access granted' );
} else {
    alert( 'Access denied' );
}



function showMovie(age) {
    if ( !checkAge(age) ) {
        return;
    }

    alert( "Showing you the movie" ); // (*)
    // ...
}

// -------------------------------------------------------

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b) {
    return a < b ? a : b;
}


function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert( pow(x, n) );
}