//ordered lsit of values. Each value called element specified by index. index starts from 0.
//can hold values of mixed types
//no need to specify array size upfront. it is dynamic 

//create array using Array constructor
let scores=Array();//empty array
console.log(scores); 
let scores2=Array(10);//array holds 10 value
console.log(scores2.length);//returns 10

scores=[5,3,8];
console.log(scores);

//we can create it directly too
let scores3=Array(9,10,13,18,21);//creates an array with five numbers
console.log(scores3)

let colors=Array('Red'); //creates an array with single element Red
console.log(colors)

//most prefered way let arrayName =[ele1,ele2,..], for empty array let arrayName= []
let color=['Red','Black','Blue'];
console.log(color.length);//returns 3
//access element
console.log(color[2]);//returns Blue
//change value
color[2]='Gray';
console.log(color);//with Gray in it instead of Blue

//operations on array
//add element to the array
color.push('purple');
console.log(color);//returns with purple added to it

//add element beginning of the array
color.unshift('dark blue');
console.log(color);//returns with dark blue added and at index 0

//removing element from end of an array
color.pop();
console.log(color);//removed purple

//removing element ftom beginning of an array
color.shift();
console.log(color);//removed dark blue

//to find an index of element use indexOf()
console.log(color.indexOf('Black'));//returns 1

//to check if a value is an array use Array.isArray()
console.log(Array.isArray(color));//returns true