//To avoid repeating the same code all over places, we use function to wrap that code and resuse it
//there are many built-in fucntions such as parseInt(), parseFloat()

//Declaration of xustom function
/*
  function functionName(parameters) {
    // function body
    // ...
}
*/
//with no parameters
function sayHi(){
    console.log("Hi");
}
sayHi();//Hi

//with one parameters
function square(b){
    return b*b;
}
console.log(square(7));//49

//with multiple parameters
function add(a,b){  //a,b are parameters
   return a+b;
}
console.log(add(8,9));//17.  Here 8,9 are arguments


//calling a function is called invoking a function
// When declaring a function, you specify the parameters.
//However, when calling a function, you pass the arguments corresponding to the parameters.

//returning a value:
//every function implicitly returns undefined unless you explain a specific return value
function say(message){
    console.log(message); //no return expression here.
}
let result=say('Hello');
console.log(result); // Hello undefined

//with return value
function say2(message){
    return message;
}
let result2=say2('Hello');
console.log(result2);// Hello

//return with conditionals
function compare(a,b){
    if(a>b){
        return 1;
    }else if(a<b){
        return -1;
    }
    return 0;
}
console.log(compare(55,49));//1

//the function immediatley stops executing when it reaches the return statement
//Example: show nothing if the message is empty
function show(message){
    if(!message){
        return;
    }
    console.log(message);
}
show('Hi');//Hi
show('');// No output because the function exits at the `return` statement.
show();//No outputs because message is undefined and the function exits.

//the arguments object
function addition(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i]
    }
    return sum;
}
console.log(addition(2,5));//7
console.log(addition(1,2,3,4,5,6,7,8,9,10));//55

//function hoisting
// In JavaScript, function declarations are hoisted to the top of their scope (script or function). This means that you can call a function before it is defined in the code.
showMe(); // Function is called before its declaration

function showMe() {
  console.log('a hoisting example');
}
/*
Before execution, javascript processes the code as if it looks like this.
function showMe() { 
  console.log('a hoisting example');
}
showMe(); // Call the function
*/
