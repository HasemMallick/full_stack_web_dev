// +++++++++++++++++ Values and Datatypes ++++++++++++++++

// 1. Create a javascript file, using javascript comments, List all the datatypes of Javascript, and specify an example for each of them.

// // i) string 
// const message = "Hello World!";
// console.log(message);

// // ii) Number
// const age = 42;
// console.log(age);

// // iii) BigInt
// const bigNumber = 9007199254740991n;
// console.log(bigNumber);

// // iv) Boolean
// const isTrue = true;
// console.log(isTrue);

// // v) Undefined
// let x;
// console.log(x);

// // vi) Null
// const y = null;
// console.log(y);

// // vii) Symbol
// const sym = Symbol('foo');
// console.log(sym);

// // vii) Object
// const person = {name: "John", age: 30};
// console.log(person);

//  Create an array of 10 products that you have recently purchased or viewed on an e-commerce site.

// const arr = [
//     "phone",
//     "watch",
//     "bat",
//     "book",
//     "notebook",
//     "laptop",
//     "keyboaard",
//     "chair",
//     "light",
//     "bottle"
// ]
// console.log(arr);

// 3. Create an object of a student registry of 5 students whose key is the registration number and the value is the student name. Registration number starts from 1 and continues.

// const students = {
//     1: "Ahsan",
//     2: "Zuhail",
//     3: "Ulfat",
//     4: "Jasim",
//     5: "Ananda"
// }
// console.log(students);

// ++++++++++++++++ Variables and typeof  ++++++++++++++++++++++++++++++
// 1. Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of value stored.

// i) String 
// const str = "Hello World!!!!";
// console.log(typeof str);


// ii) Number
// const num = 10;
// console.log(typeof num);

// const num2 = 10.4;
// console.log(typeof num2);

// const num3 = NaN;
// console.log(typeof num3);

// const num4 = 112233n;
// console.log(typeof num4);

// boolean
// const hello = true;
// console.log(typeof hello);

// undefiend
// const world = undefined;
// console.log(typeof world);

// null
// const vari = null;
// console.log(vari);

// symbol
// const vari2 = Symbol("Hello world");
// console.log(typeof vari2);

// object 
// const obj1 = [2, 4, 6, "Hello"];
// console.log(typeof obj1);

// object 
// const obj2 = {
//     name: "Rohit",
//     age: "5"
// }
// console.log(typeof obj2);


// 2. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and error messages.

// valid variables 
// const validVar1 = "Hello World!!!";
// const validVar2 = 14;

// invalid variables 
// const var = 4;
// const 1var = "Hello";


// +++++++++++++++++++++++ Operators +++++++++++++++++++
// 1. Write a program that prints the multiplication table in the textbook format of any number specified.

// function multiTable(num) {
//     for (let i = 1; i < 11; i++) {
//         console.log(num+ " * " + i + " = " + num * i);
//     }
// }   
// console.log(multiTable(6));

//2. Write a program to perform all the arithmetic operations[except increment and decrement operators] of javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.

// const num1 = 10;
// const num2 = 8;

// console.log(`Addition >> ${num1 + num2}`);
// console.log(`Substraction >> ${num1 - num2}`);
// console.log(`Multiplication >> ${num1 * num2}`);
// console.log(`Division >> ${num1 / num2}`);
// console.log(`Modulus >> ${num1 % num2}`);
// console.log(`Exponentiation >> ${num1 ** num2}`);


// 3. Write a program to find out the perimeter of a rectangle. Print the results to the console.

// function perimeterOfRecta(length, width) {
//     return `The parimeter of rectangle is ${length * width}` 
// }
// console.log(perimeterOfRecta(5,7));

//3. Write a program to demonstrate the results of comparison operators. Note that both the truth and false condition for each operator must be specified.

// equal 
// const num1 = 10;
// const num2 = 10;
// console.log(num1 == num2);
// console.log(num1 === num2);

// const num3 = 10;
// const num4 = 12;
// console.log(num3 == num4);
// console.log(num3 === num4); 

// not equal
// console.log(num1 != num2);
// console.log(num1 !== num2);
// console.log(num3 != num4);
// console.log(num3 !== num4); 

