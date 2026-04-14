//const arr = ["cypress", "selenium", "nightwatch", "webdriverio", "puppeteer", "playwright", "testcafe", "protractor"];

// array.push() - add element at the end of the array
// modifes the original array
// returns the new length of the array

// arr.push("new value")

// console.log(arr);

// array.pop() - removes the last element of the array and returns it
// modifes the original array

// arr.pop()

// console.log(arr);

// arr.shift() - removes the first element of the array and returns it

// arr.shift()

// console.log(arr);

// arr.unshift() - adds an element at the beginning of the array and returns the new length of the array

// arr.unshift("new value")

// console.log(arr);

// const arr = ["cypress", "selenium", "nightwatch", "webdriverio", "puppeteer", "playwright", "testcafe", "protractor"];

// arr.inludes() - checks if an element is present in the array and returns true or false

// console.log(arr.includes('Playwright'));

// arr.indexOf() - returns the index of the first occurrence of an element in the array, or -1 if it is not present

// console.log(arr.indexOf('Playwright'));

// arr.slice(2, 5) // returns a new array with the elements from index 2 to index 4 (5 is not included)
// does not modify the original array

//console.log(arr.slice(2, 4));

// console.log(arr.slice(5, 7));

// arr.splice() - modifies the original array by adding, removing or replacing elements

// arr.splice(2, 3, "new value", "second value") // removes 3 elements from index 2 and adds "new value" at index 2

// console.log(arr);

// arr.splice(0, 2, "cypress and Selenium")

// console.log(arr);

// arr.splice(0, 1, "Vibium")

// console.log(arr);

// forEach() - executes a provided function once for each array element

// arr.forEach((value, index) => {

//     console.log("value==>" +value);
//     console.log("index==>" + index);

// })

// array.keys() - returns a new Array Iterator object that contains the keys for each index in the array

// for(const key of arr.keys()) {
//     console.log(key);

// }
const arr = ["cypress","selenium","nightwatch","webdriverio","puppeteer","playwright","testcafe","protractor",];

// for(const value of arr.values()) {
//     console.log(value);

// }

// array.entries() - returns a new Array Iterator object that contains the key/value pairs for each index in the array

for (const entry of arr.entries()) {
  console.log(entry);
}
