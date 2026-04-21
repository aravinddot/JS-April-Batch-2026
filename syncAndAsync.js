
// Synchronous code example

// console.log("task 1");
// console.log("task 2");
// console.log("task 3");


// Asynchronous code example

// console.log("task 1");

// setTimeout(() => {
//     console.log("task 2");
// }, 5000);

// console.log("task 3");


function getApiData() {
    const result = fetch('https://automationexercise.com/api/productsList').then(data => {
        return data.json()
    })
    return result
}

getApiData().then(data => {
    console.log(data);
    
})


async function getApi() {
    const result = await fetch('https://automationexercise.com/api/productsList')
    const data = await result.json()
    console.log(data)
}

getApi()