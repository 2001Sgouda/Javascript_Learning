//indexOf() method
//const index = array.indexOf(searchElement, fromIndex)

let scores=[10,20,30,40,50];
let index=scores.indexOf(30);
console.log(index);//2

let index2=scores.indexOf(30,1);
console.log(index2);//2 because when it searches from index1, value 30 first appears in array at index 2

scores.push(20);
console.log(scores);//[ 10, 20, 30, 40, 50, 20 ]
//now from indexOf will behave differently
let index3=scores.indexOf(20,2);
console.log(index3);//5 beacuse when it searches from 2nd index, value 20 appears first in fifth index in array

//negative from index argument
let index4=scores.indexOf(20,-6);
console.log(index4);//1  ,As here -6 index is basically index 0

