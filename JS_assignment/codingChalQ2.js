// ===================================================================
// 1) Reverse String.

// const reverseStrWithDelay = (input) => {
//     console.log("Input string: " +input);

//     setTimeout(() => {
//         const reverseStr = input.split("").reverse().join("")
//         console.log(`Reversed string after 2 seconds: ${reverseStr}`);
//     }, 2000);
// }

// const input = "Hello World!!!!!";

// console.log(reverseStrWithDelay(input));


// =======================================================================
// 2) Random Number Generator with Delay and Progress Indication: imeDelay
// let timeDelay = 3;

// const timeCounter = setInterval(() => {
//     console.log(`Time remaining: ${timeDelay} seconds`);
//     timeDelay--;
// }, 1000);

// setTimeout(() => {
//   clearInterval(timeCounter); 
//     const randomNumber = Math.floor(Math.random() * 1000) + 1; 
//     console.log(`Random number generated: ${randomNumber}`);
// }, timeDelay * 1000);


// ======================================================================
// 3) Build a feature for Store's Inventory.

// let exchangeRate = 80; 

// const inventory = {
//     item1: 1,
//     item2: 2,
//     item3: 3,
//     item4: 4,
// };

// const convertToINR = (priceUSD) => {
//     return priceUSD * exchangeRate;
// };

// const inventoryINR = Object.keys(inventory).map((item) => {
//     return {[item] : convertToINR(inventory[item])};
// })
// console.log(inventoryINR);


// ===================================================================
// Filtering and Capitalizing: Books Published After 2010 with Author Names.

