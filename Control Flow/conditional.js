//if statement 
/*
if (condition) {          //generally the condition evaluates to a boolean value true or false, if true the statements inside the blocks get executed
  // statements to execute
}
*/
let age=18;
if (age>=15){
    console.log("He is older than 15 years old");//returns this string
}

//nested if
let age2=25, profession='doctor';
if(age2>24){
    if(profession=='shopKeeper'){
        console.log('Perfect candidate');//won't return this string as output as nested if statement is false
    }
}
//avoid using nested if, use logical operator
if(age2>=25 && profession =='doctor'){
    console.log('perfect');//returns perfect
}
if(age2>=25 || profession =='engineer'){
    console.log('also perfect');//returns also perfect because one condition is true and logical or operator is used here
}

//if the condition inside if block is false, we can execute some statements inside else block
/*
if( condition ) {
  // ...
} else { 
  // ...
}
*/
if(age2>25){
    console.log('You can sign up');
}else{
    console.log('You need to be atleast 25 to sign up');//returns this as if block condition is false 
}

//to check multiple conditions though we can use if ...elsemif ....else statements like this
/*
if (condition1) {
  // ...
} else if (condition2) {
  // ...
} else if (condition3) {
  //...
} else {
  //...
}
*/
let weight = 70; // kg
let height = 1.72; // meter

// calculate the body mass index (BMI)
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
  weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = 'Overweight';
} else {
  weightStatus = 'Obesity';
}

console.log(weightStatus);//returns healthy weight as per calculation

//ternary operator is used as a shortened form of if else control flow structure
/*
Syntax:
condition ? expressionIfTrue : expressionIfFalse;
*/
let age1=19;
let message;

age1>18? (message='Can drive'):(message=`can't drive`);
console.log(message);//returns Can drive

//we can implement if..else if..else too
let speed=90;
let criteria;

speed>=120? (criteria='too fast'):speed>=80?(criteria='still fast'):(criteria='ok safe');
console.log(criteria);

//switch case: 
/*
The switch statement evaluates an expression, compares its results with case values, and executes the statement associated with the matching case value.

Syntax:
switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    case value3:
        statement3;
        break;
    default:
        statement;
}
*/
//to get the day of the week
let day=4, dayName;
switch(day){
    case 1:
        dayName='Sunday';
        break;
    case 2:
        dayName='Monday';
        break;
    case 3:
        dayName='Tuesday';
        break;
    case 4:
        dayName='Wednesday'
        break;
    case 5:
        dayName='Thursday';
        break;
    case 6:
        dayNme='Friday';
        break;
    case 7:
        dayName='Saturday'
        break;
    default:
        dayName='Invalid day'
}
console.log(dayName);//returns Wednesday
// if day is anything beyond 1-7 in this example it will return the default statement Invalid day
