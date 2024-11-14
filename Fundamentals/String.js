//ES6 introduced string declaration with in backtick (`). allows use of quotes without escape characters in string

let studying=`I'm studying in "Sridhar High School"`
console.log(studying)

//can also place variables and expressions inside a template literal

let name='Subhasis';
let message= `Hi I'm ${name}`
console.log(message);// returns Hi I'm Subhasis.

//length of string
let name2= `Subhasis Gouda`;
console.log(name2.length);//returns 14
//accessing characters
console.log(name2[3]);//returns h
//accessing last character
console.log(name2[name2.length-1]);//returns a

//concatenation
let name3='Kalia';
let name4=name3 + 'guda'
console.log(name4);//returns Kaliaguda

//piece by piece concat method
let villageName="Suramani";
villageName += ", Ganjam";
villageName +=", Odisha"
console.log(villageName);//returns Suramani, Ganjam, Odisha

//comparing strings
/*
The first character in "Subhasis" is "S" and in "gouda" it is "g".
The Unicode value of "S" (83) is less than the Unicode value of "g" (103).
Since "S" is less than "g", JavaScript determines that "Subhasis" is less than "gouda".
*/
let firstName= "Subhasis"
let secondName= "gouda"
console.log(firstName>secondName);//returns false
