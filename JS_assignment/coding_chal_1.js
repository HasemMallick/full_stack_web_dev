// ============================================
// 1) Double using callback.

// const array = [2, 4, 6, 8];

// function doubleArrayCallback(array, callback) {
//     console.log(array);
//     const newArray = callback(array)
//     console.log(newArray);
// }

// function double(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray[i] = array[i] * 2;
//     }
//     return newArray;
// }

// doubleArrayCallback(array, double);



// ===============================================
// 2) String Manipulation.

// function manipulateString(str) {
//     const manipulatedStr = str.toUpperCase();

//     function logString() {
//       console.log(`Manipulated string is: ${manipulatedStr}`);
//     }
//     return logString;
// }

// const inputStr = "Hello World";

// const logStringCallback = manipulateString(inputStr);

// logStringCallback(); 
  

// ===============================================
// 3) Age in Days.

// const person = {
//     firstName: "Hello",
//     lastName: "World",
//     age: 24,
// };

// function ageInDays(person) {
//     let fullName = (`${person.firstName} ${person.lastName}`);

//     const age = person.age;

//     const ageInDays = age * 365;

//     function logMessage() {
//       console.log(`${fullName} and age in days is ${ageInDays}.`);
//     }
//     return logMessage;
// }
  
// const callback = ageInDays(person);

// callback();


// =============================================
// 4) Arrange in alphabetical order

// const books = [
//     { title: "A book", author: "abc", year: 2023 },
//     { title: "Z book", author: "xyz", year: 2020 },
//     { title: "Y book", author: "mno", year: 2021 },
// ];

// function arrangeInAlphabeticalOrder(books, callback) {
//     const titles = books.map(book => book.title);
//     titles.sort();
//     callback(titles);
// }
  
// function logTitles(titles) {
//     console.log('Titles in alphabetical order:');
//     console.log(titles);
// }
  
// arrangeInAlphabeticalOrder(books, logTitles);
  


// ===================================================
// 5) Greeting Promise.
