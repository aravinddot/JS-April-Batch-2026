
// array destructuring

const arr = ["cypress", "selenium", "nightwatch", "webdriverio", "puppeteer", "playwright", "testcafe", "protractor"];


const [one, two, three, four, five, six, seven, eight] = arr


const [firstValue, secondValue, ...rest] = arr

// console.log(firstValue);
// console.log(secondValue);
// console.log(rest);


const [ , , thirdValue, ...rest1] = arr

// console.log(thirdValue);


const num = ["cypress", "selenium", "nightwatch", "webdriverIO"]

const [first, second, third, fourth = "default"] = num

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth); 


const nestedArr = [1, 2, [3, 4, 5], 6, 7]

const [a, b, [c, d, e], f, g] = nestedArr

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);

function getValues() {
    return [10, 20]
}

const [x, y] = getValues()

console.log(x);
console.log(y);



