//  Six JavaScript Fundamentals that you need to know

// ::::1:::::VAR DECLARETION
// why does declare a variable  using let and const insted var????
// >>>>>>>>>>>>>>>>>>>>>>simple once word
//  let: if we need reassign our value 
// const: if we dont have need reassign our value 
// var: we should not use var couse it is function scope

function varDisadvantage() {
    let a = 10;
    if (true) {
        a = 30;
        a = 40;
        let b = 20;
        b = 50;
        console.log(a);
    }
    console.log(b);     // b will be not console but if it would be var it will be console

}
varDisadvantage(true)

// ::::2:::::CONDITION
// 6 basic single condition > , < , === , !== , <= , >=
// multiple condition : && , || 

const fatherName = "arnold";
let season = "winter";
if (fatherName === "arnold" || season === "winter") {
    console.log("get the point");

}
else if (fatherName === "arnold" || season === "rainy") {
    console.log("error");
}
else {
    console.log("no result");
}

// ::::3::::ARRAY
// a. index:strat from 0  , b.length: using array_name.length we can get array element numbers , c.push .d set a single elemtn by specified index:array_name[0]

let array_name = [13, 78, 89, 45, 50];

// ::::4::::Loop
for (let i = 0; i < n; i++) {

}
// ::::5::::function

function myFunction(parameter1, parameter2) {
    // code execution
}
myFunction()

// ::::5::::object
// a.3 ways access property by object name
let student =
{
    name: "badhon",
    roll: 44432,
    subject: ["math", "computer science"],
    mobile: { brand: "symphoni", model: "4354redbook" }
}
let myvar = "roll";
console.log(student.roll);
console.log(student["roll"]);
console.log(student[myvar]);
// end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 37-2 Some others importance things
// 1.template string
console.log(`my roll was ${student.roll} in diploma`);
// 2.arrow function declaretion
// with no parameter
const arrow_function = () => console.log("55");
// with single parameter
const arrow_function2 = (n) => n + 55;
// with multi  parameter
const arrow_function3 = (x, y, z) => x + y + z;
// multi code in arrow function
const arrow_function4 = (x, y, z) => {
}
// 3.spread oparetor
// usecse of spread oparetor
// 1.Copying Arrays:
const originalArray1 = [1, 2, 3];
const copyArray = [...originalArray];
// 2.Combining Arrays::
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
// 3.Adding Elements to an Array:
const originalArray2 = [1, 2, 3];
const newArray = [...originalArray, 4, 5];

// Passing Arguments to Functions:
function add(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
const result = add(...numbers);
//  5.Destructuring Arrays:
const [first, ...rest] = [1, 2, 3, 4, 5];
// first: 1, rest: [2, 3, 4, 5]
// end>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>nnn
// 37-3 Array methods (map, forEach, filter and find,includes manually aND EXPLORE FIND VS FILTER)
let carCollection = [
    { type: "Fiat", model: "504", color: "white" },
    { type: "bmw", model: "500", color: "red" },
    { type: "safari", model: "503", color: "blue" },
    { type: "mitshubisi", model: "5005", color: "tomato" },
    { type: "tata", model: "5008", color: "sky blue" },
    { type: "toyta", model: "5000", color: "black" },
    { type: "habijubi", model: "5002", color: "assh" }
]

// using map mathods
// const getCarModel = carCollection.map(model=> model.)
// using forEach mathods
// using filter mathods
// using find mathods 
// using includes mathods


// array and object distructhing use case 

let arrayDistructhing = [23 , 45, 67, 89 ];
let num1 = arrayDistructhing[0];
let num2 = arrayDistructhing[1]

//insted we uses distructhing 

const [x , y]= [23,45,67,89];


// 37-5 JSON, Fetch, keys, values, array add or remove using dots
// 1.fetch 
fetch ("url")
.then (res => res.json())
.then(data => console.log(data))


// 37-6 (advanced) truthy, falsy, Ternary operator, shortcut and or