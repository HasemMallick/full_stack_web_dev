//  1. Password Validator
// function passwordValidator(enteredPassworod, confirmedPassword) {
//     if (enteredPassworod === confirmedPassword) {
//         console.log("Password Matched. Password Valdation Successful");
//     } else {
//         console.log("Password didn't match, Password validation unsuccessful");
//     } 
// }
// console.log(passwordValidator("abce", "abce"));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  2. Calculator
// function calculator(num1, operator, num2) {
//     let result;
//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//         case "/":
//             result = num1 / num2;
//             break;
//         default:
//             console.log("Invalid Operator");
//             return;
//     }
//     console.log(`${num1} ${operator} ${num2} = ${result} `);
// }
// calculator(10, "+", 2);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 3. Color Mixer
// function colorMixer(color1, color2) {
//     let newColor;
//     switch(newColor) {
//         case 1:
//             color1 === "red" && color2 === "blue" || color1  === "blue" && color2 === "red";
//             newColor = "purple";
//             break;
//         case 2: 
//             color1 === "red" && color2 === "yellow" || color1  === "yellow" && color2 === "red";
//             newColor = "orange";
//             break;
//         case 3:
//             color1 === "blue" && color2 === "yellow" || color1  === "yellow" && color2 === "blue";
//             newColor = "green";
//             break;
//         default:
//             console.log("Invalid color combination");
//             return;
//     }
//     console.log(`${color1} ${color2} ${newColor}`);
// }
// colorMixer("red", "blue")

// function colorMixer(color1, color2) {
//     let newColor;
//     switch (color1 + color2) {
//       case "redblue":
//       case "bluered":
//         newColor = "purple";
//         break;
//       case "redyellow":
//       case "yellowred":
//         newColor = "orange";
//         break;
//       case "blueyellow":
//       case "yellowblue":
//         newColor = "green";
//         break;
//       default:
//         console.log("Invalid color combination");
//         return;
//     }
//     console.log(`${color1} + ${color2} = ${newColor}`);
// }
// colorMixer("red", "blue");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 3. Highest Marks
// const marks = [87, 88, 98, 95, 96];
// function highestMarks(array) {
//     let highest = array[0];
//     for(value of array) {
//         if (value > highest) {
//             highest = value
//         }
//     }
//     return highest;
// }
// console.log(highestMarks(marks));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 5. Capitalize

// +++++++++++++++++++++++++++++++++++++++++====
// 6. Vowel Counter
// const nam = "AEIou";

// function vowelCounter(name) {
//     let count = 0;
//     const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
//     for (let value of name) {
//         if(vowels.includes(value)) {
//             count ++;
//         }
//     }
//     return count;
// }
// console.log(vowelCounter(nam));

// ++++++++++++++++++++++++++++++++++++++++++
// 7. Remove Duplicates
// const cart = ["mobile", "laptop", "book"];

// function removeDuplicates(cart) {
//     let newCart = [];
//     for (let i of cart) {
//         if (newCart.indexOf(cart))
//     }
// }


// +++++++++++++++++++++++++++++++++++++++++++++=
// 8. Inverted right-angled triangle pattern with asterisks  
// function invertedTrianglePattern(i) {
//     let pattern = "";
//     for (let row = i; row >= 1; row--) {
//       for (let j = 1; j <= row; j++) {
//         pattern += "*";
//       }
//       pattern += "\n";
//     }
//     console.log(pattern);
// }
// invertedTrianglePattern(6);


// ++++++++++++++++++++++++++++++++++++++++++++++
// 9. Check for Divisibility.

// function findDivisibility(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0 && array[i] % 2 !== 0) {
//       console.log(array[i]);
//       continue;
//     }
//   }
// }
// findDivisibility([10, 9, 15, 21]);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 10. Correct a bug
// const cart = [5, 6, 7, 8]
// function arrayMulti(cart) {
//   for (let i = 0; i < cart.length; i++) {
//     cart[i] *= 2;
//   }
//   return cart;
// }
// const newCart = arrayMulti(cart);
// console.log(newCart);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 11.  Unit converter

// function unitConverter(temperature) {
//   let newTemperature;
//   newTemperature = (temperature * 9 / 5) + 32;
//   return newTemperature;
// }
// const temp = 24;
// console.log(unitConverter(temp));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 12. Calculate rental cost
// const Economy =  4000;
// const Midsizd =  10000;
// const Luxury =  20000;
// function rentalCost(days, carType) {
//   return days * carType;
// }
// console.log(rentalCost(4, Economy));
// console.log(rentalCost(4, Midsizd));
// console.log(rentalCost(4, Luxury));


// +++++++++++++++++++++++++++++++++++++++++++++++
// Bill Splitter




// +++++++++++++++++++++++++++++++++++++++++++++++++++
// 14. Calculate the final order price
// function totalCost(cart) {
//   let totalCost = 0;
//   for (let item of cart) {
//     totalCost += item.unitPrice * item.quantity;
//   }
//   return totalCost;
// }
// const costomer = [{
//   price: 250,
//   quantity: 3,
// }];
// console.log(totalCost(costomer));


// ++++++++++++++++++++++++++++++++++++++++++++++++++
// 15. Calculate the percentage of the discount

// const discountPercntage = (originalPrice, discountedPrice) => {
//   const discount = originalPrice - discountedPrice;
//   const discountPercentage = (discount / originalPrice) * 100;
//   return discountPercentage * 100.00 / 100.00;
// };
// console.log(discountPercntage(100, 10));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 16. Generate a random number
// (function() {
//   const randomNumber = Math.floor(Math.random() * 100) + 1;
//   console.log(`Random number: ${randomNumber}`);
// })();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 17.  Build a banking application

// let customer = {
//   name: "X",
//   balance: 500,
// };

// function deposit(customer, amount) {
//   customer.balance += amount;
//   return `Deposited >> ${amount}. New balance >> ${customer.balance}`;
// }
// function withdraw(customer, amount) {
//   if (customer.balance < amount) {
//     return "Insufficient funds";
//   }
//   customer.balance -= amount;
//   return `Withdrawn successfully >> ${amount}. New balance >> ${customer.balance}`;
// }
// console.log(deposit(customer, 500)); 
// console.log(withdraw(customer, 200)); 
