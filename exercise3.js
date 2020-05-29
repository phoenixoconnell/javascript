//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 



//your code...
let emptyOrNot = function(str) {
    if (str === "") {
        console.log("True");
    } else {
        console.log("False");
    }
}



/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 



//your code...
let str = "Learning Javascript is fun!";
let change = str.replace("fun", "cool");





/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 



//your code...

function squared() {
    let arr = [1, 2, 3, 4, 5];
    return arr.map(v => v**2)
  }

  console.log(squared())


/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.



//your code...

let arr = [1, 3, 5, 7, 9, 1, 3, 5]

function myFilter() {
    return arr.filter(v => v > 3)
  }

  console.log(myFilter());




/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 



//your code...

const arr = [1, 2, 3, 4, 5];

const total = arr.reduce((a, v) => {
    return a + v;
})

console.log(total());



/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  

//your code...

let dnaPair = function(str) {
    const inArr = str.split('')
    return inArr.map(v => {
     switch(v) {
      case 'G':
       return 'C'
      case 'C':
       return 'G'
      case 'A':
       return 'T'
      case 'T':
       return 'A'
      default:
       console.log('Invalid input')
       return
     }
    })
   }
   
   console.log(dnaPair("GCTA"));




/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

const translator = (arr) => {
    let numArr = ["one", "two", "three", "four", "five"]
    return arr.map(v => parseInt(v) || numArr.indexOf(v) +1 || v)
   }
  
  function maxNumber(numbers) {
      return Math.max(...(translator(numbers).filter(v => typeof v === "number")));
  
  }
  
  console.log(maxNumber([2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]]));

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    return translator(numbers).filter(v => typeof v === "number").sort(function(a, b){return desc ? b - a : a - b});
  };
  
  console.log(sortNums([2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]], true));




/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set({company : "TEKsystems"},"object");


console.log(mapObj.has({company : "TEKsystems"}));  
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on mapObj.set({company : "TEKsystems"},"object");, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.

let newArr = ones.slice().reverse();

console.log(newArr);


/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

function performer(cb) {
    return cb();
}


/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

//I chose the spread operator for my new feature of ES6 to demonstrate. The spread operator allows the user to "spread" an array into separate arguments, or individual pieces, which can be useful in scenarios such as copying or combining arrays, or adding to state in React.

//An example of using the spread operator to copy an array

const groceries = ["Milk", "Eggs", "Butter", "bread"];
const nextWeekGroceries = [...groceries]

console.log(nextWeekGroceries); //Outputs [ 'Milk', 'Eggs', 'Butter', 'bread' ]
