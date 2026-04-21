

// const arr = [1, 2, 3, 4, 5];

// const [first, second, ...rest] = arr;

// console.log(first); // Output: 1
// console.log(second); // Output: 2
// console.log(rest); // Output: [3, 4, 5]

// function print(num, num1, ...rest) {
//     console.log(num);
//     console.log(num1);
//     console.log(rest);
// }

// print(10, 20, 30 , 40 , 50)



// spread operator

// const arr1 = [1, 2, 3];

// function sum(a, b, c) {
//     console.log(a + b + c);
    
// }

// sum(...arr1)


const arr = [10, 20, 30, 40, 50];

function addition(a, b, c, ...d) {
    console.log(a, b, c, d);
}

addition(...arr)