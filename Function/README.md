# JavaScript Functions Documentation
- This section covers JavaScript Functions, their syntax, usage, and types. Functions allow code reuse, modularity, and organization. Here's an overview:

## 1. Functions: What and Why?
- Functions are blocks of reusable code.
Built-in Functions: Examples include parseInt(), parseFloat(), etc.
- User-defined Functions: Custom logic created to meet specific requirements.
## 2. Declaring Functions
- A basic function declaration:

```javascript
function functionName(parameters) {
    // function body
    // ...
}
```
- Example: Function with No Parameters
```javascript
function sayHi() {
    console.log("Hi");
}
sayHi(); // Output: Hi
```
- Function with Parameters
```javascript
function square(num) {
    return num * num;
}
console.log(square(7)); // Output: 49
```
- Function with Multiple Parameters
```javascript
function add(a, b) {
    return a + b;
}
console.log(add(8, 9)); // Output: 17
```
## 3. Function Invocation
- Declaring functions involves specifying parameters.
- Calling a function involves passing arguments corresponding to those parameters.

- Example: Implicit undefined Return
```javascript
function say(message) {
    console.log(message);
}
let result = say('Hello'); // Logs: Hello
console.log(result);       // Output: undefined
```
- Example: Explicit Return Value
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("John")); // Output: Hello, John!
```
## 4. Return Statement Behavior
The return statement:

- Exits the function immediately.
- Returns a value (if specified).
Example: Conditional Return
```javascript
function compare(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}
console.log(compare(55, 49)); // Output: 1
```
## 5. The arguments Object
- Functions have access to an arguments object, an array-like object holding all arguments.

- Example: Sum of All Arguments
```javascript
function addition() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(addition(2, 5)); // Output: 7
```
## 6. Function Hoisting
- Function declarations are hoisted, allowing usage before declaration.

```javascript
hoistedFunction();

function hoistedFunction() {
    console.log("This is hoisted!");
}
// Output: This is hoisted!
```
## 7. Functions as First-Class Citizens
- Functions can be stored in variables.
- They can be passed as arguments or returned from other functions.
### Storing a Function in a Variable
```javascript
function subtract(a, b) {
    return a - b;
}
let difference = subtract;
console.log(difference(20, 9)); // Output: 11
```
### Passing Functions as Arguments
```javascript
function add(a, b) {
    return a + b;
}
function avg(a, b, fn) {
    return fn(a, b) / 2;
}
console.log(avg(20, 50, add)); // Output: 35
```
### Returning Functions
```javascript
function createPrefixer(prefix) {
    return function(name) {
        return `${prefix} ${name}`;
    };
}
const mrPrefixer = createPrefixer('Mr');
console.log(mrPrefixer('John')); // Output: Mr John
```
## 8. Anonymous Functions
- Anonymous functions are functions without a name, often used temporarily in variables, callbacks, or immediate execution.

### Assigned to Variables
```javascript
let greet = function () {
    console.log("Hello!");
};
greet(); // Output: Hello!
```
### Used as Arguments
```javascript
setTimeout(function () {
    console.log("Delayed execution");
}, 1000); // Output after 1 second: Delayed execution
```
### Immediately Invoked (IIFE)
```javascript
(function () {
    console.log("IIFE executed!");
})(); // Output: IIFE executed!
```
## 9. Arrow Functions
- Arrow functions are a shorthand for declaring anonymous functions.

Basic Syntax
```javascript
let add = (a, b) => a + b;
console.log(add(20, 30)); // Output: 50
```
## 10. Recursive Functions
- Functions that call themselves until a base condition is met.

Example: Countdown
```javascript
function countDown(fromNumber) {
    console.log(fromNumber);
    if (fromNumber > 1) countDown(fromNumber - 1);
}
countDown(3); // Output: 3, 2, 1
```
## 11.  Default Parameters
- Define default values for parameters.

```javascript
function say(message = "Hi") {
    console.log(message);
}
say(); // Output: Hi
say("Hello"); // Output: Hello
```
## 11. Object Manipulation
- Passing objects to functions allows modification of their properties but not the reference.

```javascript
let person = { name: 'John', age: 30 };
function increaseAge(obj) {
    obj.age += 1;
}
increaseAge(person);
console.log(person); // Output: { name: 'John', age: 31 }
```
This comprehensive guide covers JavaScript functions with examples to illustrate concepts effectively