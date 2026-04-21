
// object destructuring

const person = {
    name: "playwright",
    age: 6,
    owner: "Microsoft",
    country: "UK"
}


// const { name , owner} = person

// console.log(name);
// //console.log(age);
// console.log(owner);


// const { name: frameworkName, age: frameworkAge } = person

// console.log(frameworkName);
// console.log(frameworkAge);



// const { name, age, owner, country = "USA" } = person


// console.log(name);
// console.log(age);
// console.log(owner);
// console.log(country);


const nestedPerson = {
    name: "playwright",
    age: 6,
    owner: "Microsoft",
    country: "UK",
    features: {
        crossBrowser: true,
        headless: true,
        mobileEmulation: true
    }
}

// const { name, age, features: {crossBrowser, headless, mobileEmulation}} = nestedPerson

// console.log(name);
// console.log(age);
// console.log(crossBrowser);
// console.log(headless);
// console.log(mobileEmulation);

// nestedPerson.features.crossBrowser

const {name, ...restObject} = nestedPerson

console.log(name);
console.log(restObject);