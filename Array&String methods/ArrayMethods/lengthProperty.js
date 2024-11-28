//length property in dense arrays
let colors=['red','green','black'];
console.log(colors.length)//3
colors.push('grey');
console.log(colors.length);//4
//removing elements using length 
colors.length=3;
console.log(colors);//['red','green','black']

//length property in sparse arrays
let numbers=[10,,20,30];
console.log(numbers.length);//4
numbers[1]=15;
console.log(numbers);//[10,15,20,30]
//making the array sparse
numbers.length=6;
console.log(numbers);//[ 10, 15, 20, 30, <2 empty items> ]
//empty an array using length property
numbers.length=0;
console.log(numbers);//[]


