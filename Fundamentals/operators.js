//Arithmetic operators +,-,*,/
let x='10', y=20;//string and number
console.log(x+y);//returns 1020

//if a value is a string , boolean, null or undefined, the javascript engine will first convert the value to a nukber using the Number() function, then perform subtraction
let x1=30, x2=false, x3=true, x4='hi',x5='28';
console.log(x1-x2);//returns 30
console.log(x1-x3);//returns 29
console.log(x1-x4);//returns NaN
console.log(x1-x5);//returns 2

//multiplication: if either value is not number js engine will convert it to number using Number(), then perform multiplication
console.log(x1*x2);//returns 0
console.log(x1*x3);//returns 30
console.log(x1*'5');//returns 150

//division: same concept of Number() method
console.log(x1/6);//returns 5
console.log(x1/x5);//returns 1.071
console.log(x1/x2);//returns infinity
console.log(x1/x3);//returns 30
console.log(x1/x4);//returns NaN

/*
if a value is an object, the JavaScript engine will call the valueOf() method of the object to get the value for calculation
for object valueOf() and toString() methods are used
valueOf():returns a primitive value of an object
toString():return the string represenation of an object
*/
let d=new Date('2024-01-01 12:45:30');
console.log(d.valueOf());//returns a primitive value that is number representing timestamp of the date object
console.log(d.toString());//returns a string that represents the Date object

//for most objects, the valueOf(), returns the object themselves
//toString() returns [object Object]

let person={
    name:"john",
    age:30,
    sayHi: () =>{  //function as a property in an object
        console.log(`hi`);
    },
};
console.log(person.valueOf());//returns { name: 'john', age: 30, sayHi: [Function: sayHi] }
console.log(person.toString());//returns [object Object]

//we can override default toString() method like this

let person2={
    name:"john",
    age:30,
    sayHi: () =>{  //function as a property in an object
        console.log(`hi`);
    },
    toString:function(){
        return `{name: "${this.name}", age: ${this.age}}`;
    },
};
console.log(person2.valueOf());// returns {name: "john", age:30, sayHi:[Function: sayHi], toString:[Function: toString]
console.log(person2.toString());//returns {name: "john", age: 30}

//using javascript arithmetic operators with objects
let energy = {
    valueOf() {
      return 100;
    },
    toString(){
        return 50;
    },
  };
  
  let currentEnergy = energy - 10;
  console.log(currentEnergy);//retuens 90
  
  currentEnergy = energy / 2;
  console.log(currentEnergy);//returns 50
  
  currentEnergy = energy * 1.5;
  console.log(currentEnergy);//returns 150

//if the object doesn't have the  valueOf(), but has the toString(), javascript will call toString() method to get the value for calculation
let energy2 = {
    toString(){
        return 50;
    },
  };
  
  let currentEnergy2 = energy2 - 10;
  console.log(currentEnergy2);//returns 40
  
  currentEnergy2 = energy2 / 2;
  console.log(currentEnergy2);//returns 25
  
  currentEnergy2 = energy2 * 1.5;
  console.log(currentEnergy2);//returns 75



//remainder operator: %
let remainder = 5 % -2;
console.log(remainder); // 1

remainder = 5 % 2;
console.log(remainder); // 1

let remainder2 = -5 % 3;
console.log(remainder2); // -2

let remainder3 = -5 % -3;
console.log(remainder3); // -2

let remainder5 = 10 % Infinity;
console.log(remainder5); // 10

let remainder6 = 0 % 10;
console.log(remainder6); // 0

let remainder7 = '10' % 3;
console.log(remainder7); // 1

//difference between modulo operator in python and remainder operator in javascript
/*
in python result is of same sign as of divisor
# Positive divisor
print(10 % 3)  # Output: 1
print(-10 % 3) # Output: 2

# Negative divisor
print(10 % -3)  # Output: -2
print(-10 % -3) # Output: -1

in javascript result is of same sign as of dividend.
// Positive divisor
console.log(10 % 3);  // Output: 1
console.log(-10 % 3); // Output: -1

// Negative divisor
console.log(10 % -3);  // Output: 1
console.log(-10 % -3); // Output: -1
*/

//to get true modulo operation in javascript
function modulo(a,b){
    return ((a%b)+b)%b;
}
console.log(modulo(-10,-3));//returns -1 like the modulo operator in python

//check if a number is odd
let num=17;
let isOdd=(num%2==1);
console.log(isOdd);//returns true


/*
Assignment operators
a = b	a = b	Assigns the value of b to a.
a += b	a = a + b	Assigns the result of a plus b to a.
a -= b	a = a - b	Assigns the result of a minus b to a.
a *= b	a = a * b	Assigns the result of a times b to a.
a /= b	a = a / b	Assigns the result of a divided by b to a.
a %= b	a = a % b	Assigns the remainder of a and b to a
a &=b	a = a & b	Assigns the result of a AND b to a.
a |=b	a = a | b	Assigns the result of a OR b to a.
a ^=b	a = a ^ b	Assigns the result of a XOR b to a.
a <<= b	a = a << b	Assigns the result of a shifted left by b to a.
a >>= b	a = a >> b	Assigns the result of a shifted right (sign preserved) by b to a.
a >>>= b	a = a >>> b	Assigns the result of a shifted right by b to a.
*/

