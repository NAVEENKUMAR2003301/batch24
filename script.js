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


console.clear();



// Assignment operator

let b1 = 12
let a1 = 10

    // a1 = a1 + b1  // a1 += b1

    a1 **= b1

    console.log(a1);
    

// relational OR comparision operator


// meaning       syntex     example     result

// 1. lessThen    <         5<5        false

// 2. greaterThen >         65>1       true

// 3. lessThenEq  <=        5<=5       true

// 4. GreaterThenEq >=      6>=4       true

// 5. loosyTypeEq   ==      5=="5"     true

// 6. StrictlyType  ===     5==="5"    false

// 7. loosyNotEq    !=       5!="5"    false   

// 8. StrictlyNotEq !==      6!==6     false



// logical operator 

 // AND   - &&

 // true && true = true
 // true && false = false

 // OR    - ||

 // false || false = false

//  true ||  false = true


// NOT --  !

// !(true&&false) = !(false) = true

// ternary operator


// condition ? statement : statement



// (true && false ) ? alert("hello1") : alert("hello2")



// JavaScript Operators – Code Practice (15 Questions)


// console.log(6 * 2 + 4);  //  16

// let a = 5;
// let b = a++;
// console.log(a, b); // 6 , 5

// console.log(10 == "10"); // true

// let x = 4;
// x **= 2;
// console.log(x); // 16

// console.log(!(true || false)); // false

// let m = 7;
// console.log(++m);  // 8

// console.log(15 % 4); // 3

// let p = 10;
// p -= 3;
// console.log(p); // 7

// console.log(5 === "5"); // false

// console.log(true && false || true); // true

// let n = 3;
// let q = ++n;
// console.log(n, q); // 4 , 4

// console.log(20 / 5 - 1); // 3

// console.log(8 >= 8); // true

// false ? console.log("Yes") : console.log("No");

//  no

// let r = 6;
// console.log(r++);

// 7

// let r = 6

// console.log(r++);


// concatination method  +


// let a12 = "hello"

// let a13 = "world"

// let final = a12 +" "+ a13 

// console.log(final);

// // Template litral method

// let total = `${a12} ${a13}`

// console.log(total);


// Type Conversion

// 1. implicit Type Conversion

// let z = 12

// let y = "1"

// console.log(typeof(z + y));

// string 

// string anything is String


console.log(typeof("1" + "1"));
console.log(typeof("1" + 1));
console.log(typeof("1" + true));
console.log(typeof("1" + undefined));
console.log(typeof("1" + null));
console.log(typeof("1" + [1,2]));
console.log(typeof("1" + {a:1}));


// Number 

console.log(typeof(1 + "1"));
console.log(typeof(1 + 1));
console.log(typeof(1 + true));
console.log(typeof(1 + undefined));
console.log(typeof(1 + null));
console.log(typeof(1 + [1,2]));
console.log(typeof(1 + {g:3}));


// Boolean 

console.log(typeof(true + "1"));
console.log(typeof(true + 1));
console.log(typeof(true + true));
console.log(typeof(true + undefined));
console.log(typeof(true + null));
console.log(typeof(true + [1,2]));
console.log(typeof(true + {5:4}));







// 2. Explicit Type Conversion


// number constractor (Number)

console.log(typeof(1 + Number("1")));
console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("abc"));
console.log(Number(1));
console.log(Number(0));
console.log(Number(false));
console.log(Number(true));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number([89,234]));
console.log(Number({g:6}));


// Boolean

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("123"));
console.log(Boolean("abc"));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([2]));
console.log(Boolean({l:3}));

console.clear();




// flow control statement

// 1. conditional Statement

// 1. if statement

// condition true = allow

// if(condition){statement}

// example

if(5=="5"){
    console.log("its return true");
    
}



// 2. if else statement

// condition true = allow inside if , condition false = allow else

// if(condition) {statement}else{statement}

// example

