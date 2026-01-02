// // // variable

// // // var   - function scope , global scope

// // // let   - block scope

// // // const - block scope


// // // rules

// // // var

// // var chocolateBox  = 10         // declration // intialiazation

// // chocolateBox      = 15         // reuse   // reIntialazation

// // var chocolateBox  = 20         // reDeclration


// // console.log(chocolateBox)


// // // let 

// // let a = 12 // dec   // intia

// // a     = 15 // reuse // reIntia

// // // let a = 50 not reDecl

// // console.log(a);


// // // const 

// // const b = 21 // decle  // intia

// // // b       = 23  not accept reuse , reIntialiazation

// // // const b = 30  // not accept reDec

// // console.log(b)


// // // examples 


// // // Question 1
// // var a = 10;
// // a = 20;
// // console.log(a);  // 20

// // // Question 2
// // var b = 5;
// // var b = 15;
// // console.log(b);  // 15

// // // Question 3
// // let c = 30;
// // c = 40;
// // console.log(c);  // 40 

// // // Question 4
// // let d = 25;
// // console.log(d);  // 25

// // // Question 5
// // const e = 50;
// // console.log(e);  // 50

// // // Question 6
// // var f = 10;
// // f = f + 5;
// // console.log(f);  // 15

// // // Question 7
// // let g = 100;
// // g = g - 20;
// // console.log(g);  // 80

// // // Question 8
// // const h = 2;
// // const result = h * 5;
// // console.log(result);  // 10

// // // Question 9
// // // var i = 1;
// // // i++;
// // // console.log(i);  // 

// // // // Question 10
// // // let j = 10;
// // // j += 5;
// // // console.log(j);

// // // Question 11
// // const k = "Java";
// // console.log(k); // "java"

// // // Question 12
// // var l = 10;
// // l = l * 2;
// // console.log(l); // 20



// var a = 30
// let b = a
// var a = 50
// const c = a

// console.log(a); // 50

// printing statement

// 1. console.log()

let a = 10

console.log(a);
console.log(100)


// 2. alert()

// alert("hi hello there")

// 3. confirm()

// confirm("did you like js")


// 4. prompt()

// prompt("what is your name")

// 5. document.writeln()

// document.writeln("hello")


// i want print user name

// let name1 = prompt("what is your name")
// console.log(name1);

// i want msg convey to user side in pop

// alert("hello!!!")




// i want to ask question user side

// confirm("did you like apple")

// i want to print msg in ui

// document.writeln("hello")


// console method 

// 1. console.log()

let b = 40

console.log(b);


// 2. console.warn()

console.warn(100);


// 3. console.error()

console.error(100);


// 4. console.clear()

console.clear()

// DataType 

// 1. primitive datatypes

// 1. string - ""

   let c = "123"

   console.log(c);
   

   console.log(typeof(c));
   

// 2. number

let d = 1234

console.log(typeof(d));


// 3. boolean

let e = false

console.log(typeof(e));


// 4. undefined

let f ;

console.log(f);


// 5. null

// let g = prompt()

// console.log(g);




// 2. non primitive datatypes

// 1. Array - index number

// syntex  = []

let fruit = ["cherry","apple","orange","pineApple","green"]

console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);


console.log(fruit[0]);
console.log(fruit[fruit.length-1]);


// 2. object - dot notation method

// syntex = {}

let fruit1 = {
    fruit : ["apple","cherry","pineApple","orange"],
    color : "green"
}

console.log(fruit1);
console.log(fruit1.color);
console.log(fruit1.fruit[1]);


console.clear()

// operators 

// Arithmetic operator

// Addition   +

console.log(1 + 2);

// subraction  - 

console.log(2 - 2);

// multiplication * 

console.log(4 * 4);


// division   / 

console.log(5 / 5);

// modulus   % 

console.log(10 % 5);

// exponencial  ** 

console.log(5**3); // 5^3  = 5*5*5 = 125


// increament   ++ = +1

// post  = var++
// pre   = ++var

let h = 4

h++

console.log(h);


let j = 2   // null

j     = j++ // 2

console.log(j);


let k = 5 

k     = ++k

console.log(k); // 6

let l = 2   
let m = l++ // l = 2

console.log("l",l); // l = 3
console.log("m",m); // m = 2

// decreament -- = -1 

// post = var --
// pre  = --var













// Assignment operator

// relational OR comparision operator

// logical operator

// ternary operator




// 3. function

// 4. Date