let y1=10;
y1 += 5;
console.log(y1);//15
let y2=y1 //assigns y1 value to y2
y2 -= 10;
console.log(y2);//5
y2 /= 2.5;
console.log(y2);//2

//Unary operators: take a single operand and perform an operation
/*
Unary Operators	Name	Meaning
+x	Unary Plus	Convert a value into a number
-x	Unary Minus	Convert a value into a number and negate it
++x	Increment Operator (Prefix)	Add one to the value
--x	Decrement Operator (Prefix)	Subtract one from the value
x++	Increment Operator (Postfix)	Add one to the value
x--	Decrement Operator (Postfix)	Subtract one from the value
*/

//The unary plus operator is a simple plus sign (+). If you place the unary plus before a numeric value, it does nothing. For example
let var1=9,
var2= +var1;
console.log(var2);//9

/*
When you apply the unary plus operator to a non-numeric value, it performs a number conversion using the Number() function with the following rules:

Value	Result
boolean	false to 0, true to 1
string	Convert the string value based on a set of specific rules
object	Call the valueOf() and/or toString() method to get the value to convert into a number
*/

let var3='9';
console.log(+var3);//9

let var4=true,
var5=false;
console.log(+var4);//1
console.log(+var5);//0

let product={
    name:'doll',
    id:55,
    toString: function(){
        return 25;
    },
};
console.log(+product);//25

//unary minus
let sub1=10,
sub2= -sub1;
console.log(sub2);// -10

//prefix and postfix increment operator
let x6 = 5;
console.log(++x6); // Output: 6 (x is incremented before it is logged)
console.log(x6);   // Output: 6 (x is now 6)

console.log(x6++); // Output: 6 (x is used first before incrementing)
console.log(x6);   // Output: 7 (x is now incremented to 7)

//prefix and postfix decrement operator
console.log(--x6); // Output: 6 (x is decremented first)
console.log(x6);   // Output: 6 (x remains 6)

console.log(x6--); // Output: 6 (x is used first before decrementing)
console.log(x6);   // Output: 5 (x is now decremented to 5)


//comparison operators: <,>,<=,>=,==,!=
//returns a boolean value whether the comparison is true or not

let a = 10, 
    b = 20; 

console.log(a >= b);  // false
console.log(a == 10); // true

//compare strings
//If the operands are strings, JavaScript compares the character codes numerically one by one in the string.
let name1 = 'alice',
    name2 = 'bob';    

let result1 = name1 < name2;
console.log(result1); // true
console.log(name1 == 'alice'); // true

//In below example, f2 is less than f1 because the letter B has the character code 66 while the letter a has the character code 97.
let f1 = 'apple',
    f2 = 'Banana';
let result2 = f2 < f1;
console.log(result2); // true
let result3 = f2.toLowerCase()<f1.toLowerCase();
console.log(result3);//false

//comparing with another type
console.log(10 > '20');//false converts '20' to numeric value and then compares

//compare an object with a non-object
let apple = {
    valueOf: function () {
      return 10;
    },
  };
  
  let orange = {
    toString: function () {
      return '20';
    },
  };
  console.log(apple > 10); // false
  console.log(orange == 20); // true
  
//not equal to opeator
console.log(10 != '20');//true

//strict equal and not strict equal
console.log('10'==10);//true
console.log('10'===10);//false
console.log('10'!==10);//true

/*Logical Operators
! Logical Not, && Logical And, || logical or
*/

let eligible=false, required=true;
console.log(!eligible);//true
console.log(!required);//false
console.log(!!required);//true
console.log(eligible && required);//false
console.log(eligible || required); //true

//some examples with other data types
console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!''); //true
console.log(!'OK'); //false

//short circuited evealuation
//The && and || operator is short-circuited. It means that the && operator evaluates the second value only if the first one doesn’t suffice to determine the value of an expression
let m=true, n=false;
let mResult= m && (1/0); 
console.log(mResult);//infinity
let nResult= n && (1/0);
console.log(nResult);//false

let resultM= m || (1/0);
console.log(resultM);//true
let resultN= n || (1/0);
console.log(resultN);//infinity

/*
The precedence of the logical operator is in the following order from the highest to the lowest:

Logical NOT (!)
Logical AND (&&)
Logical OR (||)

*/

let a1= true;
let b1= false;
let c1= false;

let result5 = !(a1 && b1) || c1;
console.log(result5); // Output: true

let result6 = !a1 || b1 && c1;
console.log(result6);//false