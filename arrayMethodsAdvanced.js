
// const arr = ["cypress", "selenium", "nightwatch", "webdriverio", "puppeteer", "playwright", "testcafe", "protractor"];

// console.log(arr.length);

// arr.concat() - returns a new array by merging two or more arrays

// const a = [1, 2]
// const b = [3, 4]
// const d = [5, 6]

// const c = a.concat(b, d)

// console.log(c);

//const arr = ["cypress", "selenium", "nightwatch", "webdriverio", "puppeteer", "playwright", "testcafe", "protractor"];

// const num = [1, 2, 3, 4, 5]

// arr.map() - returns a new array by applying a function to each element of the array


// const newArr = arr.map(value => value + " is a testing framework")

// console.log(newArr);

// const addition = num.map(item => item * 2)

// console.log(addition);


// arr.filter() - returns a new array with all elements that pass the test implemented by the provided function

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// const filteredValues = numbers.filter(num => num > 50)

// console.log(filteredValues);

// array.find() - returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned

// const found = numbers.find(num => num > 50)

// console.log(found);

const arr = ["z","cypress", "selenium", "nightwatch", "webdriverio", "puppeteer", "playwright", "testcafe", "protractor", 'a'];

// array.sort()

// arr.sort((a, b) => a.localeCompare(b))

// console.log(arr);

// arr.reverse()

// console.log(arr);


// const arrTwo = [1, 2, [3, 4, 5, [6, 7, [8, 9, [10]]]]]

// console.log(arrTwo.flat(Infinity));


const arrThree = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 101, 10]

// const validate = arrThree.every(num => num > 11)

// console.log(validate)


// const arrSome = arrThree.some(num => num > 101)

// console.log(arrSome);


// const foundIndex = arrThree.findIndex(num => num > 50)

// console.log(foundIndex);

// const lastIndex = arrThree.lastIndexOf(101)

// console.log(lastIndex);

const total = arrThree.reduce((acc, curr) => acc + curr, 0)

console.log(total);