if(1){
    console.log("hello");
    
}else{
    console.log("hi");
    
}

// 3. else if statement

let hour = 100

if(hour >= 1 && hour <= 6){
    console.log("morning");
    
}else if(hour >= 7 && hour <= 12){
    console.log("later morning");
    
}else if(hour >= 13 && hour <= 18){
    console.log("afternoon");
    
}else if(hour >= 18 && hour <= 20){
    console.log("evening");
    
}else{
    console.log("night");
    
}
// 4. nested if statement 

let age  = 18
let weight = 5
let height = 155

if(age >= 18){
    if(weight >= 55){
        if(height >= 155){

            console.log("congradulation you are selected");
            

        }else{
            console.log("this height not enough");
            
        }

    }else{
        console.log("this weight not enough");
        
    }

}else{
    console.log("this age not enough");
    
}

// 5. switch statement

let trafficLight = "yellow"

switch (trafficLight) {
  case "red":
    console.log("stop the vechile");
    break;
  case "yellow":
    console.log("start the vechile");
    break;
  case "green":
    console.log("go the vechile");
    break;
}



// 2. looping Statement

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);


// 1. for loop

// for(intialiazation ; condition ; iteration){
//     // statement
// }

for(let i = 1 ; i<=5 ; i++ ){
    console.log(i);  // 1 2 3 4 5
}


// let i = 1 ; 1 <= 5 = true ; 1++; = 2
// let i = 2 ; 2 <= 5 = true ; 2++; = 3
// let i = 3 ; 3 <= 5 = true ; 3++ = 4
// let i = 4 ; 4 <= 5 = true ; 4++ = 5
// let i = 5 ; 5 <= 5 = true ; 5++ = 6
// let i = 6 ; 6 <= 5 = false

// odd num find

for(let i = 1 ; i <= 10 ; i++){
    if(i%2==1){
        console.log("odd :",i);
        
    }
    
}

// 2. while loop

// intialiazation

// while(condition){
//     // statement

//     // iteration
// }

let val = 4

while(val >= 10){

    console.log(val);

    val--
    
}


//  i = 4 ; 4 >= 0 = true ; log(4)  ; 4-- = 3
//  i = 3 ; 3 >= 0 = true ; log(3)  ; 3-- = 2
//  i = 2 ; 2 >= 0 = true ; log(2)  ; 2-- = 1
//  i = 1 ; 1 >= 0 = true ; log(1)  ; 1-- = 0
//  i = 0 ; 0 >= 0 = true ; log(0)  ; 0-- = -1
//  i = -1 ; -1 >= 0 = false




// 3. do while loop

// intialiazation 

// do{
//     statement ;

//     iteration ;
// }

// while(condition)

let val1 = 4

do{
    console.log(val1);

    val1--
    
}

while(val1 >= 0 )

// 4. for of loop - string , array , function

let str = "javascript"
let arr = ["red","black","blue","green"]

for(let i of arr){
    console.log(i);
    
}



// 5. for in loop - object

let obj = {
    one : "john",
    two : "developer",
    three : 200000
}


for(let a in obj){
    console.log(obj[a]);
    
}

console.clear();

// function 

// function one(){
//     // statement
// }

function one(a){
    console.log("hi");
    console.log("hello");
    console.log(123);
    console.log(true);
    console.log(a);
    
    
}

one("hello")

function two(){
    return 100
}

let value = two()

console.log(value);

function three(){
    console.log(value);
    
}

three()



let empDet = {

    eName : "john",
    eRole : "developer",
    eSalary : 200000

}

function empDe(){
    console.log(empDet.eName);
    console.log(empDet.eRole);
    console.log(empDet.eSalary);
    
}

empDe()


// // function Types 

// // 1. named function 

// named("Argument")
// function named(parameter){
//     console.log("named function");
    
// }


// // 2. Annoynmous Function

// let Annoynmous = function(parameter){
//     console.log("annonymous function");
    
// }
// Annoynmous("Argument")


