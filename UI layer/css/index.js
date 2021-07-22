/**
 let a=5;
let b=3;
function sum(a,b)
{
    let c=a+b;
    console.log(c);
}
sum(a,b);
*/
/*function myFunction(a,b) {
    console.log(a);
    console.log(b);

}
*/
//myFunction(true,null);
//myFunction();// undefined ,undefined
//console.log(myFunction(7,8));// undefined
/*function func1(a,b)
{
    console.log(a,b);
}
function func2(a,b)
{
    console.log(a,b);
}
func1(2,3);
func1(5,6);
*/
/*function sum(a,b)
{
    return a+b;

}
sum(10,5);// function returns 15 bt console will shw nthng
console.log(sum(10,5));/15
*/
/*function func(a)
{
    console.log(a);
    return a; //function stops here
    console.log(a);
}
func (10);
*/
/*
function mult(x,y,z)
{
    let c;
    c=x*y*z;
    console.log(c);
}
mult(1,2,3); //6
mult(2,3,"abc"); //NaN
mult(); //NaN
console.log(mult(2,3,5)); //30 is printed inside the function and funtion returns "undefined"
*/
/*
function concatenatestrings(str1,str2)
{
    return str1 + " " + str2;
}
const str3 = concatenatestrings("hello","world");
console.log(str3);
*/
/*
function outerFunction(a,b)
{
    function innerFunction(c)
    {
        return c*c;
    }
    const sum= a+b;
    const result=innerFunction(sum);
    console.log(result);
}
outerFunction(2,3);
*/
/*
assign function exp to variable*/
/*
const myFunction =function() { };
console.log(myFunction()); //undefined
*/
//callback function
/*
setTimeout(function() {
    console.log("Delayed message");
},1000);
*/
/*
let i=1;
setInterval(function() // it will display same msg 1000 times
{
    console.log("message logged each 1 second" + i);
    i=i+1;
},1000);
*/

/*
let i=1;
const myInterval= setInterval(function()
{
    console.log("here is message number " + i);
    i=i+1;
},2000);

setTimeout(function() {
    clearInterval(myInterval);
},10000);
*/
/* ARITHMETIC OPERATORS*/
/*let a,b;
a=1;
b=2;
console.log(a+b); 
console.log(a*b);
console.log(a/b);
console.log(a-b);

a="abc";
b=5;
console.log(a+b); //abc5
console.log(a*b);//NaN
console.log(a/b);//NaN
console.log(a-b);//NaN

let c="1";
//UNARY PLUS
console.log(+c);
c=undefined;
console.log(+c); //NaN
//UNARY MINUS
c="5";
console.log(-c);//-5
c="abc";
console.log(-c); //NaN
//++
let d=5;
++d; // same as d=d+1
console.log(d); //6
d++;
console.log(d); //7
// built in ++ function fst return value of the operand and then increments the value of an operand
console.log(d++); //8
// built in ++ function fst increments value of d operand and then return value of the operand
console.log(++d); //8
console.log(d); //9
//--
console.log(d--); //9
console.log(d); //8
console.log(--d); //7 //same as d=d-1
console.log(d); //7
*/

// comparison operators
/*
let a,b,c;
a=5;
c=5;
b=7;
console.log(a < b);
console.log(a > b);

console.log(a <= c);
console.log(a >= c);

let mystr1,mystr2,mystr3;
mystr1= "abc";
mystr2 ="bcd";
mystr3= "Bcd"

console.log(mystr1 > mystr2); //false
console.log(mystr1 < mystr2); //true
console.log(mystr1 > mystr3); //true bcz a>B

//equality operators
let mystring= "0";
let mynum= 0;
let myboolean = false;
console.log(mystring == mynum); // true //equality operator only check values
console.log(mynum == myboolean); //true bcuz false value is also 0 so it matches wd mynum value (true:1,false:0)
// type and value are compared in ===
console.log(mynum === myboolean); //false
console.log(mynum === mystring); //false
console.log(mynum === Number(mystring) ); //true
console.log(mynum === +(mystring) ); //true


console.log(mynum != mystring); //false
console.log(mynum !== mystring); // true bcuz types r different

//NEVER USE == AND !== OPERATORS

console.log(null === undefined); //false bcuz of differentr type
console.log(0 === "" === null === undefined === false); //true bcuz of associativity
//logical operators or ||
console.log(true || false); //true
console.log(false ||  true); //true

console.log("abc" || ""); //abc
console.log("" || "abc"); //abc
console.log("" || ""); // empty string ""
console.log("" || 0 || null || undefined || NaN || false); //false that is last option bcuz all previous otions are falsee

let city;
const defalt = "new york";
console.log(city || defalt); // new york bcuz city  has undefined value and it is falsy value
city = "los angeles";
mycity = city || defalt;
console.log(mycity); // los angeles bcuz when fst operand is  found to be true so it dont go further
// and operator &&
console.log(true && false); //false
console.log(false &&  true); //false
console.log("abc" && 10 && false && "" && "abcd"); //false
console.log("abc" && 10 && NaN && "" && "abcd"); //NaN
// and operator returns value of fst falsy operand
//if all operands are truthy,value of last operand will be returned
console.log("abc" && 10 && true && 123 && "Hello"); //hello

// not operator !
console.log(!"abc"); //false
connsole.log(!""); //true
let my variable;
myvariable= undefined;
console.log(!myvariable); //true bcuz value of undefined is false
console.log(!!myvariable); //false

// OPERATORS PRECEDENCE
console.log(2+4*10); //42
console.log((2+4)*10); //60
let a;
a=1;

a=a+5; //first call + operator and then =
console.log(a); //6
// OPERATOR ASSOCIATIVITY
let a,b;
b=3;
a=b=5; //r8 to lft associativity
console.log(a,b);  
console.log(6 + 4+ 5); //15
console.log(4 + 5+ 6); //15
console .log(5 * 10/2); //25
*/
// CHALLENGE
/*
let myVariable1 , myVariable2;
myVariable1 =10;
myVariable2 ="5";
//to convert both variables to no.s

console.log(+myVariable1 <= +myVariable2); //false
console.log(+myVariable1 >= myVariable2);  //true
*/
/*
let myNumber1=20;
let myNumber2=2;
console.log(myNumber1 % myNumber2);
console.log(100 % 30 % 3); //1  // left to r8 associativity
*/
/*
console.log(3 || true && null || false);
//step1 true && null ->null
// step2 3|| null --> 3 bcuz 3 is true
// result is 3
*/
// find alternatives\
/*
let a=10;
// a= a+1; 
a+=1;
console.log(a);

// a= a*2;
a*=2;
console.log(a);

a-=5
//a=a-5;
console.log(a);

a/=2;
//a=a/2;
console.log(a);
*/
/*
"use strict"; //prevents usage of undeclared variables

function myFn() {
    a=true;
    console.log(a);

}
myFn();
console.log(a);
*/

