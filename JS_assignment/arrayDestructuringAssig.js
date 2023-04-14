// +++++++++++++++++++++++++++++++++++++++++++++++
// 1) Count the occurrences.

// function countWordOccurrences(str) {
//     const words = str.toLowerCase().split(" ");
//     const wordCountMap = new Map();
    
//     for (const i of words) {
//       if (wordCountMap.has(i)) {
//         wordCountMap.set(i, wordCountMap.get(i) + 1);
//       } else {
//         wordCountMap.set(i, 1);
//       }
//     }
    
//     return wordCountMap;
//   }

// console.log(countWordOccurrences("The quick brown fox jumps over the lazy dog"));

// +++++++++++++++++++++++++++++++++++++++++++++++++
// 2) Only unique items are allowed.

// const array = [1, 4, 6, 3, 3, 4, 2];

// const removeDuplicates = array => new Set(array);

// console.log(removeDuplicates(array));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++
// 3) Swap the values.

// const swapArrayEle = (x, y) => {
//     [x, y] = [y, x];
//     return [x, y];
// };
// console.log((swapArrayEle(5, 10)));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 4) Access random elements.

// const extractFirstSecondLase = (array) => {
//     const [first, second, ...args] = array;
//     const last = args.pop();
//     return [first, second, last];
// };

// const array = [1, 2, 3, 4, 5]
// console.log(extractFirstSecondLase(array));


// +++++++++++++++++++++++++++++++++++++++++++++++++
// 5) Min and max values

// const findMinMax = (array) => {
//     const min = Math.min(...array)
//     const max = Math.max(...array)
//     return {min, max}
// };

// const array = [5, 2, 7, 1, 9];
// console.log(findMinMax(array));


// +++++++++++++++++++++++++++++++++++++++++++++++++
// 6) Nested Objects.

// const person = {
//     name: "Ali",
//     age: 24,
//     address:{
//         street: "121, abc, xyz",
//         city: "XYZ",
//         state: "UP"
//     }
// }

// const extractNameStreet = (obj) => {
//     const { name, address: { street } } = person;
//     return { name, street };
// }

// console.log(extractNameStreet(person));