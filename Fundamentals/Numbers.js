//Octal numbers:An octal literal number starts with the digit zero (0) followed by a sequence of octal digits (numbers from 0 through 7). For example:
let num=071;
console.log(num);// returns 57 as output

//if there is a number outside of 0 to 8
let num2=081;
console.log(num2);//returns 81

//new way of octal number represenation starts with 0o followed by sequence of octal digits
let num3=0o72;
console.log(num3);//returns 58

/*
let num=0o80;
console.log(num); //yields invalid as 8 is not an octal number
*/

//Hexadecimal numbers start with 0x or 0X followed by any number of hexadecimal digits (0 through 9, and a through f). For example:
let num4=0x1a;
console.log(num4);//returns 26

//big number represenation by e-notation
let num5=3.14e7;
console.log(num5);//returns 31400000

let num6=5e-7;
console.log(num6);//returns 0.0000005

//bigint: stores values whose values are greater than 2^53 -1
let pageview=9007199254740991n;
console.log(typeof pageview);//returns bigint

//numeric separator can be used in any type of number types for visual readability

let num7=1_000_000_000;
let num8=120_201_123.05;
console.log(num7);
console.log(num8);