//PRACTICE
/*
var a=10;
let b=  true;

console.log(a);  //10
console.log(window.a); //10

console.log(b);  //true
console.log(window.b); //undefined

const c= "abc";
console.log(c); //"abc"
console.log(window.c); //undefined
*/
/*

function myFunction(a)
{
    console.log(a); //here a will be treated as local sOPED VAriable //undefined
    console.log(b); //true
}

console.log(myFunction);
console.log(window.myFunction); 
*/
//example2 scope chain
/*
const c=2;
function sum(a,b)
{ const c=3;
    function mult(a,b)
    {
        return a*b *c; //150 althugh c was not declared in mult function bt its declared in sum function so it looked and picked frm dre

    }
    mult(a,b); //here it is just an call ,it is not supposed to display thru return or console
    return a+b;
}
const result =sum(10,5);
console.log(result); //15
*/
//undeclared variable
/*
a=10; // variable a will be automatically declared in global scope
console.log(a); //10

const myFunction = function()
{
    b=5; //varible b will be automatically declared in global scope
    console.log(b);
}

myFunction(); //5
console.log(b); //5 
*/
//CHALLENGES
/*
const  b=2;
let d=15;
function myFn1(a)
{
let b;
let d=10;
myFn2(b);
}

function myFn2(a){
let c=5;
console.log(a,b,c,d);
}

myFn1();
// a=undefined,b=2, c=5,d=15
*/
/*
"use strict"
function myFunction() {
    let a=2;
    return a;
}

myFunction();
*/

//Callback function
/*
setTimeout(function myFn()
{
    console.log("hello");
},2000);

myFn(); //it is an arguement to function ,not a globally scoped function
//answer
//uncaught reference error
//hello from myFn
*/
//ARRAY
/*
const myArray = [1,2,3,4];
console.log(myArray);

myArray[2] ="abc"; 

console.log(myArray);

myArray[4] =true;
console.log(myArray);
console.log(myArray.length); */
//PUSH
/*
const myArray=[1,2,3,4];
console.log(myArray);
myArray.push("abc");
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift("hii");
console.log(myArray);
*/
//Example
//const myArray = [];
//console.log(myArray);
/*
const myArray = [];
myArray[0] ="first element";
console.log(myArray);
myArray[1] = "Second element";
console.log(myArray);
myArray.push("third element");
console.log(myArray);
*/
/*
const myArray = [3, true, "abc" , {}];

console.log(myArray);
myArray[1] ="new value for 2nd element";
console.log(myArray);

myArray[3].newProp =  10; // it will create new property newprop at index 3
 console.log(myArray);
console.log(myArray[3].newProp); //10
*/
/*
const myArray = [true, null, 1,2, "abc"];

delete myArray[2];
console.log(myArray);  //element wd index 2 is empty*/
//COMPARE ARRAYS
/*
const myArray1 = [1,2,3];
const myArray2 = [1,2,3];

console.log(myArray1 === myArray2); //false

const copyofmyarray1 === myArray1;
console.log(copyofmyarray1 ===  myArray1); //true
*/
//CHALLENGE
/*
const myArray= [1,2];
console.log(myArray.length); //2

myArray[10] ="abc";
console.log(myArray.length); //11
console.log(myArray); 
*/
//create array wd 3 objects
/*
const arrayofcars = [
    {
        carBrand: "Toyota",
        price: 12000
    },
    {
        carBrand: "tesla",
        price : 30300

    },
    {
        carBrand: "BMW",
        price: 25000
    }
]
console.log(arrayofcars);
const newcar ={
    carBrand : "honda",
    price : 10000
};
arrayofcars.push(newcar);
console.log(arrayofcars);*/
/*
const myObject = {
    a:10,
    b:null
};

function myFunction()
{
    console.log(this);
   
}
myFunction();
 myFunction.call(myObject);
*/
/*
const myObject = {a:10,b:null};
 function myFunction(a,b) {
     console.log(a+b);
     console.log(this);
 }
 const customfunction3 = myFunction.bind(myObject,10);
 customfunction3(20);
 */
"use strict";
function sum(...args)
{
    var total;
     total= args.reduce((acc,elem)=> acc+elem ,0);
    console.log(total);

}
sum(1,3);
sum(10,20,30);