# JavaScript Control Flow

This document provides the syntax and structure of various control flow mechanisms in JavaScript, starting with conditionals and moving to loops.

---

## 1. **Conditionals**

### 1.1 **`if` Statement**
- Executes a block of code if the condition evaluates to `true`.

```javascript
if (condition) {
  // statements
}
```
### 1.2 **`if ....else` Statement**
-Adds an alternative block when the condition is false.
```javascript
if (condition) {
  // statements
} else {
  // alternative statements
}
```
### 1.3 **`if ....else if ....else` Statement**
-Checks multiple conditions in sequence.

```javascript
if (condition1) {
  // statements
} else if (condition2) {
  // statements
} else {
  // alternative statements
}
```
### 1.4 **`Ternary` Operator**
-A shorthand for if...else

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```
### 1.5 **`Switch `Statement**
- Matches a value against multiple cases.
```javascript
switch (expression) {
  case value1:
    // statements
    break;
  case value2:
    // statements
    break;
  default:
    // fallback statements
}
```
## 2. **Loops**
### 2.1 **`while` Loop**
- Repeats as long as the condition evaluates to true.
```javascript
while (condition) {
  // statements
}
```
## 2.2 **`do...while` Loop**
- Executes the block at least once before checking the condition.
```javascript
do {
  // statements
} while (condition);
```
### 2.3 **`for` Loop**
- Combines initialization, condition checking, and iteration.
```javascript
for (initializer; condition; increment/decrement) {
  // statements
}
```
### 2.4 **`Labeled` Loops**
- Assigns a label to control nested loops using break or continue.
```javascript
labelName: for (initializer; condition; increment/decrement) {
  // statements
}
```
### 2.5 **`break` and `continue`**
-break: Exits the current loop.
-continue: Skips the current iteration and proceeds to the next.
## 3. **Special Operators**
### 3.1 **`Comma `Operator**
- Evaluates multiple expressions and returns the value of the last one.

```javascript
let result = (expression1, expression2);
```
## Notes
- Conditionals determine the flow based on logic, while loops handle repetitive tasks.
- Logical operators (&&, ||) enhance readability and reduce nested structures.
- Use switch for matching discrete values, and prefer for loops for iterations with clear start and end points.
