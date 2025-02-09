let user = {
    name: "John",
    age: 30,

    toString() {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
};

alert(user); // {name: "John", age: 30}





let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "spouse": null
}
*/







// a number in JSON is just a number
alert( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
alert( JSON.stringify('test') ) // "test"

alert( JSON.stringify(true) ); // true

alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]





// let user = {
//     sayHi() { // ignored
//       alert("Hello");
//     },
//     [Symbol("id")]: 123, // ignored
//     something: undefined // ignored
//   };

//   alert( JSON.stringify(user) ); // {} (empty object)






let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};

alert( JSON.stringify(meetup) );
/* The whole structure is stringified:
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
}
*/





let room = {
    number: 23
};

//   let meetup = {
//     title: "Conference",
//     date: new Date(Date.UTC(2017, 0, 1)),
//     room
//   };

alert( JSON.stringify(meetup) );
/*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)
    "room": {"number":23}               // (2)
  }
*/



// let value = JSON.parse(str[, reviver]);


// stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1




let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// let user = JSON.parse(userData);

alert( user.friends[1] ); // 1





