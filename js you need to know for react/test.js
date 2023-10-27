// 6 fandamental of js 

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
let myvar ="roll";
console.log(student.roll);
console.log(student["roll"]);
console.log(student[myvar]);




