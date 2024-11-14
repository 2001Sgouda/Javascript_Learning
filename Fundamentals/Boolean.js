//Boolean primitive type has two literal values true and false

let completed=true;
let running=false;

//to cast a non boolean value to a boolean value
//for string

let error="hi";
let hasError=Boolean(error)
console.log(hasError);//returns true

let error2="";
let hasError2=Boolean(error2);
console.log(hasError2);//returns false because empty string

//same concept applies for any non zero number and 0,NaN
//any object - values converted to true, for null- values converted to false
//for undefined the value converted to false

let num1=5, num2=0;
let isnum1=Boolean(num1);
let isnum2=Boolean(num2);
console.log(isnum1);//returns true
console.log(isnum2);//returns false