// // Arrow Function


// let Arrow = (parameter)=>{
//     console.log("Arrow Function");
    
// }

// Arrow("Argument")



// Scopes

// var - global scope

// let - block scope

// const - block scope

console.clear();

function scopeCheck(){
    if(true){
        var a12 = "global scope"
        let b12 = "block scope"
        const c12 = "block scope"
        console.log(b12);
        console.log(c12);
    }

    console.log(a12);
    
    
    
}

scopeCheck()

console.log(a13);

var a13 = 10


let b13 = 12

console.log(b13);


const c13 = 13

console.log(c13);


named("Argument");
function named(parameter) {
  console.log("named function");
}

// 2. Annoynmous Function

var Annoynmous = function (parameter) {
    console.log("annonymous function");
};

Annoynmous("Argument");
// Arrow Function

var Arrow = (parameter) => {
    console.log("Arrow Function");
};

Arrow("Argument");

console.clear();



// function methods 

// 1. self invoke function 

// (function a(parameter){
//     alert("hi")
// })("Argument")


// 2. higher order function and csllback function


function function1(){
    console.log("higher order function");
    
}

function function2(){
    console.log("callback function");
    
}


function1(function2())

// example


function add(a,b,callback){ // a = 10, b= 20, callback = sub

    console.log(a+b); // 10 + 20 = 30

    callback(20,20) // sub(20,20)
    

}


function sub(num1,num2){
    console.log(num1-num2); // 20-20 = 0
    
}


add(10,20,sub) // 30,0


// generator function



// defalut parameter function


function clgForm(a,b,c,d="no"){
    console.log("name",a);
    console.log("department",b);
    console.log("cgpa",c);
    console.log("disability",d);
    
}

clgForm("livin","ece",9.7)
clgForm("kamal","ece",9.5,"yes")






function* gen(){
    yield "first price"
    yield "second price"
    yield "jackpet price"
    yield "0 price"
    yield "surprice"
}

let allVal = gen()

// console.log(allVal.next().value);
// console.log(allVal.next().value);
// console.log(allVal.next().value);
// console.log(allVal.next().value);




for(let a3 of allVal){
    console.log(a3);
    
}

console.clear();


// 11. Data Structure (ES6 Edition)

// • Spread operator

// [...], {...}

// we can merge two array , object . we can take clone

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]

let total = [...arr1,...arr2,9,10]

console.log(total);


let obj1 = {
    name1 : "a",
    role  : "trainee",
    salary: 100000
}

let obj2 = {
    name11 : "b",
    role1  : "developer",
    salary1: 300000
}


let totalObj = {...obj1,...obj2,role5 : "hello"}

console.log(totalObj);




// • Rest operator

// (...) - function

// we can store multiple argument in single parameter

function rest(a,b,...c){
    console.log("hello");

    console.log(a,b,c[1]);
    console.log(c);
    
    
    
    
}

rest(1,2,3,4,5,6,7)

// • Destructure

// array

let random = [1,2,3,4]

let one1 = random[0]
let one2 = random[1]
let one3 = random[2]
let one4 = random[3]

console.log(one1 + one4);

// destracture 

let [b11,b2,b3,b4] = random

console.log(b11 + b4);


// obj 

let obj11 = {
    name1 : "john",
    salary: 100000
}

let objVal1 = obj11.name1
let objVal2 = obj11.salary

console.log(objVal1,objVal2);

// destracture 

let {name1,salary} = obj11

console.log(name1,salary);

// nested to normal 

let nested = [1,2,3,[4,5,6,[7]]]

let arrVal7 = nested[3][3][0]


let [c1,c2,c3,[c4,c5,c6,[c7]]] = nested

console.log(c6,c7);

console.clear();



// Array Advance Concept

let arr5 = [1,2,3,4,"hello",true,undefined,null,[1,2],{a:1}]

console.log(arr5);
console.log(arr5[1]);
console.log(arr5[0]);
console.log(arr5[arr5.length-1]);

