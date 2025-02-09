let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
    // ...
}

// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
    alert( 'You guessed it right!' );
} else {
    alert( 'How can you be so wrong?' ); // any value except 2015
}


let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
    alert( 'Too early...' );
} else if (year > 2015) {
    alert( 'Too late' );
} else {
    alert( 'Exactly!' );
}

let accessAllowed = (age > 18) ? true : false;



let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';

alert( message );

// -------------------------------------

// <!DOCTYPE html>
// <html>

// <body>
//   <script>
//     'use strict';

//     let value = prompt('What is the "official" name of JavaScript?', '');

//     if (value == 'ECMAScript') {
//       alert('Right!');
//     } else {
//       alert("You don't know? ECMAScript!");
//     }
//   </script>


// </body>

// </html>

