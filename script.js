// // variable

// // var   - function scope , global scope

// // let   - block scope

// // const - block scope


// // rules

// // var

// var chocolateBox  = 10         // declration // intialiazation

// chocolateBox      = 15         // reuse   // reIntialazation

// var chocolateBox  = 20         // reDeclration


// console.log(chocolateBox)


// // let 

// let a = 12 // dec   // intia

// a     = 15 // reuse // reIntia

// // let a = 50 not reDecl

// console.log(a);


// // const 

// const b = 21 // decle  // intia

// // b       = 23  not accept reuse , reIntialiazation

// // const b = 30  // not accept reDec

// console.log(b)


// // examples 


// // Question 1
// var a = 10;
// a = 20;
// console.log(a);  // 20

// // Question 2
// var b = 5;
// var b = 15;
// console.log(b);  // 15

// // Question 3
// let c = 30;
// c = 40;
// console.log(c);  // 40 

// // Question 4
// let d = 25;
// console.log(d);  // 25

// // Question 5
// const e = 50;
// console.log(e);  // 50

// // Question 6
// var f = 10;
// f = f + 5;
// console.log(f);  // 15

// // Question 7
// let g = 100;
// g = g - 20;
// console.log(g);  // 80

// // Question 8
// const h = 2;
// const result = h * 5;
// console.log(result);  // 10

// // Question 9
// // var i = 1;
// // i++;
// // console.log(i);  // 

// // // Question 10
// // let j = 10;
// // j += 5;
// // console.log(j);

// // Question 11
// const k = "Java";
// console.log(k); // "java"

// // Question 12
// var l = 10;
// l = l * 2;
// console.log(l); // 20



var a = 30
let b = a
var a = 50
const c = a

console.log(a); // 50