// homogeneous - we can given same dataType

// hetrogeneous - we can given different dataType inside array

// flexible

// array manipulate method

// condition 

// 1. if you are taking adding method you can add 
// multiple value

// 2. if you are taking remove method means you can remove
// only one value

let random1 = [1,2,3,4]
// pop()    - we can remove last value in array

random1.pop()

// shift() - we can remove first value in array

random1.shift()

// unshift() - we can add first value in array

random1.unshift(0,1)

// push()  - we can add last value in array

random1.push(4,5,6,7)

console.log(random1);


// splice() - starting index , delete count , adding value

let random2 = [1,2,3,40,50,60,7]

random2.splice(3,3,4,5,6)

console.log(random2);



// // // // // Merge: concat, slice, flat, fill, includes, sort, indexOf, lastIndexOf, reverse;


// // // // // concat()

// // // // let ex6 = [1,2,3,4]
// // // // let ex7 = [5,6,7,8]

// // // // let concatVal = ex6.concat(ex7,9,10)

// // // // console.log(concatVal);


// // // // // slice()


// // // // let ex8 = [6,7,8,1,2,3,9,10]

// // // // let sliceVal = ex8.slice(3,6) // Starting Index, End Index + 1

// // // // console.log(sliceVal);


// // // // // flat()

// // // // let ex9 = [1,2,3,[4,5,6,[7,8,[9,[10,11,[12]]]]]]

// // // // let flatVal = ex9.flat(Infinity)

// // // // console.log(flatVal[flatVal.length-2]);


// // // // // fill()

// // // // let ex10  = [1,2,3,4] // 1, two , 3 , 4

// // // // ex10.fill("two",1,2) // value , Starting Index , Ending index + 1

// // // // console.log(ex10);


// // // // // includes()

// // // // let ex11 = [1,5,3,2]

// // // // let includesVal = ex11.includes(4)

// // // // console.log(includesVal);


// // // // // sort()

// // // // let ex12 = ["E",2,1000,9,65,532,4,7,"b"] // 2 > 1.000

// // // // let sortVal = ex12.sort()


// // // // console.log(sortVal);



// // // // // indexOf

// // // // let ex13 = [1,2,3,2,1]

// // // // let indexOfVal = ex13.indexOf(2,2) // value , from Index

// // // // console.log(indexOfVal);

// // // // // lastIndexOf

// // // // let ex14 = [1,2,3,2,1]

// // // // let lastIndexOfVal = ex14.lastIndexOf(2,2) // value,from Index

// // // // console.log(lastIndexOfVal);


// // // // // Reverse 

// // // // let ex15 = [1,2,3,4]

// // // // let reverseVal = ex15.reverse()

// // // // console.log(reverseVal);

console.clear();


// array higher order method


// function aa(){
//     console.log("aa");
    
// }

// function bb(){
//     console.log("bb");
    
// }

// aa(bb())

// 1. forEach()

let fruit3 = ["apple","orange","banana","cherry"]

let forEachVal = fruit3.forEach((currentElement,indexNumber,TotalArray)=>{

    return(currentElement);
    
})

console.log(forEachVal);


// 2. map()

let mapVal = fruit3.map((c,i,t)=>{

    return("map :- ",c);
  
    
})

console.log(mapVal);


// 3. filter()

let emp = [
    {eName : "a", eSalary : 100000},
    {eName : "b", eSalary : 300000},
    {eName : "c", eSalary : 300000},
    {eName : "d", eSalary : 400000},
]


let filterVal = emp.filter((c,i,t)=>{
    return c.eSalary > 200000
})

console.log(filterVal);


// 4. find()

let findVal = emp.find((c,i,t)=>{
    return c.eSalary > 200000;
})

console.log(findVal);


    
emp = [
  { eName: "a", eSalary: 100000 },
  { eName: "b", eSalary: 300000 },
  { eName: "c", eSalary: 300000 },
  { eName: "d", eSalary: 400000 },
];
// 5. reduce()

