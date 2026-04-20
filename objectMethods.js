

// object methods

const person = {
    name: "Aravind",
    age: 30,
    city: "Bangalore",
    profession: "Software Engineer"
}

// [name, Aravind]
// [age, 30]
// [city, Bangalore]
// [profession, Software Engineer]

// console.log(person["name"]);


// for(const key in person) {
    
//     console.log(person[key]);
    
// }


// for(const key of Object.keys(person)) {
    
//     console.log(key);
    
// }


// for(const key of Object.values(person)) {
    
//     console.log(key);
    
// }

for(const [key, value] of Object.entries(person)) {
    
    console.log(key, value);
    
}


// const personTwo = {
//     name: "Aravind",
//     age: 30,
//     city: "Bangalore",
//     profession: "Software Engineer"
// }

// //Object.freeze(personTwo) //freezes the object and prevents any modifications to the object

// Object.seal(personTwo) //seals the object and prevents adding or deleting properties from the object but allows modifying existing properties

// personTwo.state = "TN" //adding a new property to the object

// delete personTwo.age //deleting a property from the object

// personTwo.name = "playwright" //modifying a property of the object

// console.log(personTwo);


// const obj1 = {a: 1, b: 2}
// const obj2 = {c: 3, d: 4}

// const mergedObj = Object.assign({}, obj1, obj2) //merges two or more objects and returns a new object

// console.log(mergedObj);