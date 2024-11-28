//adding an element to the end of an array
let numbers=[10,20,30];
numbers.push(40);
let ArrayLength=numbers.length;
console.log({numbers});//{ numbers: [ 10, 20, 30, 40 ] } logs output as an object with index value pair
console.log({ArrayLength});//{ ArrayLength: 4 }
numbers.push(50,60);
console.log(numbers);//[ 10, 20, 30, 40, 50, 60 ]

//append elements of one array to another spread(...)operator
let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];
colors.push(...cmyk);
console.log(colors);//['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black']

//unshift() methoda adds one/more elements to the beginning of an array
let numbers2=[20,30,40];
numbers2.unshift(0,10);
console.log(numbers2);//[ 0, 10, 20, 30, 40 ]

//prepend elemnts of an array to another array
let numbers3=[-30,-20,-10];
numbers2.unshift(...numbers3);
console.log(numbers2);//[-30, -20, -10, 0, 10, 20, 30, 40]
//pop method to remove the last element of an array
numbers2.pop();
console.log(numbers2);//[-30, -20, -10, 0, 10, 20, 30]
//pop method on an empty array
let numbers4=[];
console.log(numbers4.pop());//undefined

//shift method removes first element from an array
let array=[10,20,30];
let poppedNumber =array.shift();
console.log(poppedNumber);//10
console.log(array);//[20,30]

//splice method to delete element
let array2=[10,20,30,40,50];
let delElement = array2.splice(0,3)//0=starting index, 3=no of items to delete
console.log(array2);//[40,50]
console.log(delElement);//[10,20,30]

//insert element
array2.splice(1,0,60,70);//1=starting position to insert, 0=means not to delete any elements, 60,70=elements to be inserted
console.log(array2);//[40,60,70,50]
//replacing elents
array2.splice(1,1,80);
console.log(array2);//[40,80,70,50]