let reduceVal = emp.reduce((acc,c,i,t)=>{
    return acc + c.eSalary

    //     0   +   1  = 1  
    //     1   +   3  = 4
    //     4   +   3  = 7
    //     7   +   4  = 11

    // return  11  

},0) // 1 // 4  // 7  // 11

console.log(reduceVal);




// 6. some() - OR - ||

let some = [1,2,3,4]

let someVal = some.some((c,i,t)=>{
    return c%2==1

    // 1%2==1 --> true
    // 2%2==1 --> false
    // 3%2==1 --> true
    // 4%2==1 --> false

    // true || false || true || false = true
})

console.log(someVal);

some = [2, 2, 2, 4];

// 7. Every() - AND - &&

let everyVal = some.every((c,i,t)=>{
  return c % 2 == 0;
})

console.log(everyVal);


// 8. sort()

let ran = [1123,9,500,3,8,0]

// 9 500 3 8 0 1123
// 9 3 8 0 500 1123
// 3 8 0 9 500 1123
// 3 0 8 9 500 1123
// 0 3 8 9 500 1123

let ss = ran.sort()

console.log(ss);

let higherSort = ran.sort((a,b)=>{
    return b-a
})

console.log(higherSort);

// arr convert str

// join()

// toString()

let ran1 = [1,2,3,4]

console.log(ran1.join());

console.log(ran1.toString());

console.clear();


// 13. String Methods

// charAt(),  index ---> value

let str1 = "javascript";

let charAtVal = str1.charAt(1)

console.log(charAtVal);



// charCodeAt(), index ---> asscii value

str1 = "javascript";


let charCodeAtVal = str1.charCodeAt(1)

console.log(charCodeAtVal);


// length,

str1 = "javascript";

let lengthVal = str1.length

console.log(lengthVal);


// slice(),

str1 = "javascript";

let sliceVal1 = str1.slice(2,5) // SI , EI + 1

console.log(sliceVal1);



// toUpperCase(), 

str1 = "JavaScript";

let upper = str1.toUpperCase()

console.log(upper);




// toLowerCase(), 

str1 = "JavaScript";

let lower = str1.toLowerCase()

console.log(lower);



// trim(),

str1 = " JavaScript ";

let trimVal = str1.trim()

console.log(trimVal);

// trimStart()

str1 = " JavaScript ";

let trimStartVal = str1.trimStart()

console.log(trimStartVal);


// trimEnd()

str1 = " JavaScript ";

let trimEndVal = str1.trimEnd()

console.log(trimEndVal);



// includes(),

str1 = " JavaScript ";

let includesVal1 = str1.includes("c")

console.log(includesVal1);



// split(), 


str1 = " Java-Script ";


let splitVal = str1.split("a")

console.log(splitVal);




// indexOf(), value -- > index   axis : l --> r

let str2 = "hello-world"

let indexOfVal1 = str2.indexOf("o",5) // "value","fromIndexNumber"

console.log(indexOfVal1);


// lastIndexOf(), value ---> index axis : r --> l

str2 = "hello-world";

let lastIndexOfVal1 = str2.lastIndexOf("l",8)

console.log(lastIndexOfVal1);



// replace(), 

str2 = "hello-world";

let replaceVal = str2.replace("hello","javascript") // "what value u want change","which value you want"

console.log(replaceVal);

// repeat()

str2 = "hello-world";

let repeatVal = str2.repeat(1)

console.log(repeatVal);




// startsWith(), 

str2 = "hello-world";

let startsWithVal = str2.startsWith("h")

console.log(startsWithVal);



// endsWith()

str2 = "hello-world";

let endsWithVal = str2.endsWith("d")

console.log(endsWithVal);

console.clear();


// Date()


let dateVal = Date()

console.log(dateVal);

// get()

// set()

























// 3. function

// 4. Date



