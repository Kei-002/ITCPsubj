/*
var msg = "Hello World";
console.log(msg);

var a = 101923123;
console.log(`this is a number ${a}`);

var today = new Date();
console.log(today.getDate()); //4
console.log(today.getMonth()); //
console.log(today.getFullYear()); //2020
console.log(today.getHours()); //23
console.log(today.getMinutes()); //13
console.log(today.getSeconds()); //10
//number of milliseconds since January 1, 1970, 00:00:00 UTC
console.log(today.getTime()); //1432748611392
console.log(today.getTimezoneOffset()); //-330 Minutes
//Calculating elapsed time
var start = Date.now();
// loop for a long time

for (var i = 0; i < 100; i++);
var end = Date.now();
var elapsed = end - start; // elapsed time in milliseconds
console.log(elapsed); //71

// let is for local
var scope_name = "global";
function showScopeName() {
  let scope_name = "local";
  console.log(scope_name);
}
console.log(scope_name);
showScopeName();

var foo = true;
var bar = 32;
if (foo) {
  var bar = 42;
  console.log(bar);
}
console.log(bar);

var s = new String("dummy"); //Creates a String object
console.log(s); //"dummy"
console.log(typeof s); //"object"
var nonObject = "1" + "2"; //Create a String primitive
console.log(typeof nonObject); //"string"
var objString = new String("1" + "2"); //Creates a String object
console.log(typeof objString); //"object"
//Helper functions
console.log("Hello".length); //5
console.log("Hello".charAt(0)); //"H"
console.log("Hello".charAt(1)); //"e"
console.log("Hello".charAt(1)); //"e"
console.log("Hello".indexOf("e")); //1
console.log("Hello".lastIndexOf("l")); //3
console.log("Hello".startsWith("H")); //true
console.log("Hello".endsWith("o")); //true
console.log("Hello".includes("X")); //false
var splitStringByChars = "Hello World".split("");
console.log(splitStringByChars); //["H", "e", "l", "l", "o", " ","W", "o", "r", "l", "d"]
console.log("lowercasestring".toUpperCase()); //"LOWERCASESTRING"
console.log("UPPPERCASESTRING".toLowerCase());
//"upppercasestring"
console.log("There are no spaces in the end ".trim());

console.log(true && true); // true AND true returns true
// console.log(true && false);// true AND false returns false
// console.log(false && true);// false AND true returns false
// console.log("Foo" && "Bar");// Foo(true) AND Bar(true) returns Bar
// console.log(false && "Foo");// false && Foo(true) returns false
// console.log("Foo" && false);// Foo(true) && false returns false
// console.log(false && (1 == 2));// false && false(1==2) returns false

function greeting(name) {
  console.log(name);
  if (name === undefined) {
    name = "john";
  }

  var names = name || "John";

  console.log("Hello " + name);
}
// greeting("Johnson"); // alerts "Hi Johnson";
greeting(); //alerts "Hello John"

var s = new String("string");
console.log(!s);
//If the operand is the number 0, true is returned.
var t = 0;
console.log(!t);
//If the operand is any number other than 0, false is returned.
var x = 11;
console.log(!x);
//If operand is null or NaN, true is returned
var y = null;
var z = NaN;
console.log(!y); //true
console.log(!z);
//If operand is undefined, you get true
var foo;
console.log(!foo);

function isAllowedToDrive(age) {
  if (age > 21) {
    return true;
  } else {
    return false;
  }
}
console.log(isAllowedToDrive(22));
function sayDay(day) {
  switch (day) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    default:
      console.log("We live in a binary world. Go to Pluto");
  }
}
sayDay(1); //Sunday
sayDay(3);

function add(a, b) {
  return a + b;
}
c = add(1, 2);
console.log(c);

var add = function (a, b) {
  return a + b;
};
c = add(1, 2);
console.log(c);

function changeCase(val) {
  return val.toUpperCase();
}
function demofunc(a, passfunction) {
  console.log(passfunction(a));
}
demofunc("smallcase", changeCase);

const changeCase = (val) => val.toUpperCase();

const demofunc = (a, passfunction) => {
  console.log(a, passfunction);
  console.log(passfunction(a));
};
demofunc("smallcase", changeCase);

var validateDataForAge = (data) => {
  person = data();
  console.log(person);
  if (person.age < 1 || person.age > 99) {
    return true;
  } else {
    return false;
  }
};

const errorHandlerForAge = (error) => {
  console.log("Error while processing age");
};

const parseRequest = (data, validateData, errorHandler) => {
  var error = validateData(data);
  if (!error) {
    console.log("no errors");
  } else {
    errorHandler();
  }
}
var generateDataForScientist = () => {
  return {
    name: "Albert Einstein",
    // age: Math.floor(Math.random() * (100 - 1)) + 1,
    age: 300,
  };
};

var generateDataForComposer = () => {
  return {
    name: "J S Bach",
    age: Math.floor(Math.random() * (100 - 1)) + 1,
  };
};

parseRequest(generateDataForScientist, validateDataForAge, errorHandlerForAge);
parseRequest(generateDataForComposer, validateDataForAge, errorHandlerForAge);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  address: ["address1", "address2"],
  shoes: {
    type: "sneakers",
    color: ["white", { multi: true }],
  },
};
console.log(
  person.age,
  person.firstName,
  person.address[1],
  person.shoes.color[1].multi
);
*/

//Pass parameters on non-paramter function
function sum() {
    var i, total = 0
    for(i=0; i < arguments.length; i +=1) {
        total += arguments[i]
    }
    return total
}
console.log(sum(1,2,3,4,5))
console.log(sum(1,2,3,43,5))


// Anonymous function as parameter
function eventHandler(event) {
  event();
}

eventHandler(function () {
  //do a lot of event related things
  console.log("Event fired");
});


var person = {
  name: "Albert Einstein",
  age: 66,
  greet: function () {
    console.log(this.name + " " + this.age);
  },
};

person.greet();

var arr = [
    'string', 42.0, true, false, null, undefined,
    ['sub', 'array'], {object: true}, NaN
    ];
console.log(arr)
var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
console.log(color);
});

var colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color) )

var list = colors.join(" ~ ");
console.log(list);


const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

console.log(persons.map(getFullName));

function getFullName(item) {
    console.log(item);
  return [item.firstname, item.lastname].join(" ");
}