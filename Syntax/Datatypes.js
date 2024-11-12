//since javascipt is a dynamically typed language we don't need to assign variable type while declaring it
//JavaScript has the primitive types: number, string, boolean, null, undefined, symbol and bigint and a complex type: object.

//type of operator to know datatype
let counter=120;//can declare a floating point value like 12.5 or 0.05 too
console.log(typeof(counter)); //"number"
counter=false;
console.log(typeof(counter));//"boolean"
counter="Hi";
console.log(typeof(counter));//"string"

let message;
console.log(typeof(message));//undefined

let obj=null;
console.log(typeof(obj));//object typeof null returns object it is a known bug in JS
console.log(null==undefined);//true

//NaN stands for not a number. it indicates an invalid number

console.log('a'/2);//NaN
console.log(NaN==NaN);//returns false. NaN doesn't equal any value including itself

//string : use \ to escape single quote
let greeting="I\'m saying hi."
console.log(greeting);//I'm saying hi.

//JavaScript strings are immutable, meaning that they cannot be modified once created. However, you can create a new string from an existing one. For example:
let str="Javascript"
str=str+" string"
console.log(str);//returns Javascript string

str[0]="j";
console.log(str);//won't return javascript string but Javascript string

//symbol datatype:Symbol function creates a new unique value everytime you call it
let s1=Symbol("cricket");
let s2=Symbol("cricket");
console.log(s1==s2);//return false

//object datatype: object collection of properties, where each property is defined as a key-value pair

let contact={
    firstName:"Subhasis",
    lastName:"Gouda",
    address:{
        street:"Patana",
        village:"Suramani"
    }
}
console.log(contact.firstName);//returns Subhasis
console.log(contact['lastName']);//returns Gouda
console.log(contact.address.street);//returns Patana
