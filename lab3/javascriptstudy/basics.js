// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax




let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};





// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30






// let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];





let user = {
    name: "John",
    age: 30
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
alert( user[key] ); // John (if enter "name")






let user = {
    name: "John",
    age: 30
};

//   let key = "name";
alert( user.key ) // undefined






let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"








function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    };
}

let user = makeUser("John", 30);
alert(user.name); // John





// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
};

alert( obj.for + obj.let + obj.return );  // 6






//   let obj = {
//     0: "test" // same as "0": "test"
//   };

// both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)





let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"







let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist