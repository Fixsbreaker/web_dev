let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3








let sayHi = () => alert("Hello!");

sayHi();







let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => alert('Hello!') :
    () => alert("Greetings!");

welcome();




// -------------------------------------


function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);