// greater than 
// const num5 = 13;
// const num6 = 12; 
// console.log(num5 > num6);
// console.log(num6 >= num5);

// lesset than 
// const num7 = 12;
// const num8 = 13;
// console.log(num7 < num8);
// console.log(num8 <= num7);


// +++++++++++++++++++ What are Conditions, If, If-else, if-else-if ++++++++++++++++++++++++++++

// 1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicles must stop.

// function trafficLight(str) {
//     if (str === "red") {
//         console.log("Vehicles must stop");
//     } else if (str === "orange") {
//         console.log("Vehicles must wait. The signal is changing to red or green.");
//     }  else if (str === "green") {
//         console.log("Vehicles may proceed with caution."); 
//     } else {
//         console.log("Invalid traffic light"); 
//     }
// }
// console.log(trafficLight("green"));

// 2. Write a program to print the largest of 2 numbers.

// function largestNumber(num1, num2) {
//     if (num1 == num2) {
//         return "Both numbers are equal";
//     } else if (num1 > num2) {
//         return "Number one is largest";
//     } else {
//         return "Number two is largest";
//     }
// }
// console.log(largestNumber(22, 2));

// 3. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to the numbers divisible by 3 or 5.

// function FizzBuzz(num) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         return "FizzBuzz";
//     } else if (num % 3 == 0) {
//         return "Fizz";
//     } else if (num % 5 == 0) {
//         return "Buzz";
//     } else {
//         return "Invalid input";
//     }
// }
// console.log(FizzBuzz(30));

// ++++++++++++++++++++++++++++ Switch Case +++++++++++++++++++=

// 1. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend.

// function daysUntilWeekend(dayOfWeek) {
//     switch (dayOfWeek.toLowerCase()) {
//       case "monday":
//       case "tuesday":
//       case "wednesday":
//       case "thursday":
//         return 5 - new Date().getDay();
//       case "friday":
//         return "Hooray! It's Friday! The weekend has arrived!";
//       case "saturday":
//       case "sunday":
//         return "It's already the weekend! Enjoy!";
//       default:
//         return "Invalid input. Please enter a valid day of the week.";
//     }
// }
// const input = "friday";
// const output = daysUntilWeekend(input);
// console.log(output);

//2. Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the year.

// function getMonthName(monthNumber) {
//     switch (monthNumber) {
//       case 1:
//         return "January";
//       case 2:
//         return "February";
//       case 3:
//         return "March";
//       case 4:
//         return "April";
//       case 5:
//         return "May";
//       case 6:
//         return "June";
//       case 7:
//         return "July";
//       case 8:
//         return "August";
//       case 9:
//         return "September";
//       case 10:
//         return "October";
//       case 11:
//         return "November";
//       case 12:
//         return "December";
//       default:
//         return "Invalid input. Please enter a number between 1 and 12.";
//     }
// }
// console.log(getMonthName(4));

// ++++++++++++++++ Ternary Conditions ++++++++++++++++++++++

// 1. Write a program that takes in a number and outputs whether it is positive, negative, or zero.


// +++++++++++++++++++++ Ternary Conditions ++++++++++++++++++++

// 1. Write a program that takes in a number and outputs whether it is positive, negative, or zero.

// const number = 0;
// number === 0
//     ? console.log("The number is zero")
//     :number > 0
//     ? console.log("The number is greater than zero")
//     :console.log("The number is lesser than zero");

// 2. Create a program that takes in two numbers and prints the larger one.

// const num1 = 10;
// const num2 = 10;

// num1 === num2 
//     ? console.log("Both the number are equal.")
//     : num1 > num2
//     ? console.log("The largest number is " +num1)
//     : console.log("The largest number is " +num2)


// +++++++++++++++++ Loops +++++++++++++++++++++++++++++++
// 1. Write a program that generates the multiplication table in the textbook format for a given number.

// function multiTable2(num) {
//     for (let i = 1; i < 11; i++) {
//         console.log(num+ " * " + i + " = " + num * i);
//     }
// }   
// console.log(multiTable2(5));

// 2. Write a program that prints all the positive even numbers till the number specified.

// function positiveEvenNum(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// }
// console.log(positiveEvenNum(22));