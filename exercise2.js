//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}


//your code...

let i = 0
while (i < 10) {
  console.log(" the value of i in the loop is : " + i);
  i++;
}



/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

//your code...

let add = function(x,y) {
    return x + y;
  }
  
  let multiply = function(x,y) {
    return x * y;
  }
  
  let divide = function(x,y) {
    return x / y;
  }
  
  let result = add(30, 2);
  result = multiply(result, 20);
  result = divide(result, multiply(10,10));
  
  console.log(result);



/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
console.log(`20 is ${!!20 == true} because positive nonzero numbers are truthy`);

// 0
console.log(`0 is ${!!0 == true} because zeros are falsy`);

// "zero";
console.log(`"zero" is ${!!("zero") == true} because strings are truthy`);

// const zero = 20;

const zero = 20
console.log(`const zero = 20; is ${!!zero} because defined variables are truthy`);

// null
console.log(`null is ${!!null == true} because null is always falsy`);

// "0"
console.log(`"0" is ${!!"0" == true} because strings are truthy`);

// !""
console.log(`!"" is ${!("")} because the opposite of the boolean value of an empty string is truthy`);

// {}
console.log(`{} is ${!!{} == true} because objects are truthy`);

// () => {console.log("hello TEKcamp!");
console.log(`() => {console.log("hello TEKcamp!"); is ${!!(() => {console.log("hello TEKcamp!");})} because functions are truthy`);

// 125
console.log(`125 is ${!!125 == true} because positive nonzero numbers are truthy`);

// undefined
console.log(`undefined is ${!!undefined == true} because undefined is always falsy`);

// ""
console.log(`"" is ${!!("") == true} because empty strings are falsy`);



/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

// const day = "friday";

// if(day === "monday") {
//     console.log("we got a long week ahead of us...");
// } else if(day === "tuesday") {
//     console.log("tuesday's are still beterr than mondays, but LONG way to go still");
// } else if (day === "wednesday") {
//     console.log("We are smack dab in the middle of the week");
// } else if (day === "thursday") {
//     console.log("Thursday night... the mood is right");
// } else if (day === "friday") {
//     console.log("TGIF.  Friday truly is the best day of the week!")
// } else {
//     console.log("It's a weekend!")
// }

const day = "friday";

switch (day) {
  case "monday":
    console.log("we got a long week ahead of us...");
    break;
  case "tuesday":
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
    break;
  case "wednesday":
    console.log("We are smack dab in the middle of the week");
    break;
  case "thursday":
    console.log("Thursday night... the mood is right");
    break;
  case "friday":
    console.log("TGIF.  Friday truly is the best day of the week!");
    break;
  default:
    console.log("It's a weekend!");
}

/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
// if (age > 21) console.log("adult"); else {
//     console.log("minor");
// }

age > 21 ? console.log("adult") : console.log("minor");

// if (age > 13 && age < 19) console.log('teen'); else {
//     console.log("not a teenager");
// };

age > 13 && age < 19 ? console.log('teen') : console.log("not a teenager");

// if (age > 65) console.log("retired"); else {
//     console.log("still working...");
// }

age > 65 ? console.log("retired") : console.log("still working...");

/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...

let phoenix = {
    name: "Phoenix",
    age: 36,
    gender: "Female",
    hobbies: ["yoga", "reading", "coding"],
    profession: "Student",
    education: "Bachelors",
    learn: function() {
      console.log(this.name);
    },
    calcBirthYear: function() {
      console.log(2020 - this.age);
    }
}

phoenix.learn();
phoenix.calcBirthYear();

/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...

let animal = {
    species: "Cat",
    gender: "Male",
    name: "Bughuul",
    yearBorn: 2018,
    calcAge: function() {
      console.log(2020 - this.yearBorn);
    },
    isJerk: function() {
      if (this.species == "Cat")
      console.log("Jerk");
    }
  }
  
  animal.calcAge();
  animal.isJerk();


/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...
let favTypes = function() {
    console.log("String - because you can write beautiful poetry with them");
    console.log("Array - because I can store my grocery list in them");
    console.log("Object - because they can describe the traits of my favorite things");
  }
  
  favTypes();


/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...
let multiple = function(x) {
    let fn = function(y) {
        return x * y;
    }
    return fn;
}

let func = multiple(3);

console.log(func(func(3)));



// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...
let stockGain = function(basis) {
    let message = " is how much the stock has increased";
    let years = function(yrs) {
        let r = 0.05
        console.log(((basis * yrs) * r) + message);
    }
    return years;
}

stockGain(100)(1);

let futureValue = stockGain(100);
futureValue(5);
